import styled from "styled-components";

export const Container = styled.div`
  padding: 0rem 6rem 8rem 6rem;
`;

export const AreaContent = styled.div`
  display: flex;
  margin: 2.5rem 0;
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  position: fixed;

  gap: 0.75rem;
`;

export const AreaButtonMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 100%;
  }
`;

export const ContentInformations = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme["gray-800"]};
  padding: 1.5rem 0;
  height: fit-content;

  width: 300px;
  border-radius: 5px;

  a {
    cursor: pointer;
    padding: 0.7rem 0rem 1rem 1rem;
    border-left: 3px solid transparent;

    &.active {
      background: ${(props) => props.theme["gray-700"]};
      border-left: 3px solid ${(props) => props.theme.secondary};
    }

    &:hover {
      background: ${(props) => props.theme["gray-700"]};
      border-left: 3px solid ${(props) => props.theme.secondary};
    }
  }
`;

export const Contentregistration = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 360px;
  flex: 1;
  gap: 2rem;

  h2 {
    margin-bottom: 2.5rem;
  }
`;

export const AreaIdentificacao = styled.div`
  height: 80vh;
  border-radius: 5px;
  background: ${(props) => props.theme["gray-800"]};
  padding: 2rem;
`;
export const AreaEndereco = styled.div`
  height: 70vh;
  border-radius: 5px;
  background: ${(props) => props.theme["gray-800"]};
  padding: 2rem;
`;
export const AreaCondicoesSaude = styled.div`
  border-radius: 5px;
  background: ${(props) => props.theme["gray-800"]};
  padding: 2rem;
`;
export const AreaCondicoesHabitacionais = styled.div`
  border-radius: 5px;
  background: ${(props) => props.theme["gray-800"]};
  padding: 2rem;
`;
export const ComposicaoCondicoes = styled.div`
  border-radius: 5px;
  background: ${(props) => props.theme["gray-800"]};
  padding: 2rem;
`;
export const ProgramasSociais = styled.div`
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
`;

export const TextArea = styled.textarea`
  background: ${(props) => props.theme["gray-900"]};
  border: none;
  color: ${(props) => props.theme["gray-300"]};
  resize: none;
`;
