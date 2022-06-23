import { FastifyInstance } from "fastify";

export function userRoutes(fastify: FastifyInstance) {
  let { prisma } = fastify;

  fastify.get("/", async (request, reply) => {
    const profiles = await prisma.user.findMany();
    return profiles;
  });

  fastify.post("/", async (request, reply) => {
    const { body } = request as any;

    const profile = await prisma.user.create({
      data: {
        fname: body.name,
        lname: body.lname,
        ph_num: body.ph_num,
        password: body.password,
      },
    });

    return profile;
  });
}
