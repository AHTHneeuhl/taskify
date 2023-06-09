import { Schema, model } from "express";

const projectSchema = new Schema(
  {
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
    image: {
      type: String,
      default: "",
      unique: false,
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
    works: {
      type: [String],
      default: [],
    },
    tools: {
      type: [
        {
          _id: false,
          name: {
            type: String,
            required: true,
          },
          icon: {
            type: String,
            require: true,
          },
          link: {
            type: String,
            required: true,
          },
        },
      ],
      default: [],
    },
    members: {
      type: [
        {
          _id: false,
          id: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
          },
          role: {
            type: String,
            required: true,
          },
          access: {
            type: String,
            required: true,
            default: "View Only",
            unique: false,
          },
        },
      ],
      required: true,
      default: [],
    },
  },
  { timestamps: true }
);

export default model("Project", projectSchema);
