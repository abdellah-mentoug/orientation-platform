const service = require("./school.service");

// CREATE
const addSchool = async (req, res) => {
  const school = await service.createSchool(req.body);
  res.json(school);
};

// GET ALL
const getAllSchools = async (req, res) => {
  const schools = await service.getSchools();
  res.json(schools);
};

// GET ONE
const getSchoolById = async (req, res) => {
  const school = await service.getSchoolById(req.params.id);
  res.json(school);
};

// FILTER
const searchSchools = async (req, res) => {
  const result = await service.filterSchools(req.query);
  res.json(result);
};

module.exports = {
  addSchool,
  getAllSchools,
  getSchoolById,
  searchSchools,
};