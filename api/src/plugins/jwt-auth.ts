import "@fastify/jwt";
import fastifyJwt from "@fastify/jwt";
import { FastifyPluginAsync, FastifyReply, FastifyRequest, onRequestAsyncHookHandler } from "fastify";
import fp from "fastify-plugin";

export type jwtUserPayload = {
  id: number;
  ph_num: string;
};

declare module "@fastify/jwt" {
  interface FastifyJWT {
    payload: jwtUserPayload;
    user: jwtUserPayload;
  }
}

declare module "fastify" {
  interface FastifyInstance {
    authenticate: onRequestAsyncHookHandler;
    adminAuth: onRequestAsyncHookHandler;
  }
}

const jwtPlugin: FastifyPluginAsync = fp(async fastify => {
  fastify.register(fastifyJwt, {
    secret: process.env.JWT_SECRET || "supersecret",
    sign: {
      expiresIn: "1d",
    },
  });

  fastify.decorate("authenticate", async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.send(err);
    }
  });

  fastify.decorate("adminAuth", async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      await request.jwtVerify();
      if (request.user.ph_num !== process.env.ADMIN_NUM) {
        throw new Error("Unauthorized");
      }
    } catch (err) {
      reply.send(err);
    }
  });
});

export default jwtPlugin;
