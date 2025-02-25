"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { Donation, getDonations } from "../services/donations";
import { formatCurrency } from "@/lib/utils";
import { User, getLocalUser } from "../services/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Donations() {
  const cpf = "12345678900";
  const [donations, setDonations] = useState<Donation[]>([]);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(getLocalUser());
  }, []);

  const total = donations.reduce((acc, curr) => acc + curr.valor, 0);

  useEffect(() => {
    async function get() {
      const res: Donation[] = await getDonations(cpf);
      console.log(res);
      if (res) {
        setDonations(res);
        const totalValue = res.reduce((acc, curr) => acc + curr.valor, 0);
      }
    }
    get();
  }, []);

  if (!user) {
    return (
      <div className="flex-center flex-col space-y-20">
        <h1 className="text-center text-4xl font-bold">Extrato de Doações</h1>

        <div className="flex-center flex-col gap-4">
          <p className="text-center text-lg">
            Faça login na plataforma para consultar as doações
          </p>
          <Button asChild variant={"default"} size={"lg"}>
            <Link href="/login" className="text-xl">
              Entrar
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-center w-full flex-col space-y-10">
      <h1 className="text-center text-4xl font-bold">Extrato de Doações</h1>

      {donations.length > 0 ? (
        <div className="w-full max-w-[500px]">
          <Table className="">
            <TableCaption>Lista de doações</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">CPF</TableHead>
                <TableHead>APP_NAME</TableHead>
                <TableHead className="text-right">VALOR</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {donations.map((d) => (
                <TableRow key={d.cpf}>
                  <TableCell className="font-medium">{d.cpf}</TableCell>
                  <TableCell>{d.app_name}</TableCell>
                  <TableCell className="text-right">
                    {formatCurrency(d.valor)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell className="text-right">
                  {" "}
                  {formatCurrency(total)}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      ) : (
        <p className="py-20">Não foram encontradas doações para este usuário</p>
      )}
    </div>
  );
}
