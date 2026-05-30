const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");
const roleMiddleware = require("../middleware/role.middleware");
console.log(authMiddleware);
console.log(roleMiddleware);
// TEST route
router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "OK profile 🚀",
    user: req.user
  });
});

// PROF only
router.get(
  "/prof-dashboard",
  authMiddleware,
  roleMiddleware("PROF"),
  (req, res) => {
    res.json({
      message: "PROF OK 🔥",
      user: req.user
    });
  }
);

module.exports = router;