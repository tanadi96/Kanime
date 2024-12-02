"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
type prop = {
    mal_id: string;
    user_email: string;
    username: string;
    title: string;
};

export default function Comment({ mal_id, user_email, username,title }: prop) {
const router = useRouter();

    const [comment, setComments] = useState("");
    const [isPosting, setIsPosting] = useState(false);
    const handleInput = (e: React.FormEvent) => {
        setComments((e.target as HTMLInputElement).value);
    };
    const handlePosting = async (e: React.FormEvent) => {
        e.preventDefault();
        if (comment.trim().split(/\s+/).length < 3) {
            alert("Comment must be at least 3 words.");
            return;
        }
        e.preventDefault();
        setIsPosting(true);
        const data = { mal_id, user_email, comment, username,title };
        const res = await fetch("/api/v1/comment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await res.json();
        setIsPosting(false);
        setComments("");
        router.refresh()
    };

    return (
        <div className="flex flex-col gap-4 p-4 bg-gray-800 rounded-lg shadow-lg">
            <div className="flex gap-4">
                <div className="flex flex-col gap-2 w-full">
                    {/* <h3 className="text-lg font-bold text-color-accent">{username}</h3> */}
                    <textarea
                        onChange={handleInput}
                        value={comment}
                        placeholder="Write your comment..."
                        className="text-sm text-color-primary p-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-color-accent"
                    />
                    <button
                        onClick={handlePosting}
                        disabled={isPosting}
                        className={`text-sm text-color-dark bg-color-accent p-2 rounded-lg transition duration-300 ${
                            isPosting ? "opacity-50 cursor-not-allowed" : "hover:bg-color-accent-dark"
                        }`}
                    >
                        {isPosting ? "Posting..." : "Post"}
                    </button>
                </div>
            </div>
        </div>
    );
}
