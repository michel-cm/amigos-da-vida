import { useCallback, createContext, useEffect, useState } from "react";

export const StorageContext = createContext({});

import { Api } from "../services/Api";

export function StorageContextProvider({ children }) {
  const [categorias, setCategorias] = useState([]);

  const getAllCategoriasStorage = useCallback(async () => {
    await Api.getAllCategoriasStorage().then((data) => {
      setCategorias(data);
    });
  }, []);

  useEffect(() => {
    if (categorias.length === 0) {
      getAllCategoriasStorage();
    } else {
      return;
    }
  }, [categorias]);

  return (
    <StorageContext.Provider
      value={{

          categorias,
          getAllCategoriasStorage,

      }}
    >
      {children}
    </StorageContext.Provider>
  );
}
