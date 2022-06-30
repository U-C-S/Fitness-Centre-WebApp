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
      const profile = await prisma.user.findUnique({
        where: { id },
        select: {
          id: true,
          name: true,
          age: true,
          gender: true,
          height: true,
          weight: true,
          ph_num: true,
          created_at: true,
          training_info: {
            select: {
              plan: true,
              trainer: {
                select: {
                  name: true,
                  explevel: true,
                  ph_num: true,
                },
              },
            },
          },
        },
      });

      if (!profile) {
        return reply.code(404).send({ message: "Profile not found" });
      }

      reply.code(200).send({
        succes: true,
        data: profile,
      });
    }
  );

  fastify.post(
    "/buyplan",
    {
      onRequest: [fastify.authenticate],
    },
    async (request, reply) => {
      const { plan } = request.body as { plan: number };
      const id = (request.user as jwtUserPayload).id;
      const profile = await prisma.user.findUnique({ where: { id } });
      // fastify.log.info(`User ${profile?.name} is buying plan ${plan}`);

      if (!profile) {
        return reply.code(404).send({ message: "Profile not found" });
      } else {
        const trainersList = await prisma.trainer.findMany();
        const randomTrainer = trainersList[Math.floor(Math.random() * trainersList.length)]; // randomize the trainer

        const trainInfo = await prisma.training_info.create({
          data: {
            plan: plan,
            user: {
              connect: {
                id,
              },
            },
            trainer: {
              connect: {
                id: randomTrainer.id,
              },
            },
          },
          select: {
            created_at: true,
            trainer: {
              select: {
                name: true,
                gender: true,
                explevel: true,
              },
            },
          },
        });

        reply.code(200).send({
          succes: true,
          data: trainInfo,
        });
      }
    }
  );

  fastify.get("/all", { onRequest: fastify.adminAuth }, async (request, reply) => {
    const profiles = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        age: true,
        gender: true,
        ph_num: true,
        training_info: {
          select: {
            plan: true,
            trainer: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    reply.code(200).send({
      success: true,
      data: profiles,
    });
  });

  done();
};
