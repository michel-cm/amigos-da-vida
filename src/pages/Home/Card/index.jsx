import * as C from "./styles";

export function Card(props) {
  return (
    <C.Card value={props.color}>
      <C.AreaContent>
        <C.AreaTitle color={props.color}>          
          <p>{props.title}</p>
        </C.AreaTitle>
        <C.LineCard2></C.LineCard2>
        <span>{props.value}</span>
      </C.AreaContent>
    </C.Card>
  );
}
