import styled from "styled-components";

export const AreaCardsResume = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px 20px;
  width: 100%;
  margin: 48px 0;
  flex-wrap: wrap;
`;

export const ContainerAreaCardsButtons = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  margin: 3rem;
`;

export const ContentAreaCardsButtons = styled.div`
  background: ${(props) => props.theme["gray-800"]};
  padding: 1.5rem;
  max-width: 1300px;

  h4 {
    margin-left: 2rem;
  }
`;

export const AreaCardsButtons = styled.div`
  display: flex;

  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  width: 100%;

  padding: 2rem;
`;

export const CardButton = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.3);
  padding: 1rem 2rem;
  background: ${(props) => props.theme["gray-700"]};
  gap: 0.7rem;

  img {
    width: 48px;
  }
`;

export const ContainerSearch = styled.div`
  display: flex;

  &:first-child {
    width: 75%;
  }
`;

export const AreaListAssistidos = styled.div`
  flex: 1;
  padding: 2rem 3rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["gray-100"]};
  }
`;
export const AreaInventario = styled.div`  
  padding: 2rem 3rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["gray-100"]};
  }
`;

export const AssistidosList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 1rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${(props) => props.theme["gray-600"]};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme["gray-100"]};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1rem;
      }
    }

    td {
      background-color: ${(props) => props.theme["gray-700"]};
      border-top: 4px solid ${(props) => props.theme["gray-800"]};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 40%;
        padding-left: 1rem;
      }

      &:last-child {
        width: 10%;
        padding-right: 1rem;
      }
    }
  }
`;

export const InventarioList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 1rem;

  table {
    width: 50%;
    border-collapse: collapse;
    min-width: 400px;

    th {
      background-color: ${(props) => props.theme["gray-600"]};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme["gray-100"]};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1rem;
      }
    }

    td {
      background-color: ${(props) => props.theme["gray-700"]};
      border-top: 4px solid ${(props) => props.theme["gray-800"]};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 75%;
        padding-left: 1rem;
      }

      &:last-child {
        width: 10%;
        padding-right: 1rem;
      }
    }
  }
`;

export const AreaIcon = styled.div`
  display: inline-block;
  cursor: pointer;
  padding: 4px;

  &:hover {
    opacity: 0.85;
  }
`;

const STATUS_COLORS = {
  yellow: "yellow-500",
  green: "green-500",
  red: "red-500",
} 

export const Status = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`;
