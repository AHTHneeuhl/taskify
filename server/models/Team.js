import { Schema, model } from "mongoose";

const teamSchema = new Schema(
  {
    name: {
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
    tools: {
      type: [
        {
          _id: false,
          link: {
            type: String,
            required: true,
          },
          name: {
            type: String,
            required: true,
          },
          icon: {
            type: String,
            require: true,
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
            require: true,
            default: "View Only",
            unique: false,
          },
        },
      ],
      required: true,
      default: [],
    },
    projects: {
      type: [Schema.Types.ObjectId],
      default: [],
      ref: "Project",
      unique: true,
    },
  },
  { timestamps: true }
);

export default model("Team", teamSchema);
