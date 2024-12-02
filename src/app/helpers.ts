import { options } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";


export const ServerSession = async () => {
  const user = await getServerSession(options);
  return user?.user;
};
