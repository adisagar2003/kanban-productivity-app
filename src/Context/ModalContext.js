import { createContext } from "react";

export const ModalContext = createContext({
  addTask: false,
  editTask: false,
});
