import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";

import authRoutes from "./routes/authRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";
import connectDB from "./config/db.js";
import adminRoutes from "./routes/adminRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";

dotenv.config();
connectDB();

const app = express();
const allowedOrigins = [
  "http://localhost:5173",
  "https://food-waste-management-system-uup5.vercel.app",
  "https://food-waste-management-syst-git-5e19cf-shahids-projects-00572e71.vercel.app",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/notifications", notificationRoutes);

app.get("/", (req, res) => {
  res.json({ message: "FoodWise API Running" });
});

const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);

  socket.on("join", (userId) => {
    socket.join(userId);
    console.log(`User joined room: ${userId}`);
  });

  socket.on("disconnect", () => {
    console.log("Socket disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});