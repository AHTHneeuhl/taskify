import { Schema, model } from "mongoose";

const workSchema = new Schema(
  {
    projectId: {
      type: Schema.Types.ObjectId,
      ref: "Project",
      required: true,
      unique: false,
    },
    creatorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: false,
    },
    title: {
      type: String,
      required: true,
      unique: false,
    },
    description: {
      type: String,
      required: true,
      unique: false,
    },
    priority: {
      type: String,
      required: true,
      default: "low",
    },
    tags: {
      type: [String],
      default: [],
    },
    status: {
      type: String,
      required: true,
      default: "working",
    },
    tasks: {
      type: [Schema.Types.ObjectId],
      ref: "Task",
      default: [],
    },
  },
  { timestamps: true }
);

export default model("Work", workSchema);
