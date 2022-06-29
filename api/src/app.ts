import "dotenv/config";
import fastifyCors from "@fastify/cors";
import fastify, { FastifyServerOptions } from "fastify";
import jwtPlugin from "./plugins/jwt-auth";

import prismaPlugin from "./plugins/prisma";
import { authRoutes } from "./routes/auth";
import { queryRoutes } from "./routes/query";
import { userRoutes } from "./routes/user";
import { trainerRoutes } from "./routes/trainer";

export function buildFastifyServer(opts: FastifyServerOptions = {}) {
  const app = fastify(opts);

  app.register(jwtPlugin);
  app.register(prismaPlugin);
  app.register(fastifyCors, {
    methods: ["GET", "POST", "PUT", "DELETE"],
    origin: "*",
  });

  app.register(authRoutes, { prefix: "/auth" });
  app.register(userRoutes, { prefix: "/api/user" });
  app.register(queryRoutes, { prefix: "/api/query" });
  app.register(trainerRoutes, { prefix: "/api/trainer" });

  return app;
}

let serverOpts: FastifyServerOptions = {
  logger: {
    transport: {
      target: "pino-pretty",
      options: {
        ignore: "pid, hostname",
        translateTime: "HH:MM:ss",
      },
    },
  },
};

// server
buildFastifyServer(serverOpts).listen({ port: parseInt(process.env.PORT || "3100") }, (err, address) => {
  if (err) {
    console.log(err);
  }
});
