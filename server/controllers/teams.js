import Teams from "../models/Team.js";
import User from "../models/User.js";
import { createError } from "../error.js";

export const getTeam = async (req, res, next) => {
  try {
    const team = await Teams.findById(req.params.id)
      .populate("members.id", "_id name email image")
      .populate({
        path: "projects",
        populate: {
          path: "members.id",
          select: "_id name email",
        },
      });

    let isUserVerified = false;
    await Promise.all(
      team.members.map(async (member) => {
        if (member.id.id === req.user.id) {
          isUserVerified = true;
        }
      })
    );

    if (isUserVerified) {
      return res.status(200).json(team);
    } else {
      return next(createError(403, "You are not allowed to see this Team!"));
    }
  } catch (e) {
    next(e);
  }
};

export const addTeam = async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if (!user) return next(createError(404, "User not found"));

  const newTeam = new Teams({
    members: [{ id: user.id, role: "d", access: "Owner" }],
    ...req.body,
  });

  try {
    const saveTeam = await newTeam.save();
    await User.findByIdAndUpdate(
      user.id,
      { $push: { teams: saveTeam._id } },
      { new: true }
    );
    res.status(200).json(saveTeam);
  } catch (err) {
    next(err);
  }
};

export const updateTeam = async (req, res, next) => {
  try {
    const team = await Teams.findById(req.params.id);
    if (!team) return next(createError(404, "Team not found!"));
    const memberId = req.user.id;
    const member = team.members.find((m) => m.id.toString() === memberId);
    if (!member)
      return next(
        createError(
          403,
          "You can update only if you are a member of this team!"
        )
      );
    const allowedAccess = ["Owner", "Admin", "Editor"];
    if (!allowedAccess.includes(member.access))
      return next(createError(403, "You are not allowed to update this team!"));
    const updatedTeam = await Teams.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedTeam);
  } catch (e) {
    next(e);
  }
};

export const deleteTeam = async (req, res, next) => {
  try {
    const team = await Teams.findById(req.params.id);
    if (!team) {
      return next(createError(404, "Team not found!"));
    }
    for (const member of team.members) {
      if (member.id.toString() === req.user.id) {
        if (member.access === "Owner") {
          await team.delete();
          const pullTeam = { $pull: { teams: req.params.id } };
          await User.findByIdAndUpdate(req.user.id, pullTeam, {
            new: true,
          }).exec();
          for (const member of team.members) {
            await User.findByIdAndUpdate(member.id, pullTeam, {
              new: true,
            }).exec();
          }
          res.status(200).json("Team has been deleted successfully");
        } else {
          return next(
            createError(403, "You are not allowed to delete this Team!")
          );
        }
      }
    }
  } catch (err) {
    next(err);
  }
};
