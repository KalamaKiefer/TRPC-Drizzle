import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const posts = sqliteTable("posts", {
    id: integer("id").primaryKey(),
    post: text("post"),
});
