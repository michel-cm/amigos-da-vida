import styled from "styled-components";

export const Container = styled.div``;

export const MembrosList = styled.div`
  margin-top: 1rem;

  input {
    border: none;
    background: none;
  }

  table {
    width: 100%;
    border-collapse: collapse;

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
      padding: 1rem 0.75rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        padding-left: 1rem;
        width: 35%;
      }

      &:nth-child(2) {
        width: 20%;
      }
      &:nth-child(3) select {
        width: 200px;
      }

      &:last-child {
        width: 0;
        padding-right: 1rem;
      }
    }
  }
`;

export const Select = styled.select`
  background: ${(props) => props.theme["gray-900"]};
  border: none;
  padding: 0.75rem 1rem;
  color: ${(props) => props.theme["gray-300"]};
  font-size: 0.9rem;
  width: 6rem;
`;

export const AreaIcon = styled.div`
  display: inline-block;
  cursor: pointer;
  padding: 4px;

  &:hover {
    opacity: 0.85;
  }
`;
