import { anime } from "@/app/type";
import Image from "next/image";
import Link from "next/link";

interface prop {
  topanime: 
    {
      mal_id: number;
      title: string;
      images: { jpg: { image_url: string } };
      score: number;
      type: string;
      episodes: number;
      duration: string;
      status: string;
      synopsis: string;
      genres: { name: string }[]; // Array of objects for genres
    }[]; // Array of anime objects
}

export function Card({ topanime }: prop) {
  console.log(topanime,"initopanime");
  
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {topanime?.map((anime, i) => {
        return (
          <article key={i} className="relative overflow-hidden rounded-lg shadow transition transform hover:scale-105 hover:shadow-lg">
            <Link href={`/${anime.mal_id}`}>
              
                <Image
                  width={200} 
                  height={250} 
                  alt={anime.title}
                  src={anime.images.jpg.image_url}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-in-out"
                />
                <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-24 sm:pt-32 lg:pt-40">
                  <div className="p-3 sm:p-4 hover:text-color-accent">
                    <h3 className="mt-0.5 text-md sm:text-xl text-white transition-colors duration-300 ease-in-out">
                      {anime.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-xs sm:text-sm text-white/95 transition-colors duration-300 ease-in-out">
                      {anime.synopsis}
                    </p>
                  </div>
                </div>
             
            </Link>
          </article>
        );
      })}
    </div>
  );
}
