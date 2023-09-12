import { PrismaClient } from "@prisma/client";
import app from "./app";
import config from "./config";

const prisma = new PrismaClient();

async function main() {
  
  app.get("/", (_req, res) => {
    res.send("Hello Prisma World!");
  });
  
  const port = config.port || 5000;
  app.listen(port, () => console.log(`🚀 Server ready at Port: ${port} ⭐️`));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
