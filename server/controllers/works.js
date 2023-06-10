import Works from "../models/Work.js";
import Users from "../models/User.js";

export const addWork = async (req, res, next) => {
  const currentUser = await Users.findById(req.user.id);
  if (!currentUser) return next(createError(404, "User not found"));

  const newProject = new Project({
    members: [{ id: currentUser.id, role: "d", access: "Owner" }],
    ...req.body,
  });

  try {
    const savedProject = await newProject.save();

    await Users.findByIdAndUpdate(
      currentUser.id,
      { $push: { projects: savedProject._id } },
      { new: true }
    );

    res.status(200).json(savedProject);
  } catch (error) {
    next(error);
  }
};
