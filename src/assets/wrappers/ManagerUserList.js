import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
  color: #333;
`;

export const ButtonGroup = styled.div`
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
`;

export const ActionButton = styled.button`
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.block {
    background-color: #000;
    color: white;
  }

  &.unblock {
    background-color: #28a745;
    color: white;
  }

  &.delete {
    background-color: #dc3545;
    color: white;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const Th = styled.th`
  background-color: #17a2b8;
  color: white;
  padding: 1rem;
  text-align: left;
`;

export const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
`;

export const Checkbox = styled.input`
  transform: scale(1.2);
  margin: 0;
  cursor: pointer;
`;

export const StatusBadge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: ${(props) => (props.blocked ? "#dc3545" : "#28a745")};
  color: white;
`;
