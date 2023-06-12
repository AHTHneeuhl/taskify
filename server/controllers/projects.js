import { Types } from "mongoose";
import Projects from "../models/Projects.js";
import Users from "../models/Users.js";
import Works from "../models/Work.js";

export const getProject = async (req, res, next) => {
  try {
    const project = await Projects.findById(req.params.id).populate(
      "members.id",
      "_id name email image"
    );

    let isVerified = false;

    await Promise.all(
      project.members.map(async (member) => {
        if (member.id.id === req.user.id) isVerified = true;
      })
    );

    if (isVerified) return res.status(200).json(project);

    return next(createError(403, "You are not allowed to view the project!"));
  } catch (error) {
    next(error);
  }
};

export const addProject = async (req, res, next) => {
  const user = await Users.findById(req.user.id);
  if (!user) return next(createError(404, "User not found"));

  const newProject = new Projects({
    members: [
      {
        id: user.id,
        img: user.img,
        email: user.email,
        name: user.name,
        role: "d",
        access: "Owner",
      },
    ],
    ...req.body,
  });

  try {
    const savedProject = await newProject.save();

    await Users.findByIdAndUpdate(
      user.id,
      { $push: { projects: savedProject._id } },
      { new: true }
    ).exec();

    res.status(200).json(savedProject);
  } catch (error) {
    next(error);
  }
};

export const updateProject = async (req, res, next) => {
  const projectId = req.params.id;
  const userId = req.user.id;
  const project = await Projects.findById(projectId);

  if (!project) {
    return next(createError(404, "Project not found!"));
  }

  const member = project.members.find(
    ({ id }) => id.toString() === userId.toString()
  );

  if (!member) {
    return next(
      createError(
        403,
        "You can update only if you are a member of the project!"
      )
    );
  }

  const { access } = member;

  if (!["Owner", "Admin", "Editor"].includes(access)) {
    return next(createError(403, "You are not allowed to update the project!"));
  }

  try {
    const updatedProject = await Projects.findByIdAndUpdate(
      projectId,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedProject);
  } catch (error) {
    next(error);
  }
};

export const deleteProject = async (req, res, next) => {
  try {
    const project = await Projects.findById(req.params.id);
    if (!project) return next(createError(404, "Project not found!"));

    const userId = req.user.id.toString();
    const ownerIndex = project.members.findIndex(
      (member) => member.id.toString() === userId && member.access === "Owner"
    );

    if (ownerIndex === -1) {
      return next(
        createError(403, "You are not allowed to delete the project!")
      );
    }

    await project.delete();

    await Users.findByIdAndUpdate(
      userId,
      { $pull: { projects: req.params.id } },
      { new: true }
    ).exec();

    for (const member of project.members) {
      if (member.id.toString() !== userId) {
        await Users.findByIdAndUpdate(
          member.id,
          { $pull: { projects: req.params.id } },
          { new: true }
        ).exec();
      }
    }

    res.status(200).json("Project has been deleted successfully");
  } catch (error) {
    next(error);
  }
};

export const getProjectMembers = async (req, res, next) => {
  const { id } = req.params;

  if (!Types.ObjectId.isValid(id)) {
    return next(createError(400, "Invalid project Id"));
  }

  try {
    const project = await Projects.findById(id);

    if (!project) {
      return next(createError(404, "Project not found"));
    }

    res.status(200).json({ members: project.members });
  } catch (error) {
    next(error);
  }
};

export const updateMembers = async (req, res, next) => {
  try {
    const project = await Projects.findById(req.params.id);
    if (!project) {
      return next(createError(404, "Project not found!"));
    }

    for (const member of project.members) {
      if (member.id.toString() !== req.user.id.toString()) {
        continue;
      }

      if (!["Owner", "Admin", "Editor"].includes(member.access)) {
        return next(
          createError(403, "You are not allowed to update the project!")
        );
      }

      const updatedProject = await Projects.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            "members.$[elem].access": req.body.access,
            "members.$[elem].role": req.body.role,
          },
        },
        {
          arrayFilters: [{ "elem.id": req.body.id }],
          new: true,
        }
      );

      res.status(200).json(updatedProject);
      return;
    }

    return next(
      createError(
        403,
        "You can update only if you are a member of this project!"
      )
    );
  } catch (error) {
    next(error);
  }
};

export const getWorks = async (req, res, next) => {
  try {
    const project = await Projects.findById(req.params.id);
    if (!project) {
      return next(createError(404, "Project not found!"));
    }

    const works = await Works.find({ projectId: req.params.id })
      .populate("tasks")
      .populate("creatorId", "name image")
      .populate({
        path: "tasks",
        populate: {
          path: "members",
          select: "name image",
        },
      })
      .sort({ createdAt: -1 });

    res.status(200).json(works);
  } catch (error) {
    next(error);
  }
};
