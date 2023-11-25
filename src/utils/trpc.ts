import { createReactQueryHooks, createTRPCReact } from "@trpc/react-query";
import type { ServerRouter } from "@/server/prodcuctRouter";

export const trpc = createTRPCReact<ServerRouter>(); 