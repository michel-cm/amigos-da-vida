import { useContext } from "react";

import { InventarioContext } from "../contexts/InventarioContext";

export function useInventarioContext() {
  const value = useContext(InventarioContext);

  return value;
}
