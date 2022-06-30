import { FastifyInstance, FastifyPluginCallback } from "fastify";

export const trainerRoutes: FastifyPluginCallback = (fastify, options, done) => {
  let { prisma } = fastify;

  fastify.post("/", { onRequest: fastify.adminAuth }, async (request, reply) => {
    const { name, ph_num, gender, explevel } = request.body as any;

    let trainer = await prisma.trainer.create({
      data: {
        name,
        gender,
        ph_num,
        explevel,
      },
    });

    return reply.send({
      success: true,
      message: "Added Trainer Successfully",
      data: trainer,
    });
  });

  fastify.get("/", { onRequest: fastify.adminAuth }, async (request, reply) => {
    const { explevel, id } = request.query as { explevel?: number; id?: number };

    let trainers;

    if (id) {
      trainers = await prisma.trainer.findUnique({
        where: {
          id,
        },
      });
    } else if (explevel) {
      trainers = await prisma.trainer.findMany({
        where: {
          explevel,
        },
      });
    } else {
      trainers = await prisma.trainer.findMany();
    }

    return reply.send({
      success: true,
      data: trainers,
    });
  });

  done();
};
