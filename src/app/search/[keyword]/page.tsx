import { getAnime, search } from "@/app/action";
import { anime } from "@/app/type";
import { Card } from "@/components/card";
import HeaderNew from "@/components/header";

export default async function Home({ params }: { params: { keyword: string } }) {
  try {
    const data: anime[] = await search({ params });
    const keyword = params.keyword;
    const decodedKeyword = decodeURIComponent(keyword)
    
    return (
      <>
        <section>
          <HeaderNew title={`${decodedKeyword}`} link="/" linktitle="Home" />
          <Card topanime={data} />
        </section>
      </>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return <div>Error loading anime data.</div>;
  }
}
