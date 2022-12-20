import * as C from "./styles";

import { Card } from "../../components/Card";
import { TableListInventario } from "./TableListInventario";
import { ModalAddInventario } from "./ModalAddInventario";
import { useState } from "react";
import { Button } from "../../components/Button";
import { ModalConfirm } from "../../components/ModalConfirm";

import { useInventarioContext } from "../../hooks/useInventarioContext";

export function Inventario() {
  const [openModalAddInventario, setOpenModalAddInventario] = useState(false);

  const [modalConfirOpen, setModalConfirmOpen] = useState(false);

  const { listItens } = useInventarioContext();

  function handleOpenModal() {
    setOpenModalAddInventario(true);
  }

  return (
    <C.Container>
      <h2>Inventário</h2>
      <C.AreaCardsResume>
        <Card title={"Itens"} color={"#E2992B"} value={1} />
        <Card title={"Emprestados"} color={"#3AB04D"} value={87} />
        <Card title={"Disponível"} color={"#2261BC"} value={18} />
      </C.AreaCardsResume>
      <TableListInventario setModal={setModalConfirmOpen} list={listItens} />
      <C.ButtonAdd>
        <Button title="Adicionar novo item" fn={handleOpenModal} />
      </C.ButtonAdd>

      {openModalAddInventario && (
        <ModalAddInventario setModal={setOpenModalAddInventario} />
      )}
      {modalConfirOpen && <ModalConfirm setModal={setModalConfirmOpen} />}
    </C.Container>
  );
}
