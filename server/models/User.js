import { Schema, model } from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    googleSignedIn: {
      type: Boolean,
      required: true,
      default: false,
    },
    projects: {
      type: [Schema.Types.ObjectId],
      ref: "Project",
      default: [],
    },
    teams: {
      type: [Schema.Types.ObjectId],
      ref: "Team",
      default: [],
    },
    notifications: {
      type: [Schema.Types.ObjectId],
      ref: "Notification",
      default: [],
    },
    works: {
      type: [Schema.Types.ObjectId],
      ref: "Work",
      default: [],
    },
    tasks: {
      type: [Schema.Types.ObjectId],
      ref: "Task",
      default: [],
    },
  },
  { timestamps: true }
);

userSchema.methods.generateVerificationToken = () => {
  const user = this;
  const verificationToken = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET_TOKEN,
    {
      expiresIn: "7d",
    }
  );

  return verificationToken;
};

export default model("User", userSchema);
