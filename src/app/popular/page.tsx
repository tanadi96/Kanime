"use client";
import { Card } from "@/components/card";
import HeaderMenu from "@/components/utilities/Header";
import Pagination from "@/components/utilities/Pagination";
import { useEffect, useState } from "react";
import { getAllAnime, getAnime } from "../action";

export default function Home() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [perpage, setPerpage] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    setLoading(true);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/top/anime?page=${page}`
    );
    const top = await res.json();    
    setPerpage(top.pagination.last_visible_page);
    setData(top.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <HeaderMenu title={`Most Top Anime #${page}`} />
          <Card topanime={data} />
          <Pagination page={page} setPage={setPage} lastPage={perpage} />
        </>
      )}
    </>
  );
}
