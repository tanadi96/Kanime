import Link from "next/link";
import Search from "./search";
import Signin from "./signin";

export function Navbar() {
  return (
    <div className="navbar bg-color-accent px-2 py-2 ">
      <div className="navbar-start flex justify-start md:justify-start md:px-4 pl-2">
        <Link href="/" className="text-xs md:text-3xl text-black py-1 items-center">
          KANIME LIST
        </Link>
      </div>
      <div className="navbar-center flex justify-center">
        <Search />
      </div>
      <div className="navbar-end flex justify-center md:justify-end pr-2" >
        <Signin />
      </div>
    </div>
  );
}
