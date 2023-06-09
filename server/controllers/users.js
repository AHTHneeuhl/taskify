import User from "../models/User.js";
import Project from "../models/Project.js";
import Teams from "../models/Team.js";
import Notifications from "../models/Notification.js";
import createError from "../error.js";

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (e) {
    next(e);
  }
};
export const getUserDetails = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id)
      .populate("notifications")
      .populate({
        path: "teams",
        populate: {
          path: "members.id",
          select: "_id name email",
        },
      })
      .populate("projects")
      .populate("works")
      .populate("tasks");
    res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};

export const getUserByEmail = async (req, res, next) => {
  const email = req.params.email;
  const users = [];

  try {
    const user = await User.findOne({
      email: { $regex: email, $options: "i" },
    });
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      users.push(user);
      res.status(200).json(users);
    }
  } catch (e) {
    next(e);
  }
};

export const getUserWorks = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id)
      .populate({
        path: "works",
        populate: {
          path: "tasks",
          populate: {
            path: "members",
            select: "name image",
          },
        },
      })
      .populate({
        path: "works",
        populate: {
          path: "creatorId",
          select: "name image",
        },
      })
      .sort({ updatedAt: -1 });
    if (!user) {
      return next(createError(404, "User not found"));
    }
    res.status(200).json({ works: user.works });
  } catch (e) {
    next(e);
  }
};

export const getUserTasks = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id)
      .populate({
        path: "tasks",
        populate: {
          path: "members",
          select: "name image",
        },
      })
      .sort({ updatedAt: -1 });
    if (!user) {
      return next(createError(404, "User not found"));
    }
    res.status(200).json({ tasks: user.tasks });
  } catch (e) {
    next(e);
  }
};

export const getUserProjects = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).populate("projects");
    const projects = [];
    for (const projectId of user.projects) {
      const projectData = await Project.findById(projectId).populate(
        "members.id",
        "_id name email image"
      );
      projects.push(projectData);
    }
    res.status(200).json(projects);
  } catch (e) {
    next(e);
  }
};

export const getUserTeams = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).populate("teams");
    const teams = await Promise.all(
      user.teams.map(async (team) => {
        try {
          const teamDetails = await Teams.findById(team.id);
          return teamDetails;
        } catch (err) {
          next(err);
        }
      })
    );
    res.status(200).json(teams);
  } catch (err) {
    next(err);
  }
};

export const getNotifications = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    const notifications = user.notifications;
    const notificationArray = [];
    for (const notificationId of notifications) {
      const notification = await Notifications.findById(notificationId);
      notificationArray.push(notification);
    }
    res.status(200).json(notificationArray);
  } catch (err) {
    next(err);
  }
};
