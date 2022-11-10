import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 60px;
  background-color: ${(props) => props.theme["gray-800"]};
  color: #fff;
  padding: 0 4rem;

  nav {
    display: flex;
    gap: 0.75rem;

    a {
      color: ${(props) => props.theme["gray-100"]};
      text-decoration: none;

      border-top: 4px solid transparent;
      border-bottom: 4px solid transparent;

      &:hover {
        border-bottom: 4px solid ${(props) => props.theme.secondary};
      }

      &.active {
        border-bottom: 4px solid ${(props) => props.theme.secondary};
      }
    }
  }
`;
