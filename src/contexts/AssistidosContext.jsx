import { useCallback } from "react";
import { createContext, useEffect, useState } from "react";

export const AssistidosContext = createContext({});
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

  async function deleteAssistido(id) {
    await Api.deleteAssistido(id);
  }

  async function updateAssist(id, assistido) {
    await Api.updateAssistido(id, assistido);
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
        getAssistidoForId,

        addNewAssistido,
        deleteAssistido,
        updateAssist
      }}
    >
      {children}
    </AssistidosContext.Provider>
  );
}
