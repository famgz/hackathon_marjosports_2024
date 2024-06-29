"use server";

import axios from "axios";
import { Donation } from "../models/donation";

export async function getDonations(cpf: string): Promise<Donation[]> {
  try {
    const res = await axios.get(
      `https://hackathon.marjosports.com.br/hackathon?cpf=${cpf}`,
      {
        headers: { "api-key": process.env.NEXT_PUBLIC_API_KEY },
      },
    );
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
