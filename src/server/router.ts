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
	.input(z.object({
		productId: z.number(),
	}))

	.query(({ input, ctx }) => {
		const { productId } = input;

		ctx.prisma.review.findMany({
		where: { productId: productId }}).then(console.log);

		return Promise.all([ctx.prisma.review.findMany({
			where: { productId: productId },
		}),
	]);

	}),
		
	insertUser: publicProcedure
		.input(z.object({
			fName: z.string(),
			lName: z.string(),
			username: z.string(),
			password: z.string(),
		}))
		.mutation(({ input, ctx }: {input: {fName: string, lName: string, username: string, password: string}, ctx: Context}) => {
			return ctx.prisma.user.create({
				data: {
					fName: input.fName,
					lName: input.lName,
					username: input.username,
					password: input.password,
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