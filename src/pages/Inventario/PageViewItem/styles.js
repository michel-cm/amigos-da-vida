import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 4rem;
`;

export const InventarioList = styled.div`
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
        width: 20%;
        padding-left: 1rem;
      }

      &:last-child {
        width: 8%;
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
};

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

export const AreaEmprestimos = styled.div`
  display: flex;
  gap: 1rem;

  margin-bottom: 4rem;

  flex-wrap: wrap;
`;

export const AreaBeneficio = styled.div`
  margin-top: 0.5rem;

  padding: 1rem;
  background-color: ${(props) => props.theme["gray-700"]};
  flex: 1;
  min-width: 48%;
  max-width: 48%;

  gap: 2rem;

  strong {
    font-weight: bold;
  }

  p {
    margin: 0.75rem 0;
  }
`;

export const AreaDoacoes = styled.div`
  display: flex;
  gap: 1rem;

  flex-wrap: wrap;
`;

export const AreaButton = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    height: 50px;
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme["gray-100"]};
    cursor: pointer;
    width: 14rem;
    border-radius: 5px;

    &:hover {
      opacity: 0.9;
    }

    &:disabled {
      background-color: ${(props) => props.theme["gray-900"]};
      cursor: not-allowed;
    }
  }
`;
