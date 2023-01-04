import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 2rem 3rem 2rem;
`;

export const AreaCardsResume = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px 20px;
  width: 100%;
  margin: 3rem 0 4rem 0;
  flex-wrap: wrap;
`;

export const AreaGroup = styled.div`
  display: flex;
  flex-direction: column;

  margin: 3.5rem;
`;

export const AreaButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      font-size: 0.85rem;
    }

    progress {
      margin-top: 0.5rem;
    }
  }
`;

export const ButtonEnviarStorage = styled.button`
  cursor: pointer;
  width: 200px;
  border: none;
  outline: none;
  background-color: green;
  color: #fff;

  padding: 0.75rem;
  border-radius: 4px;

  &:hover {
    opacity: 0.9;
  }
`;

export const ButtonCancelarStorage = styled.button`
  cursor: pointer;
  width: 180px;
  border: none;
  outline: none;
  background-color: black;
  color: #fff;

  padding: 0.75rem;
  border-radius: 4px;

  &:hover {
    opacity: 0.9;
  }
`;
export const AreaButtonsStorage = styled.div`
  display: flex;
  gap: 1rem;
  position: fixed;
  bottom: 1rem;
  right: 1rem;

  z-index: 99;
`;
