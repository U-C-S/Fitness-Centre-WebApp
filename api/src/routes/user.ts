import { FastifyInstance } from "fastify";
import { jwtUserPayload } from "../plugins/jwt-auth";

export function userRoutes(fastify: FastifyInstance) {
  let { prisma } = fastify;

  fastify.get(
    "/",
    {
      onRequest: [fastify.authenticate],
    },
    async (request, reply) => {
      let id = (request.user as jwtUserPayload).id;
      const profile = await prisma.user.findUnique({ where: { id } });

      if (!profile) {
        return reply.code(404).send({ message: "Profile not found" });
      }

      let { fname, age, height, lname, weight, ph_num, address } = profile;
      reply.code(200).send({
        succes: true,
        data: {
          fname,
          age,
          height,
          lname,
          weight,
          ph_num,
          address,
        },
      });
    }
  );

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
