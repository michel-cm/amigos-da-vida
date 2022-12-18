import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(77, 77, 77, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  transition: all 0.4s;
  z-index: 10;
`;

export const Modal = styled.div`
  background-color: ${(props) => props.theme["gray-800"]};
  padding: 16px 32px;
  border-radius: 10px;
  width: 60vw;
  height: 90vh;
`;

export const ButtonConfirm = styled.button`
  border: none;
  padding: 16px;
  border-radius: 10%;
  background-color: #5a9bfc;
  border: 1px solid #5a9bfc;

  color: ${(props) => props.theme["gray-100"]};

  font-size: 15px;
  cursor: pointer;
  transition: filter 0.2s;

  margin-right: 32px;

  &:hover {
    filter: brightness(0.9);
  }
`;
export const ButtonNot = styled.button`
  border: 1px solid #5a9bfc;
  padding: 16px;
  border-radius: 10%;

  font-size: 15px;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const AreaClose = styled.div`
  text-align: end;
  padding-bottom: 8px;

  svg {
    font-size: 28px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Form = styled.form``;

export const AreaIdentificacao = styled.div`
  height: 80vh;
  border-radius: 5px;
  background: ${(props) => props.theme["gray-800"]};
  padding: 2rem;
`;

export const AreaInputsDisplayFlex = styled.div`
  display: flex;
`;

export const InputColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const Input = styled.input`
  background: ${(props) => props.theme["gray-900"]};
  border: none;
  padding: 0.75rem 1rem;
  color: ${(props) => props.theme["gray-300"]};
  font-size: 0.9rem;

  &[type="date"] {
    ::-webkit-calendar-picker-indicator {
      filter: invert(1);
    }
  }
`;

export const Select = styled.select`
  background: ${(props) => props.theme["gray-900"]};
  border: none;
  padding: 0.75rem 1rem;
  color: ${(props) => props.theme["gray-300"]};
  font-size: 0.9rem;
  width: 12rem;
`;
