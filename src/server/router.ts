// @/src/server/router.ts
import { initTRPC } from '@trpc/server';
//import { z } from "zod"

import { Context } from "./context"

const t = initTRPC.context<Context>().create();

// Base router and procedure helpers
const router = t.router;
const publicProcedure = t.procedure; 

export const serverRouter = router({

   findAllUsers: publicProcedure
    .query(({ ctx  }: {ctx:Context}) => {
      return ctx.prisma.user.findMany();
    }
  ),

  findAllProducts: publicProcedure
    .query(({ ctx  }: {ctx:Context}) => {
      return ctx.prisma.product.findMany();
    }
  ),
//   insertOne: publicProcedure
//     .input(z.object({
//         title: z.string(),
//         description: z.string(),
//         imagePath: z.string(),
//         price: z.number(),

//       })
//     )
//     .mutation(({ input, ctx }: {input: {title: string, description: string, imagePath: string, price: number}, ctx: Context}) => {
//       return ctx.prisma.product.create({
//         data: { title: input.title },
//       });
//     }
//   ),
//   updateOne: publicProcedure
//     .input(z.object({
//         id: z.number(),
//         title: z.string(),
//         checked: z.boolean(),
//     }))
//     .mutation(({ input, ctx }) => {
//       const { id, ...rest } = input;

//       return ctx.prisma.product.update({
//         where: { id },
//         data: { ...rest },
//       });
//     }
//   ),
//   deleteAll: publicProcedure
//     .input(z.object({
//         ids: z.number().array(),
//     }))
//     .mutation(({ input, ctx }) => {
//       const { ids } = input;

//       return ctx.prisma.product.deleteMany({
//         where: { id: { in: ids } },
//       });
//     }
//   ),





});

export type ServerRouter = typeof serverRouter;