import * as C from "./styles";

import { Card } from "../../components/Card";
import { TableDocs } from "./TableDocs";

export function Documentos() {
  return (
    <C.Container>
      <h2>Inventário</h2>
      <C.AreaCardsResume>
        <Card title={"Documentos"} color={"#E2992B"} value={105} />
      </C.AreaCardsResume>
      <TableDocs />
    </C.Container>
  );
}
