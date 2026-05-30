const express = require("express");
const router = express.Router();

const {
  addSchool,
  getAllSchools,
  getSchoolById,
  searchSchools,
} = require("./school.controller");

router.post("/", addSchool);
router.get("/", getAllSchools);
router.get("/search", searchSchools);
router.get("/:id", getSchoolById);

module.exports = router;