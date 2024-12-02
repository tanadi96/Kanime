import { ServerSession } from "@/app/helpers";
import prisma from "@/prisma";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function PageCollection() {
  const user = await ServerSession();
  const collection = user?.email
    ? await prisma.collection.findMany({
        where: { user_email: user.email },
      })
    : [];
  return (
    <>
      <section className="mt-4 px-4 w-full">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {collection.map((collect, index) => {
            return (
              <Link
          key={index}
          href={`/${collect.mal_id}`}
          className="relative"
              >
          <Image
            src={collect.image_url || '/default-image.png'}
            alt={collect.image_url || 'default alt text'}
            width={250}
            height={250}
            className="w-full"
          />
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent h-16">
            <h5 className="text-xl text-color-dark text-center">{collect.title}</h5>
          </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
