import styled from "styled-components";

export const Card = styled.div`
  background-color: ${(props) => props.theme["gray-600"]};
  display: flex;
  width: 100%;
  min-width: 180px;
  max-width: 300px;
  position: fixed;
  z-index: 999;
  top: 1rem;
  right: 1rem;

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
