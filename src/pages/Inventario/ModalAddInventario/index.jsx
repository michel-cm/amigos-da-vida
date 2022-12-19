import * as C from "./styles";
import { BsFillXCircleFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";

import { useState } from "react";

export function ModalAddInventario({setModal}) {
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
      </C.Modal>
    </C.Container>
  );
}
