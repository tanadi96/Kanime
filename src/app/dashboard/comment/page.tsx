import { ServerSession } from "@/app/helpers";
import prisma from "@/prisma";
import Link from "next/link";

export default async function PageComment() {
  const user = await ServerSession();
  const comments = await prisma.comment.findMany({
    where: {
      user_email: user?.email ?? "",
    },
    orderBy: { created_at: "desc" },
  });

  return (
    <>
      {!comments.length ? (
        <p >No comments yet</p>
      ) : (
        <div className=" grid grid-cols-4 gap-4 px-4 py-8">
          {comments.map((comment) => (
            <Link
              href={`/${comment.mal_id}`}
              key={comment.id}
              className="bg-color-primary p-4 rounded-lg shadow-lg"
            >
              <h3 className="text-lg font-bold text-color-accent">
                {comment.title}
              </h3>
              <p className="text-sm text-color-dark">{comment.comment}</p>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
