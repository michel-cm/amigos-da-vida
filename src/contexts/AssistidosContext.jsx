import { createContext, useState } from "react";

export const AssistidosContext = createContext({});

export function AssistidosContextProvider({ children }) {
  const [listAssistidos, setListAssistidos] = useState([]);

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
