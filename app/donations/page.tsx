"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { useEffect, useState } from "react";
import { getDonations } from "../services/donations";
import { Donation } from "../models/donation";

export default function Donations() {
  const apiBaseUrl = "https://hackathon.marjosports.com.br/hackathon";
  const cpf = "12345678900";
  const [donations, setDonations] = useState<Donation[]>([]);

  useEffect(() => {
    async function get() {
      const res: Donation[] = await getDonations(cpf);
      if (res) {
        setDonations(res);
      }
    }

    get();
  }, []);

  return (
    <div>
      <h1>Extrato de Doações</h1>

      <Table>
        <TableCaption>Lista de doações</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Valor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
