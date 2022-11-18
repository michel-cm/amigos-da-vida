import { BsChevronRight } from "react-icons/bs";
import * as C from "./styles";

export function Button({ title, fn }) {
  return (
    <C.Container onClick={fn}>
      <p>{title}</p>
      <BsChevronRight />
    </C.Container>
  );
}
