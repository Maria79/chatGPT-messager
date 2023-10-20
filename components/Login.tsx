"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Login() {
  return (
    <div className="bg-[#0fa27e] h-screen flex flex-col justify-center items-center text-center">
      <Image src="/img/chatgpt-logo.png" width={100} height={100} alt="log" />
      <button
        onClick={() => signIn("google")}
        className="text-white font-bold text-3xl animate-pulse"
      >
        Sign In to use ChatGPT
      </button>
    </div>
  );
}
