import * as C from "./styles";
import cancer from "../../assets/cancer.png";
import inventario from "../../assets/inventario.png";
import inventario2 from "../../assets/inventario2.png";

import { Card } from "./Card";

import { BsChevronRight } from "react-icons/bs";

export function Home() {
  return (
    <>
      <C.AreaCardsResume>
        <Card title={"Assistidos"} color={"#FC5A5A"} value={105} />
        <Card title={"Inventário"} color={"#E2992B"} value={47} />
        <Card title={"Empréstimos"} color={"#3AB04D"} value={23} />
        <Card title={"Profissionais"} color={"#2261BC"} value={3} />
      </C.AreaCardsResume>

      <C.ContainerAreaCardsButtons>
        <C.ContentAreaCardsButtons>
          <h4>Cadastro rápido</h4>
          <C.AreaCardsButtons>
            <C.CardButton>
              <img src={cancer} />
              <p>assistido</p>
              <BsChevronRight />
            </C.CardButton>
            <C.CardButton>
              <img src={inventario2} />
              <p>equipamento</p>
              <BsChevronRight />
            </C.CardButton>
            <C.CardButton>
              <img src={inventario} />
              <p>empréstimo</p>
              <BsChevronRight />
            </C.CardButton>
          </C.AreaCardsButtons>
        </C.ContentAreaCardsButtons>
      </C.ContainerAreaCardsButtons>
    </>
  );
}
