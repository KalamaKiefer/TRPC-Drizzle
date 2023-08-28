import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
// fetch request handler has exact same signatures we need for app router next js route handler.

import { appRouter } from "@/server";

const handler = (req: Request) =>
    fetchRequestHandler({
        endpoint: "/api/trpc",
        req,
        router: appRouter,
        createContext: () => ({}),
    });

export { handler as GET, handler as POST };
