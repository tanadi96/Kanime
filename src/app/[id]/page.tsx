import { getDetail } from "../action";
import { detailAnime } from "../type";
import Youtube from "@/components/utilities/youtube";
import ButtonCollection from "@/components/butttonCollection";
import { ServerSession } from "../helpers";
import prisma from "@/prisma";
import Comment from "@/components/comment";
import CommentBox from "@/components/commentbox";

interface Prop {
  params: { id: string };
}

export default async function Home({ params }: Prop) {
  const user = await ServerSession();
  const { id } = params;
  const detail: detailAnime = await getDetail({
    resource: `/anime/${id}`,
  });

  const collection = await prisma.collection.findFirst({
    where: {
      mal_id: id,
      user_email: user?.email ?? "",
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-200 to-base-300">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8">
          <h1 className="flex justify-center text-3xl md:text-4xl lg:text-5xl font-bold text-color-accent">
            {detail.title}
            <span className="text-xl md:text-2xl text-color-accent ml-2">
              {detail.year}
            </span>
          </h1>
          {!collection && user && (
            <ButtonCollection
              mal_id={id}
              user_email={user?.email ?? ""}
              image_url={detail.images.jpg.image_url}
              title={detail.title}
            />
          )}

          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 lg:p-8 shadow-xl">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex flex-col justify-center items-center lg:flex-col gap-4 lg:w-1/2">
                <div className="flex justify-center w-full lg:w-3/4">
                  <img
                    src={detail.images.jpg.image_url}
                    className="rounded-lg shadow-2xl w-full object-cover hover:scale-105 transition-transform duration-300"
                    alt={detail.title}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                  {[
                    { title: "Rating", value: detail.rating },
                    { title: "Episode", value: detail.episodes },
                    { title: "Rank", value: detail.rank },
                    { title: "Score", value: detail.score },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-md rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 shadow-lg"
                    >
                      <h2 className="flex justify-center text-2xl md:text-3xl font-bold text-color-accent mb-2">
                        {stat.title}
                      </h2>
                      <p className="flex justify-center text-lg md:text-xl text-color-primary">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-2/3 flex lg:items-start">
                <p className="w-full text-color-primary text-justify text-base md:text-lg leading-relaxed">
                  {detail.synopsis}
                </p>
              </div>
              <Youtube youtube_id={detail.trailer.youtube_id} />
            </div>
          </div>

          <CommentBox mal_id={id} />
          <div className="flex flex-col gap-4">
            <Comment mal_id={id}
              user_email={user?.email ?? ""} username={user?.name ?? ""} title={detail.title} />
          </div>
        </div>
      </div>
    </div>
  );
}
