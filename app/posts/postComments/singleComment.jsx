"use client";
import { toLocalDate } from "@/app/utils/toLocalDate";
import { UserCircleIcon } from "@heroicons/react/24/outline";

import { useState } from "react";
import CommentForm from "./commentform";
export default function SingleComment({ comment,style }) {
    const [onReply, setOnReply] = useState(false);
    return (
        <div className={`mb-4  `}>
            <div className={`${style} border border-gray-300 rounded-xl p-2 md:p-4 flex flex-col gap-y-4 items-start`}>
                <div className="flex  flex-col gap-y-4">
                    <div className=" flex gap-x-4">
                        <UserCircleIcon className=" stroke-gray-400  w-12 h-12" />
                        <div className="flex flex-col items-center justify-between text-gray-500 text-sm">
                            <span>{comment.writer.name}</span>
                            <span className="text-xs">{toLocalDate(comment.createdAt)}</span>
                        </div>
                    </div>
                    <p className="leading-10">{comment.content}</p>
                </div>
                <button className="text-blue-600  p-4 text-sm" onClick={() => setOnReply(!onReply)}>
                    {!onReply ? " پاسخ به" : "بیخیال"}
                </button>
            {onReply && <CommentForm title={` در حال پاسخ به ${comment.writer?.name}`} />}
            </div>
        </div>
    );
}
