import { FastifyInstance } from "fastify";
import bcrypt from "@node-rs/bcrypt";

export async function authRoutes(fastify: FastifyInstance) {
  let { prisma } = fastify;

  fastify.post("/login", async (request, reply) => {
    const { ph_num, password } = request.body as any;

    const profile = await prisma.user.findFirst({
      where: { ph_num, password },
    });

    let code: number;
    if (!profile) code = 404;
    else if (!(await bcrypt.compare(password, profile.password as string))) code = 403;
    else code = 200;

    if (code != 200) {
      return reply.code(code).send({
        success: false,
        message: "Invalid credentials",
      });
    }

    return reply.send({
      success: true,
      message: "Success",
      data: {
        token: await reply.jwtSign({
          id: profile?.id as number,
          ph_num: ph_num,
        }),
        ph_num: ph_num,
      },
    });
  });

  fastify.post("/register", async (request, reply) => {
    const { name, password, email } = request.body as any;

    await prisma.user.create({
      data: {
        fname: name,
        lname: name,
        height: 0,
        weight: 0,
        age: 0,
        address: "",
        ph_num: 0,
        password: await bcrypt.hash(password, 10),
      },
    });

    return reply.send({
      success: true,
      message: "Success",
    });
  });
}
