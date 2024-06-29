"use client";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { registerUser } from "../services/user";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const [form, setForm] = useState({
    name: "",
    cpf: "",
    password: "",
  });

  const ableToSubmit = Object.values(form).every(Boolean);

  function handleChange(ev: ChangeEvent<HTMLInputElement>, type: string) {
    setForm((prev) => ({ ...prev, [type]: ev.target.value }));
  }

  function handleSubmit() {
    if (!ableToSubmit) {
      return;
    }

    registerUser({
      ...form,
      appName: "donationTeste",
      isAdmin: false,
    })
      .then(redirect("/donations"))
      .catch((err) => console.log(err));
  }

  return (
    <div className="flex flex-col items-center space-y-10">
      <div className="space-y-3">
        <h1 className="text-center text-4xl font-bold">Cadastrar</h1>
        <p className="text-muted-foreground">
          Cadastre-se para acompanhar as doações
        </p>
      </div>

      <form className="w-full max-w-[500px] space-y-4">
        <div>
          <Label htmlFor="name">Nome</Label>
          <Input
            type="text"
            id="name"
            placeholder="Digite seu nome"
            value={form.name}
            onChange={(ev) => handleChange(ev, "name")}
            required
          />
        </div>

        <div>
          <Label htmlFor="cpf">CPF</Label>
          <Input
            type="text"
            id="cpf"
            placeholder="Digite seu CPF"
            value={form.cpf}
            onChange={(ev) => handleChange(ev, "cpf")}
            required
          />
        </div>

        <div>
          <Label htmlFor="password">Senha</Label>
          <Input
            type="password"
            id="password"
            placeholder="Digite uma senha"
            value={form.password}
            onChange={(ev) => handleChange(ev, "password")}
            required
          />
        </div>

        <Button
          className="!mt-6 w-full"
          type="button"
          onClick={handleSubmit}
          disabled={!ableToSubmit}
        >
          Cadastrar
        </Button>
      </form>

      <div className="flex-center flex-col">
        <p>Já possui conta?</p>
        <Button asChild variant={"link"} className="">
          <Link href="/login">Entrar</Link>
        </Button>
      </div>
    </div>
  );
}
