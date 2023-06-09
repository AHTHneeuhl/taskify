import { Schema, model } from "mongoose";

const notificationSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
    type: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model("Notification", notificationSchema);
