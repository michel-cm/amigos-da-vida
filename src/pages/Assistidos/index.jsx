import * as C from "./styles";

import { Card } from "../../components/Card";
import { TableListAssistidos } from "./TableListAssistidos";

import { useAssistidosContext } from "../../hooks/useAssistidosContext";

export function Assistidos() {
  const { listAssistidos } = useAssistidosContext();
  
  return (
    <C.Container>
      <h2>Assistidos</h2>
      <C.AreaCardsResume>
        <Card title={"Assistidos"} color={"#FC5A5A"} value={105} />
        <Card title={"Beneficiados"} color={"#3AB04D"} value={87} />
      </C.AreaCardsResume>
      <TableListAssistidos listAssistidos={listAssistidos} />
    </C.Container>
  );
}
