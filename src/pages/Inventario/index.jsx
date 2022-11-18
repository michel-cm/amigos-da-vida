import * as C from "./styles";

import { Card } from "../../components/Card";
import { TableListAssistidos } from "./TableInventario";

export function Inventario() {
  return (
    <C.Container>
      <h2>Inventário</h2>
      <C.AreaCardsResume>
        <Card title={"Equipamentos"} color={"#E2992B"} value={105} />
        <Card title={"Emprestados"} color={"#3AB04D"} value={87} />
        <Card title={"Disponível"} color={"#2261BC"} value={18} />
      </C.AreaCardsResume>
      <TableListAssistidos />
    </C.Container>
  );
}
