// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import userRouter from "./routes/user.route.js";
// import monastryRouter from "./routes/monastry.route.js";
// import archivesRouter from "./routes/archives.route.js";

// const app = express();

// app.use(cors({
//   origin: ["http://localhost:5173" , "https://monastery360-70f5.onrender.com"], 
//   credentials: true
// }));
// app.use(express.json({ limit: "16kb" }));
// app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// app.use(express.static("public"));
// app.use(cookieParser());

// app.use("/api/v1/users", userRouter);
// app.use("/api/v1/monasteries", monastryRouter);
// app.use("/api/v1/archives" , archivesRouter);

// app.get("/" , (req , res) => {
//   res.send("Backend is running");
// })
// export { app };

import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.route.js";
import monastryRouter from "./routes/monastry.route.js";
import archivesRouter from "./routes/archives.route.js";
import tripRoutes from "./routes/trip.route.js";
import chatRouter from "./routes/chat.route.js";

const app = express();

// Middleware
app.use(cors({
  origin: ["http://localhost:5173" , "https://monastery360-70f5.onrender.com"],
   methods: ["GET", "POST"],
  credentials: true,
}));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/monasteries", monastryRouter);
app.use("/api/v1/archives", archivesRouter);
app.use("/api/booking", tripRoutes);
app.use("/api/chatbot", chatRouter);

// Root
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

export { app };