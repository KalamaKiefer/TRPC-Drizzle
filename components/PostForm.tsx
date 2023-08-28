"use client";

import React from "react";

export const PostForm = ({ addPost }: any) => {
    const [post, setPost] = React.useState("");

    return (
        <div className="border-white brightness-75 p-10 flex flex-col gap-4">
            <h4>Create A Post</h4>

            <textarea
                className="h-[150px] lg:w-[400px] rounded-lg text-black pl-2 text-lg"
                value={post}
                onChange={(e) => setPost(e.target.value)}
            />
            <button
                className="border-white brightness-75 border py-1.5 px-6 rounded-lg"
                onClick={async () => {
                    if (post.length) {
                        addPost.mutate(post);
                        setPost("");
                    }
                }}
            >
                Submit
            </button>
        </div>
    );
};
