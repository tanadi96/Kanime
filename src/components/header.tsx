import Link from "next/link";
interface prop {
    title: string;
    link: string;
    linktitle: string;
}

export default function HeaderNew({title,link,linktitle}: prop) {
  return (
    <div className="flex flex-row justify-between items-center px-10 my-4 ">
      <h1 className="text-center md:text-3xl sm:text-xl text-md font-bold text-color-primary">{title}</h1>
      {link && linktitle ? (
        <Link href={link}>
          <button className="text-center text-color-primary hover:text-color-accent font-bold md:text-xl sm:text-md text-sm py-2 px-4">
            {linktitle}
          </button>
        </Link>
      ) : null}
    </div>
  );
}
