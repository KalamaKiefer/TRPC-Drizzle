import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import Database from "better-sqlite3";
import { z } from "zod";

import { publicProcedure, router } from "./trpc";

import { posts } from "@/db/schema";

const sqlite = new Database("sqlite.db");
const db = drizzle(sqlite);

migrate(db, { migrationsFolder: "drizzle" });

export const appRouter = router({
    getPosts: publicProcedure.query(async () => {
        return await db.select().from(posts).all();
    }),

    addPost: publicProcedure.input(z.string()).mutation(async (options) => {
        await db.insert(posts).values({ post: options.input }).run();
        return true;
    }),
});

export type AppRouter = typeof appRouter;
