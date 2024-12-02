// Prisma handling for POST request (API route)
import prisma from "@/prisma";

export async function POST(req: Request): Promise<Response> {
  try {
    const { mal_id, user_email,comment,username,title } = await req.json();

   
    if (!mal_id || !user_email) {
      return new Response(JSON.stringify({ message: "Missing required fields" }), {
        status: 400,
      });
    }

    const createComment = await prisma.comment.create({
      data: { mal_id, user_email,comment,username,title },
    });

    return new Response(JSON.stringify({ message: "Success", data: createComment }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error creating collection:", error);
    return new Response(JSON.stringify({ message: "Failed to create collection" }), {
      status: 500,
    });
  }
}
