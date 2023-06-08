import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import helmet from "helmet";

import authRoutes from "./routes/auth.js";

dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log(`Server is ready at http://localhost:${PORT}`);
    })
    .catch((err) => {
      console.log(err);
    });
});
