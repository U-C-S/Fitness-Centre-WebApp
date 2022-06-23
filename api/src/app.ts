import fastifyCors from "@fastify/cors";
import fastify, { FastifyServerOptions } from "fastify";

import prismaPlugin from "./plugins/prisma";
import { userRoutes } from "./routes/user";

export function buildFastifyServer(opts: FastifyServerOptions = {}) {
  const app = fastify(opts);

  app.register(prismaPlugin);
  app.register(fastifyCors, {
    methods: ["GET", "POST", "PUT", "DELETE"],
    origin: "*",
  });

  app.register(userRoutes, { prefix: "/api/user" });

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
buildFastifyServer(serverOpts).listen(
  { port: parseInt(process.env.PORT || "3100") },
  (err, address) => {
    if (err) {
      console.log(err);
    }
  }
);
