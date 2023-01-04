import { useContext } from "react";

import { StorageContext } from "../contexts/StorageContext";

export function useStorageContext() {
  const value = useContext(StorageContext);

  return value;
}
