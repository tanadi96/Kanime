import prisma from "@/prisma";

type prop = {
  mal_id: string;
};

export default async function CommentBox({ mal_id }: prop) {
  const comments = await prisma.comment.findMany({
    where: { mal_id },
    orderBy: { created_at: "desc" },
  });

  return (
    <>
      <h3>COMMENT</h3>
      {comments.length === 0 ? <p>No comments yet</p> :(
        <div
        className="grid grid-rows"
        style={{
          gridTemplateColumns: "1fr",
          gap: "15px",
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
          maxWidth: "100%",
          boxSizing: "border-box",
        }}
      >
        {comments.map((comment) => (
          <div
            key={comment.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "5px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              maxWidth: "100%",
              boxSizing: "border-box",
            }}
          >
            <p
              className="text-color-dark"
              style={{ fontWeight: "bold", marginBottom: "5px" }}
            >
              {comment.username}
            </p>
            <p className="text-color-dark" style={{ margin: "0" }}>
              {comment.comment}
            </p>
          </div>
        ))}
      </div>
      ) }
      
    </>
  );
}
