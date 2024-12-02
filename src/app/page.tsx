import { Card } from "@/components/card";
import { getAnime, getRecommendation } from "./action";
import { anime, DataEntry } from "./type";

import HeaderNew from "@/components/header";
interface prop{
  resource : string;
  query : string
}
export default async function Home() {
  
  const data: anime[] = await getAnime({ resource: '/top/anime', query: 'limit=8' });
  let recData = await getRecommendation({resource:'/recommendations/anime'});
  recData = recData.sort(() => Math.random() - 0.5).slice(0, recData.length > 8 ? 8 : recData.length)
  
  

  return (
    <>
      <section>
        <HeaderNew title="Top Anime" link="/popular" linktitle="View All" />
        <Card topanime={data} />
      </section>
      <section>
        <HeaderNew title="Recommended Anime" link="" linktitle="" />
        <Card topanime={recData} />
      </section>
      
    </>
  );
}
