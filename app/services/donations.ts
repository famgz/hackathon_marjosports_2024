"use server";

import axios from "axios";

export interface Donation {
  cpf: string;
  app_name: string;
  valor: number;
}

export async function getDonations(cpf: string): Promise<Donation[]> {
  const apiBaseUrl = "https://hackathon.marjosports.com.br/hackathon";

  try {
    const res = await axios.get(`${apiBaseUrl}?cpf=${cpf}`, {
      headers: { "api-key": process.env.NEXT_PUBLIC_API_KEY },
    });
    return res.data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error("Unexpected error", err);
    }
    return [];
  }
}
