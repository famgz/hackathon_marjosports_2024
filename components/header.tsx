"use client";

import { CircleUserRoundIcon, LogInIcon, LogOutIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import { User } from "./models/user";

export default function Header() {
  const [user, setUser] = useState<User | null>(null);

  const localStorageKey = "user";

  const defaultUser = {
    id: "123123",
    name: "Carlos Silva",
    app_name: "teste",
    cpf: "12345678900",
    isAdmin: false,
    password: "senha",
  };

  function logIn() {
    localStorage.setItem(localStorageKey, JSON.stringify(defaultUser));
    setUser(defaultUser);
  }

  function logOut() {
    localStorage.removeItem(localStorageKey);
    setUser(null);
  }

  return (
    <div className="w-full">
      <div className="mx-auto flex w-full max-w-[1024px] items-center justify-between gap-4 border-b p-5">
        {/* Links */}
        <div className="flex items-center gap-4">
          <Image src="/logo.png" height={0} width={150} alt="" />
          <Link href="/">Sobre</Link>
          <Link href="/">Regras</Link>
          <Link href="/">Contato</Link>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Button variant={"outline"} size={"icon"} onClick={logOut}>
                <LogOutIcon />
              </Button>

              <Button variant={"outline"} size={"icon"}>
                <CircleUserRoundIcon />
              </Button>
            </>
          ) : (
            <Button variant={"outline"} size={"icon"} onClick={logIn}>
              <LogInIcon />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
