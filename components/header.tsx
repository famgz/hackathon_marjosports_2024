"use client";

import { User, getLocalUser, localLogOut } from "@/app/services/auth";
import { CircleUserRoundIcon, LogInIcon, LogOutIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function Header() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    setUser(getLocalUser());
  }, []);

  function handleLogout(): void {
    localLogOut();
    router.refresh();
  }

  return (
    <div className="w-full px-5">
      <div className="mx-auto flex w-full max-w-[1024px] items-center justify-between gap-4 border-b py-5">
        {/* Links */}
        <div className="flex gap-4">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo image"
              width={180}
              height={0}
              style={{ height: "auto" }}
            />
          </Link>
          <div className="hidden items-center md:flex">
            <Button variant={"ghost"} className="text-xl" asChild>
              <Link href="/">Sobre</Link>
            </Button>
            <Button variant={"ghost"} className="text-xl" asChild>
              <Link href="/">Contato</Link>
            </Button>
            <Button variant={"ghost"} className="text-xl" asChild>
              <Link href="/donations">Doações</Link>
            </Button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span>Olá {user.name}</span>

              <Button
                variant={"outline"}
                size={"default"}
                onClick={handleLogout}
                className="flex gap-2"
              >
                <span className="hidden text-xl md:block">Sair</span>
                <LogOutIcon />
              </Button>

              <Button variant={"outline"} size={"icon"}>
                <CircleUserRoundIcon />
              </Button>
            </>
          ) : (
            <Button
              variant={"outline"}
              size={"default"}
              className="flex gap-2"
              asChild
            >
              <Link href="/login">
                <span className="hidden text-xl md:block">Entrar</span>
                <LogInIcon />
              </Link>
            </Button>
          )}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
