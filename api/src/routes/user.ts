import { FastifyInstance, FastifyPluginCallback } from "fastify";
import { jwtUserPayload } from "../plugins/jwt-auth";

export const userRoutes: FastifyPluginCallback = (fastify, options, done) => {
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

      let { name, age, height, weight, ph_num, gender } = profile;
      reply.code(200).send({
        succes: true,
        data: {
          name,
          age,
          height,
          weight,
          ph_num,
          gender,
        },
      });
    }
  );

  done();
};
