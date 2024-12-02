"use client";

import { useState } from "react";

interface ButtonCollectionProps {
  mal_id: string;
  user_email: string;
  image_url: string;
  title : string;
}

export default function ButtonCollection({ mal_id, user_email,image_url,title }: ButtonCollectionProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handle = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const data = { mal_id, user_email,image_url,title };

    const res = await fetch("/api/v1/collection", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    if (result.message === "Success") {
      alert("Added to collection");
      setIsAdded(true);
    }
    setIsLoading(false);
  };

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const data = { mal_id, user_email, };

    const res = await fetch("/api/v1/collection", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    if (result.message === "Success") {
      alert("Deleted from collection");
      setIsAdded(false);
    }
    setIsLoading(false);
  };
  return (
    <>
    {
      isAdded ? (
        <button
          className="text-white bg-red-500 px-4 py-2 rounded-md"
          onClick={handleDelete}
          disabled={isLoading}
        >
          {isLoading ? "Deleting..." : "Delete from Collection"}
        </button>
      ) : (
        <button
          className="text-white bg-color-accent px-4 py-2 rounded-md"
          onClick={handle}
          disabled={isLoading}
        >
          {isLoading ? "Adding..." : "Add to Collection"}
        </button>
      )
    }
     
    </>
  );
}
