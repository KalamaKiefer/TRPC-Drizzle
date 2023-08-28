"use client";

import { serverClient } from "@/app/_trpc/serverClient";
import { Post } from "./Post";
import { trpc } from "@/app/_trpc/client";
import { PostForm } from "./PostForm";

export const Feed = ({
    initialPosts,
}: {
    initialPosts: Awaited<ReturnType<(typeof serverClient)["getPosts"]>>;
}) => {
    const getPosts = trpc.getPosts.useQuery(undefined, {
        initialData: initialPosts,
        refetchOnMount: false,
    });

    const addPost = trpc.addPost.useMutation({
        onSettled: () => {
            getPosts.refetch();
        },
    });

    return (
        <div>
            <PostForm addPost={addPost} />
            <div className="mt-10 h-full w-full overflow-y-scroll flex flex-col gap-10 max-w-3xl mx-auto">
                {getPosts.data.map((post) => (
                    <Post content={post.post} key={post.id} />
                ))}
            </div>
        </div>
    );
};
