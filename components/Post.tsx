import React from "react";

export const Post = ({ content }: { content: string | null }) => {
    return (
        <div className="flex flex-col gap-3 py-4 px-2 border-t-2 border-gray-400 border-b-2 ">
            <p className="text-sm text-white brightness-75">User:</p>
            <p className="text-white brightness-75 text-lg">{content}</p>
        </div>
    );
};
