import { User } from "../models/user";

const localStorageKey = "user";

const defaultUser = {
  id: "123123",
  name: "Carlos Silva",
  app_name: "teste",
  cpf: "12345678900",
  isAdmin: false,
  password: "senha",
};

export function logIn() {
  typeof window !== "undefined" &&
    localStorage?.setItem(localStorageKey, JSON.stringify(defaultUser));
}

export function getLocalUser(): User {
  const localUser =
    typeof window !== "undefined" && localStorage.getItem(localStorageKey);
  const res = localUser ? JSON.parse(localUser) : null;
  return res;
}

export function logOut() {
  typeof window !== "undefined" && localStorage.removeItem(localStorageKey);
}

export function isLoggedIn() {
  return (
    typeof window !== "undefined" && !!localStorage.getItem(localStorageKey)
  );
}
