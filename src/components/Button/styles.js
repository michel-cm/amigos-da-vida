import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  height: 50px;
  border: none;

  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme["gray-100"]};
  cursor: pointer;
  width: 14rem;
  border-radius: 5px;

  &:hover {
    opacity: 0.9;
  }
`;
