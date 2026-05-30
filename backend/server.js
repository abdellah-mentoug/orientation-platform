const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// AUTH ROUTES
const authRoutes = require("./src/auth/auth.routes");
app.use("/api/auth", authRoutes);

const schoolRoutes = require("./src/schools/school.routes");
app.use("/api/schools", schoolRoutes);

// PROTECTED ROUTES
const protectedRoutes = require("./src/routes/protected.routes");
app.use("/api", protectedRoutes);

app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});