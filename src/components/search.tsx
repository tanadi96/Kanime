"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Search() {
  const searchref = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const keyword = searchref.current?.value;
    if (!keyword || keyword.trim() == "") return;

    router.push(`/search/${keyword}`);
  };

  return (
    <div className="flex items-center px-4 w-full md:w-auto">
      <fieldset className="max-w-md w-full space-y-1 dark:text-gray-800">
        <label htmlFor="Search" className="hidden">
          Search
        </label>
        <div className="relative flex flex-row-reverse w-full md:w-auto">
          <span className="absolute inset-y-0 right-0 flex items-center pr-2">
            <button
              type="button"
              title="search"
              className="p-2 focus:outline-none focus:ring"
              onClick={handleSearch}
            >
              <svg
                fill="currentColor"
                viewBox="0 0 512 512"
                className="w-5 h-5 dark:text-gray-800"
              >
                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="Search"
            placeholder="Search..."
            ref={searchref}
            className="w-full py-2 pr-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSearch(e);
              }
            }}
          />
        </div>
      </fieldset>
    </div>
  );
}
