import { ServerSession } from "@/app/helpers";
import Link from "next/link";
import Image from "next/image";

export default async function Signin() {
  const user = await ServerSession();
 
  const actionLabel = user ? "SIGN OUT" : "SIGN IN";
  const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex items-center space-x-4">
      {user && user.image ? (
        <div className="flex items-center space-x-4">
          <ul className="menu menu-horizontal px-1 pr-2">
            <li>
              <details>
                <summary>
                  <Image
                    width={40}
                    height={40}
                    src={user.image}
                    alt="Profile Picture"
                    className="w-5 h-5 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                </summary>
                <ul className="bg-base-100 rounded-t-none">

                  <li>
                    <Link
                      href={actionUrl}
                      className="text-white font-bold text-sm sm:text-base py-1 px-2 rounded-full transition duration-300 ease-in-out"
                    >
                      {actionLabel}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={'/dashboard'}
                      className="text-white font-bold text-sm sm:text-base py-1 px-2 rounded-full transition duration-300 ease-in-out"
                    >
                      Dashboard
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      ) : (
        <Link
          href={actionUrl}
          className="btn text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
