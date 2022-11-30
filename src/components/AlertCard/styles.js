import styled from "styled-components";

export const Card = styled.div`
  background-color: ${(props) => props.theme["gray-900"]};
  display: flex;
  width: 100%;
  min-width: 180px;
  max-width: 300px;

  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2);

  &&::before {
    content: "";
    width: 0.3rem;
    height: 4rem;
    background-color: ${(props) => props.value};
    opacity: 0.75;
  }
`;

export const AreaContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;
