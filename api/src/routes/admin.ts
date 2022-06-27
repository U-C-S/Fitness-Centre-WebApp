import { FastifyPluginCallback } from "fastify";

export const adminRoutes: FastifyPluginCallback = (fastify, options, done) => {
  let { prisma } = fastify;

  fastify.post("/", async (request, reply) => {
    const { name, email, query } = request.body as any;
    const newQuery = await prisma.queries.create({
      data: {
        name,
        email,
        query,
      },
    });

    reply.code(201).send({
      message: "Query created with id: " + newQuery.id,
    });
  });

  fastify.get("/getall", async (request, reply) => {
    const queries = await prisma.queries.findMany();
    reply.code(200).send(queries);
  });

  done();
};
