"use client";
import { useState } from "react";
export default function CommentForm({title,style}) {
    const [commentValue, setCommentValue] = useState("");
    return (
        <form >
              <label htmlFor="comment" className={`text-gray-500 text-sm ${style}`}>
                    {title}
                </label>
            <textarea
                name=""
                id="comment"
                className="mt-2 focus:ring-primary focus:outline-none focus:ring-2 focus::ring-purple-500 my-4 w-full ring-1 ring-gray-300 shadow-sm text-gray-400 rounded border-none p-4"
                placeholder="نظرت رو بنویس ..."
                onChange={(e) => setCommentValue(e.target.value)}
                value={commentValue}
            />
            <button className=" bg-violet-600  text-white px-3 py-4 rounded-xl w-full sm:w-56 md:text-lg">
                ارسال نظر
            </button>
        </form>
    );
}
