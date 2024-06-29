"use client";

export interface User {
  id: string;
  name: string;
  app_name: string;
  cpf: string;
  isAdmin: boolean;
  password: string;
}

const localStorageKey = "user";

const defaultUser = {
  id: "123123",
  name: "Carlos Silva",
  app_name: "teste",
  cpf: "12345678900",
  isAdmin: false,
  password: "senha",
};

export function localLogIn() {
  typeof window !== "undefined" &&
    localStorage?.setItem(localStorageKey, JSON.stringify(defaultUser));
}

export function getLocalUser(): User {
  // const localUser = typeof window !== "undefined" && localStorage.getItem(localStorageKey);
  const localUser = localStorage.getItem(localStorageKey);
  const res = localUser ? JSON.parse(localUser) : null;
  return res;
}

export function localLogOut() {
  typeof window !== "undefined" && localStorage.removeItem(localStorageKey);
}

export function isLoggedIn() {
  return (
    typeof window !== "undefined" && !!localStorage.getItem(localStorageKey)
  );
}
