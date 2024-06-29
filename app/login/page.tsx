"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { localLogIn } from "../services/auth";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    cpf: "",
    password: "",
  });

  const canSubmit = Object.values(form).every(Boolean);

  function handleChange(ev: ChangeEvent<HTMLInputElement>, type: string) {
    setForm((prev) => ({ ...prev, [type]: ev.target.value }));
  }

  function handleSubmit() {
    localLogIn();
    router.push("/donations");
  }

  return (
    <div className="flex flex-col items-center space-y-10">
      <div className="space-y-3">
        <h1 className="text-center text-4xl font-bold">Login</h1>

        <p className="text-muted-foreground">
          Faça o login para acompanhar as doações
        </p>
      </div>

      <form className="w-full max-w-[500px] space-y-4">
        <div>
          <Label htmlFor="cpf">CPF</Label>
          <Input
            type="text"
            id="cpf"
            placeholder="Digite seu CPF"
            required
            value={form.cpf}
            onChange={(ev) => handleChange(ev, "cpf")}
          />
        </div>

        <div>
          <Label htmlFor="password">Senha</Label>
          <Input
            type="password"
            id="password"
            placeholder="Digite seu senha"
            value={form.password}
            onChange={(ev) => handleChange(ev, "password")}
            required
          />
        </div>

        <Button
          className="!mt-6 w-full"
          type="button"
          onClick={handleSubmit}
          disabled={!canSubmit}
        >
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
