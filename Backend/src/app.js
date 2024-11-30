import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

// Import Routes
import userRouter from "./routes/user.routes.js";

// Routes declaration
app.use("/api/v1/users", userRouter);

export { app };
