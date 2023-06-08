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
    img: {
      type: String,
      default: "",
    },
    googleSignIn: {
      type: Boolean,
      required: true,
      default: false,
    },
    projects: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Project",
      default: [],
    },
    teams: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Teams",
      default: [],
    },
    notifications: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Notifications",
      default: [],
    },
    works: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Works",
      default: [],
    },
    tasks: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Tasks",
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
