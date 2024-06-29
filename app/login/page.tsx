"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { logIn } from "../services/auth";

export default function LoginPage() {
  const [form, setForm] = useState();

  function handleSubmit() {}

  return (
    <div className="flex flex-col items-center space-y-10">
      <div className="space-y-3">
        <h1 className="text-center text-4xl font-bold">Login</h1>

        <p className="text-muted-foreground">
          Faça o login para acompanhar as doações
        </p>
      </div>

      <form className="w-full max-w-[500px] space-y-4" onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="cpf">CPF</Label>
          <Input type="text" id="cpf" placeholder="Digite seu CPF" required />
        </div>

        <div>
          <Label htmlFor="password">Senha</Label>
          <Input
            type="password"
            id="password"
            placeholder="Digite seu senha"
            required
          />
        </div>

        <Button className="!mt-6 w-full" type="button" onClick={logIn}>
          Entrar
        </Button>
      </form>

      <div className="flex-center flex-col">
        <p>Não possui conta?</p>
        <Button asChild variant={"link"} className="">
          <Link href="/register">Cadastrar-se</Link>
        </Button>
      </div>
    </div>
  );
}
