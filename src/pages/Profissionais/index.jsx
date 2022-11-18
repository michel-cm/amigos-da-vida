import * as C from "./styles";

import { Card } from "../../components/Card";
import { TableProfissionais } from "./TableProfissionais";

export function Profissionais() {
  return (
    <C.Container>
      <h2>Profissionais</h2>
      <C.AreaCardsResume>
        <Card title={"Profissionais"} color={"#2261BC"} value={3} />
        <Card title={"Pacientes"} color={"#3AB04D"} value={75} />
      </C.AreaCardsResume>
      <TableProfissionais />
    </C.Container>
  );
}
