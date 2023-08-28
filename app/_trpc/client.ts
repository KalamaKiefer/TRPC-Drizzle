import { createTRPCReact } from "@trpc/react-query";

import { type AppRouter } from "@/server";

// Routes types from server to client
export const trpc = createTRPCReact<AppRouter>({});
