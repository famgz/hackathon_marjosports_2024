import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number) {
  return Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}
