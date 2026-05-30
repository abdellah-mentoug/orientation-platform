const prisma = require("../prismaClient");

// CREATE
const createSchool = (data) => {
  return prisma.school.create({ data });
};

// GET ALL
const getSchools = () => {
  return prisma.school.findMany();
};

// GET ONE
const getSchoolById = (id) => {
  return prisma.school.findUnique({ where: { id } });
};

// FILTER
const filterSchools = ({ city, domain, maxGrade }) => {
  return prisma.school.findMany({
    where: {
      city: city || undefined,
      domain: domain || undefined,
      minGrade: maxGrade ? { lte: parseFloat(maxGrade) } : undefined,
    },
  });
};

module.exports = {
  createSchool,
  getSchools,
  getSchoolById,
  filterSchools,
};