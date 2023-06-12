import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import helmet from "helmet";

import authRoutes from "./routes/auth.js";
import teamRoutes from "./routes/teams.js";
import userRoutes from "./routes/users.js";
import projectRoutes from "./routes/projects.js";

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

// Get test route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);

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
