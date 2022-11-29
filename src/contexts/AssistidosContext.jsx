import { createContext, useEffect, useState } from "react";

export const AssistidosContext = createContext({});
import { getAssistidos } from "../helpers/dataAssistido";

export function AssistidosContextProvider({ children }) {
  const [listAssistidos, setListAssistidos] = useState([]);

  useEffect(() => {
    if (listAssistidos.length === 0) {
      setListAssistidos(getAssistidos);
    }
  }, [listAssistidos]);

  return (
    <AssistidosContext.Provider
      value={{
        listAssistidos,
      }}
    >
      {children}
    </AssistidosContext.Provider>
  );
}
