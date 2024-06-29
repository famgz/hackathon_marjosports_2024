import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function LoginPage() {
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
          <Input type="text" id="name" placeholder="Digite seu nome" />
        </div>

        <div>
          <Label htmlFor="cpf">CPF</Label>
          <Input type="text" id="cpf" placeholder="Digite seu CPF" />
        </div>

        <div>
          <Label htmlFor="password">Senha</Label>
          <Input type="password" id="password" placeholder="Digite uma senha" />
        </div>

        <Button className="!mt-6 w-full">Cadastrar</Button>
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
