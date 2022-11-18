import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 2rem 3rem 2rem;
`;

export const AreaContent = styled.div`
  display: flex;
  margin: 2.5rem 0;

  gap: 3rem;
`;

export const ContentInformations = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme["gray-800"]};
  padding: 1.5rem 0;
  height: fit-content;
  position: fixed;
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
  margin-left: 350px;
  flex: 1;

  div {
    height: 100vh;
    border-radius: 5px;
    background-color: red;

    :nth-child(odd) {
      background-color: blue;
    }
  }
`;
