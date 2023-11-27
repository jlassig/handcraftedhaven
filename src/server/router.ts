// @/src/server/router.ts
import { initTRPC } from '@trpc/server';
import { z } from "zod"

import { Context } from "./context"

const t = initTRPC.context<Context>().create();

// Base router and procedure helpers
const router = t.router;
const publicProcedure = t.procedure; 

export const serverRouter = router({

  /////all the users:
   findAllUsers: publicProcedure
    .query(({ ctx  }: {ctx:Context}) => {
      return ctx.prisma.user.findMany();
    }
  ),

  /////all the products:
  findAllProducts: publicProcedure
    .query(({ ctx  }: {ctx:Context}) => {
      return ctx.prisma.product.findMany();
    }
  ),
  ///// find product by ID
  findProductById: publicProcedure
    .query(
      (input: { productId: number }, { ctx }: { ctx: Context }) => {
        const { productId } = input;

        return ctx.prisma.product.findUnique({
          where: {
            id: productId,
          },
        });
      }
    ),

  ////find product reviews by product ID
 findProductReviews: publicProcedure
  .query(
    (input: { productId: number }, { ctx }: { ctx: Context }) => {
      console.log('Query function input:', input);

      if (!ctx) {
        console.error('Context is undefined');
        throw new Error('Context is undefined');
      }

      const { productId } = input;
       console.log('Query function productId:', productId);

      return ctx.prisma.productReview.findMany({
        where: {
          productId: productId,
        },
      });
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