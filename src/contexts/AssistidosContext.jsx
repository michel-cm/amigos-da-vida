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

  async function addNewAssistido(assistido) {
    await Api.addNewAssistido(assistido).catch((err) => console.log(err));
  }

  function getAssistidoForId(id) {
    const assistidoFiltered = listAssistidos.filter((assistido) => {
      return assistido.id == id;
    });
    return assistidoFiltered;
  }

  useEffect(() => {
    if (listAssistidos.length === 0) {
      getAllAssistidos();
    }
  }, [listAssistidos]);

 

  return (
    <AssistidosContext.Provider
      value={{
        listAssistidos,
        getAllAssistidos,
        getAssistidoForId
      }}
    >
      {children}
    </AssistidosContext.Provider>
  );
}
