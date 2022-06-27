import { FastifyInstance } from "fastify";
import bcrypt from "@node-rs/bcrypt";

export async function authRoutes(fastify: FastifyInstance) {
  let { prisma } = fastify;

  fastify.post("/login", async (request, reply) => {
    const { ph_num, password } = request.body as any;
    const { t } = request.query as { t: string };

    // ------------ admin login
    if (t === "admin") {
      if (ph_num === "admin" && password === process.env.ADMIN_PASSWORD) {
      } else {
        reply.code(401).send({
          message: "Invalid admin credentials",
        });
      }
    } // ------------ trainer login
    else if (t === "trainer") {
      const trainer = await prisma.trainer.findUnique({
        where: { ph_num },
      });

      const isValid = await bcrypt.compare(password, trainer?.password as string);

      if (!isValid) {
        return reply.code(401).send({
          message: "Invalid trainer credentials",
        });
      } else {
        return reply.send({
          message: "Login successful",
          data: {
            token: await reply.jwtSign({
              id: trainer?.id as number,
              ph_num: ph_num,
            }),
            ph_num: ph_num,
          },
        });
      }
    } // ------------ user login
    else if (t == null || t === "" || t === "user" || t == undefined) {
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
    }
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
}
