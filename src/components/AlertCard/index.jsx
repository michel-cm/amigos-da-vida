import * as C from "./styles";

export function AlertCard(props) {
  return (
    <C.Card value={props.type}>
      <C.AreaContent>
        <p>{props.title}</p>
      </C.AreaContent>
    </C.Card>
  );
}
