import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Nav = styled.nav`
  margin-bottom: 2rem;
  a {
    margin-right: 1.5rem;
    color: #007bff;
    text-decoration: none;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
`;

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftPane = styled.div`
  flex: 1;
`;

export const TableElement = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  background-color: #28a745;
  color: #fff;
  padding: 0.75rem;
  border: 1px solid #ccc;
  text-align: left;
`;

export const Td = styled.td`
  padding: 0.6rem 0.8rem;
  border: 1px solid #ccc;
`;

export const TableRow = styled.tr`
  background-color: ${(props) => (props.available ? "#e8f7ec" : "#fde7e7")};
  &:hover {
    background-color: ${(props) => (props.available ? "#d0eed8" : "#fbcfcf")};
  }
`;

export const ActionButton = styled.button`
  padding: 0.4rem 0.9rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #0056b3;
  }
`;

export const RightPane = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 1rem;
`;

export const TableBox = styled.div`
  min-width: 130px;
  height: 130px;
  border-radius: 12px;
  background-color: ${(props) => (props.available ? "#d4edda" : "#f8d7da")};
  border: 2px solid ${(props) => (props.available ? "#28a745" : "#dc3545")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  text-align: center;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-3px);
  }
`;
