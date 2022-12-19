import { useCallback } from "react";
import { createContext, useEffect, useState } from "react";

export const AssistidosContext = createContext({});
import { getAssistidos } from "../helpers/dataAssistido";
import { Api } from "../services/Api";

export function AssistidosContextProvider({ children }) {
  const [listAssistidos, setListAssistidos] = useState([]);

  const getAllAssistidos = useCallback(async () => {
    await Api.getAllAssistidos().then((data) => {
      setListAssistidos(data);
    });
  }, []);

  useEffect(() => {
    if (listAssistidos.length === 0) {
      getAllAssistidos();
    }
  }, [listAssistidos]);

  console.log(listAssistidos);

  return (
    <AssistidosContext.Provider
      value={{
        listAssistidos,
        getAllAssistidos,
      }}
    >
      {children}
    </AssistidosContext.Provider>
  );
}
