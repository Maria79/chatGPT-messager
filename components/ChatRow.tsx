import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useSession } from "next-auth/react";

import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";

import { BiTrash } from "react-icons/bi";
import { HiOutlineChatBubbleLeft } from "react-icons/hi2";

type Props = {
  id: string;
};

export default function ChatRow({ id }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [active, setActive] = useState();

  const [messages] = useCollection(
    query(
      collection(db, "users", session?.user?.email!, "chats", id, "messages"),
      orderBy("createdAt", "asc")
    )
  );

  return (
    <Link href={`/chat/${id}`} className={`chatRow justify-center`}>
      <HiOutlineChatBubbleLeft className="h-5 w-5" />
      <p className="flex-1 hidden md:inline-flex truncate">
        {messages?.docs[messages?.docs.length - 1]?.data().text || "New Chat"}
      </p>

      <BiTrash className="h-5 w-5 text-gray-700 hover:text-red-700" />
    </Link>
  );
}
