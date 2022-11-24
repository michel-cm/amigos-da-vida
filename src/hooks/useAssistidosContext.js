import { useContext } from "react";

import { AssistidosContext } from "../contexts/AssistidosContext";

export function useAssistidosContext() {
  const value = useContext(AssistidosContext);

  return value;
}
