import { Schema, model } from "express";

const taskSchema = new Schema(
  {
    projectId: {
      type: Schema.Types.ObjectId,
      ref: "Project",
      required: true,
      unique: false,
    },
    workId: {
      type: String,
      unique: false,
    },
    task: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
      default: "",
    },
    endDate: {
      type: String,
      required: true,
      default: "",
    },
    members: {
      type: [Schema.Types.ObjectId],
      ref: "User",
      default: [],
    },
    status: {
      type: String,
      default: "working",
    },
  },
  { timestamp: true }
);

export default model("Task", taskSchema);
