import { anime, DataEntry, detailAnime } from "./type";

interface prop {
  resource: string;
  query: string;
}

export async function getAnime({ resource, query }: prop): Promise<anime[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}${resource}?${query}`,
    {
      cache: "no-store",
      next: {
        tags: ["anime"],
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fecth data product");
  }
  const data = await response.json();

  return data.data;
}

export async function search({
  params,
}: {
  params: { keyword: string };
}): Promise<anime[]> {
  const { keyword } = params;
  const decodedKeyword = decodeURIComponent(keyword);
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/anime?q=" + keyword,
    {
      cache: "no-store",
      next: {
        tags: ["anime"],
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fecth data product");
  }
  const products = await response.json();

  return products.data;
}

export async function getAllAnime({ query }: prop): Promise<anime[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/top/anime?${query}`,
    {
      cache: "no-store",
      next: {
        tags: ["anime"],
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fecth data product");
  }
  const data = await response.json();

  return data;
}

export async function getDetail({
  resource,
}: {
  resource: string;
}): Promise<detailAnime> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}${resource}`,
      {
        cache: "no-store",
        next: {
          tags: ["anime"],
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
  
    return data.data;
  } catch (error) {
    throw new Error("Failed to fetch  data");
  }
}

export async function getRecommendation({
  resource,
}: {
  resource: string;
}): Promise<anime[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}${resource}`,
    {
      cache: "no-store",
      next: {
        tags: ["anime"],
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fecth data");
  }
  const data = await response.json();
  return data.data.flatMap((item: DataEntry) => item.entry);
}
