const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.school.createMany({
    data: [
      {
        name: "ENSIAS",
        city: "Rabat",
        type: "public",
        domain: "informatique",
        duration: "3 ans",
        minGrade: 14,
        description: "École nationale d'informatique",
        link: "https://ensias.um5.ac.ma"
      },
      {
        name: "EMI",
        city: "Rabat",
        type: "public",
        domain: "ingénierie",
        duration: "3 ans",
        minGrade: 15,
        description: "École Mohammadia d'ingénieurs",
        link: "https://emi.ac.ma"
      },
      {
        name: "ENSA Casa",
        city: "Casablanca",
        type: "public",
        domain: "ingénierie",
        duration: "5 ans",
        minGrade: 13,
        description: "École nationale des sciences appliquées",
        link: "https://ensa.ac.ma"
      }
    ]
  });

  console.log("🌱 Schools seeded!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());