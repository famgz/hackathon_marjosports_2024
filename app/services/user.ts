"use server";

import axios from "axios";

export interface DBUSer {
  name: string;
  cpf: string;
  password: string;
  appName: string;
  isAdmin: boolean;
}

export async function registerUser(user: DBUSer) {
  const url = "http://localhost:8080/usuario";

  try {
    return axios.post(url, user);
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error("Unexpected error", err);
    }
    return [];
  }
}

export async function getCpfs() {
  const url = "http://localhost:8080/usuario/1";

  try {
    return axios.get(url);
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error("Unexpected error", err);
    }
    return [];
  }
}

export async function logIn(cpf: string, password: string) {
  const url = "http://localhost:8080/usuario/";

  try {
    return axios.get(url);
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error("Unexpected error", err);
    }
    return [];
  }
}

// export async function getDonations(cpf: string): Promise<Donation[]> {
//   const apiBaseUrl = "https://hackathon.marjosports.com.br/hackathon";

//   try {
//     const res = await axios.get(`${apiBaseUrl}?cpf=${cpf}`, {
//       headers: { "api-key": process.env.NEXT_PUBLIC_API_KEY },
//     });
//     return res.data;
//   } catch (err) {
//     if (err instanceof Error) {
//       console.error(err.message);
//     } else {
//       console.error("Unexpected error", err);
//     }
//     return [];
//   }
// }
