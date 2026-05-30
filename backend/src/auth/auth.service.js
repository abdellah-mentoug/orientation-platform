const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

// ---------------- REGISTER ----------------
const registerUser = async (data) => {
  const { name, email, password, role } = data;

  const exists = await prisma.user.findUnique({
    where: { email }
  });

  if (exists) {
    throw new Error("User already exists");
  }

  const hashed = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashed,
      role: role || "STUDENT"
    }
  });

  return user;
};

// ---------------- LOGIN ----------------
const loginUser = async (data) => {
  const { email, password } = data;

  const user = await prisma.user.findUnique({
    where: { email }
  });

  if (!user) {
    throw new Error("User not found");
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign(
    { userId: user.id, role: user.role },
    "SECRET_KEY_123",
    { expiresIn: "7d" }
  );

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    }
  };
};

// IMPORTANT EXPORT
module.exports = {
  registerUser,
  loginUser
};