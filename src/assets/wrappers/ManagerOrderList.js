import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
`;

export const Th = styled.th`
  text-align: left;
  padding: 0.75rem;
  background-color: #f5f5f5;
  border-bottom: 2px solid #ccc;
`;

export const Td = styled.td`
  padding: 0.75rem;
  border-bottom: 1px solid #e0e0e0;
  vertical-align: top;
`;

export const StatusBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: ${(props) => {
    switch (props.status) {
      case "PENDING":
        return "#ffc107";
      case "SERVED":
        return "#28a745";
      case "CANCELLED":
        return "#dc3545";
      default:
        return "#6c757d";
    }
  }};
  color: white;
`;

export const ErrorMessage = styled.div`
  color: #dc3545;
  padding: 1rem;
  background-color: #ffebee;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

export const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${(props) =>
    props.variant === "danger" ? "#dc3545" : "#28a745"};
  color: white;
  margin-right: 0.5rem;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;
