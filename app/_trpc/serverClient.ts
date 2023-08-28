import { httpBatchLink } from "@trpc/client";

import { appRouter } from "@/server";

// typesafe http requests to our end point
export const serverClient = appRouter.createCaller({
    links: [
        httpBatchLink({
            url: "http://localhost:3000/api/trpc",
        }),
    ],
});
