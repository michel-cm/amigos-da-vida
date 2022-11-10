import styled from "styled-components";

export const AreaCardsResume = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px 20px;
  width: 100%;
  margin: 34px 0;
  flex-wrap: wrap;
`;

export const ContainerAreaCardsButtons = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const ContentAreaCardsButtons = styled.div`
  background: ${(props) => props.theme["gray-800"]};
  padding: 1.5rem;
  max-width: 1300px;
`;

export const AreaCardsButtons = styled.div`
  display: flex;

  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  width: 100%;

  justify-content: space-around;
  padding: 2rem;
`;

export const CardButton = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.3);
  padding: 1rem 2rem;
  background: ${(props) => props.theme["gray-700"]};
  gap: 0.5rem;

  img {
    width: 48px;
  }
`;
