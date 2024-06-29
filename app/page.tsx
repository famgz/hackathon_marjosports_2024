"use client";

import { Button } from "@/components/ui/button";
import { getLocalUser } from "./services/auth";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-center h-full w-full flex-col space-y-20 bg-[url('/tragedia.webp')] bg-cover bg-center">
      <h1 className="text-center text-4xl font-bold">Rede de Doações</h1>

      <p className="text-2xl">Bem vindo ao canal de doações.</p>

      {getLocalUser() ? (
        <Button asChild variant={"default"}>
          <Link href="/donations">Ir para Doações</Link>
        </Button>
      ) : (
        <div className="flex-center flex-col space-y-4">
          <p className="text-lg">
            Faça login na plataforma para acessar susas doações
          </p>
          <Button asChild variant={"default"} size={"lg"}>
            <Link href="/login" className="text-xl">
              Entrar
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}
