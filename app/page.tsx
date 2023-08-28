import { serverClient } from "./_trpc/serverClient";
import { Feed } from "@/components/Feed";

export default async function Home() {
    const posts = await serverClient.getPosts();

    return (
        <main className="flex min-h-screen flex-col items-center px-10 py-20 max-w-7xl mx-auto">
            <h1 className="text-4xl text-white leading-snug tracking-wide">
                Messages:
            </h1>

            <Feed initialPosts={posts} />
        </main>
    );
}
