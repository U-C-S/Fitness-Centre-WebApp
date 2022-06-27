import "dotenv/config";
import { FastifyInstance } from "fastify";
import bcrypt from "@node-rs/bcrypt";

export async function authRoutes(fastify: FastifyInstance) {
  let { prisma } = fastify;

  fastify.post("/login", async (request, reply) => {
    const { ph_num, password } = request.body as any;

    const profile = await prisma.user.findUnique({
      where: { ph_num },
    });
    console.warn(profile?.age == 24, "dadakmdakmd");

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

    return reply.code(200).send({
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

  fastify.post("/stafflogin", async (request, reply) => {
    const { ph_num, password } = request.body as any;

    let trainer;
    let type = "";

    if (ph_num === parseInt(process.env.ADMIN_NUM as string) && password === process.env.ADMIN_PASSWORD) {
      //TODO: THIS IS HACKY. Maybe use a database
      trainer = {
        id: ph_num,
        ph_num: ph_num,
      };
      type = "admin";
    } // -------------------- trainer login --------------------
    else {
      trainer = await prisma.trainer.findUnique({
        where: { ph_num },
      });
      const isValid = await bcrypt.compare(password, trainer?.password as string);
      if (!isValid) {
        return reply.code(401).send({
          message: "Invalid trainer credentials",
        });
      }
      type = "trainer";
    }

    return reply.code(200).send({
      message: "Staff Login successful",
      data: {
        token: await reply.jwtSign({
          id: trainer?.id as number,
          ph_num,
        }),
        ph_num,
        type,
      },
    });
  });

  fastify.post("/register", async (request, reply) => {
    const { name, password, ph_num, gender, age, height, weight } = request.body as any;

    let profile = await prisma.user.create({
      data: {
        name,
        height,
        weight,
        age,
        gender,
        ph_num,
        password: await bcrypt.hash(password, 10),
      },
    });

    return reply.send({
      success: true,
      message: "Registration Success",
      data: {
        token: await reply.jwtSign({
          id: profile?.id as number,
          ph_num: ph_num,
        }),
        ph_num: ph_num,
      },
    });
  });
}
