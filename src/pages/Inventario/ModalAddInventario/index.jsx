import * as C from "./styles";
import { BsFillXCircleFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";

import { useState } from "react";

export function ModalAddInventario({ setModal }) {
  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <C.Container>
      <C.Modal>
        <C.AreaClose>
          <BsFillXCircleFill
            style={{
              cursor: "pointer",
            }}
            onClick={handleCloseModal}
          />
        </C.AreaClose>

        <C.AreaIdentificacao>
          <h2>Adicionar item</h2>

          <C.AreaInputsDisplayFlex style={{ gap: "1rem" }}>
            <C.InputColumn
              style={{
                width: "350px",
              }}
            >
              <label>Nome</label>
              <C.Input type={"text"} required />
            </C.InputColumn>
          </C.AreaInputsDisplayFlex>

          <C.AreaInputsDisplayFlex
            style={{
              gap: "1rem",
            }}
          >
            <C.InputColumn
              style={{
                width: "150px",
              }}
            >
              <label>Cod ref</label>
              <C.Input type={"text"} />
            </C.InputColumn>
            <C.InputColumn
              style={{
                width: "150px",
              }}
            >
              <label>Quantidade</label>
              <C.Input type={"number"} required maxLength={11} />
            </C.InputColumn>
          </C.AreaInputsDisplayFlex>

          <C.ButtonConfirm>Adicionar</C.ButtonConfirm>
          <C.ButtonNot onClick={handleCloseModal}>Cancelar</C.ButtonNot>
        </C.AreaIdentificacao>
      </C.Modal>
    </C.Container>
  );
}
