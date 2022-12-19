import * as C from "./styles";

import { Card } from "../../components/Card";
import { TableListAssistidos } from "./TableInventario";
import { ModalAddInventario } from "./ModalAddInventario";
import { useState } from "react";
import { Button } from "../../components/Button";

export function Inventario() {
  const [openModalAddInventario, setOpenModalAddInventario] = useState(false);

  function handleOpenModal() {
    setOpenModalAddInventario(true);
  }

  return (
    <C.Container>
      <h2>Inventário</h2>
      <C.AreaCardsResume>
        <Card title={"Equipamentos"} color={"#E2992B"} value={105} />
        <Card title={"Emprestados"} color={"#3AB04D"} value={87} />
        <Card title={"Disponível"} color={"#2261BC"} value={18} />
      </C.AreaCardsResume>
      <TableListAssistidos />
      <C.ButtonAdd>
        <Button title="Adicionar novo item" fn={handleOpenModal} />
      </C.ButtonAdd>

      {openModalAddInventario && (
        <ModalAddInventario setModal={setOpenModalAddInventario} />
      )}
    </C.Container>
  );
}
