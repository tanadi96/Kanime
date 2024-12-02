import Image from "next/image";
import Link from "next/link";
import { ServerSession } from "../helpers";

export default async function Page() {
    const user = await ServerSession();
 
    return (
        <div className="mt-8 text-color-primary flex flex-col justify-center items-center">
            <h5 className="text-2xl font-bold">Welcome, {user?.name}</h5>
            <Image src={user?.image ?? "/default-avatar.png"} alt="..." width={250} height={250}/>
            <div className="flex flex-wrap gap-4 py-8">
                <Link
                    href="/dashboard/collection"
                    className="bg-color-accent text-color-dark font-bold px-4 py-3 text-xl"
                >
                    My Collection
                </Link>
                <Link 
                    href="/dashboard/comment"
                    className="bg-color-accent text-color-dark font-bold px-4 py-3 text-xl"
                >
                    My Comment
                </Link>
            </div>
        </div>
    )
}

