import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 2rem 8rem 2rem;
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

export const ButtonAdd = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  opacity: 0.75;

  &:hover {
    opacity: 1;
  }
`;
