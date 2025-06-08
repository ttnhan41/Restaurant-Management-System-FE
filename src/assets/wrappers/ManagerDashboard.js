import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

export const Sidebar = styled.aside`
  width: 300px;
  background-color: #2cb1bc;
  color: white;
  padding: 2rem 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

export const SidebarTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  padding: 1rem 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: background-color 0.2s;
  background-color: ${(props) =>
    props.active ? "rgba(255,255,255,0.2)" : "transparent"};

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
`;

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const PageTitle = styled.h2`
  color: #333;
  font-size: 1.8rem;
  margin: 0;
`;

export const Button = styled.button`
  background-color: #2cb1bc;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #249ca5;
  }
`;

export const TableContainer = styled.table`
  width: 100%;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const TableHeader = styled.th`
  background-color: #2cb1bc;
  color: white;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
`;

export const TableCell = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #eee;
  vertical-align: middle;
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: #f9f9f9;
  }
`;

export const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
`;

export const StatusBadge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  background-color: ${(props) => {
    switch (props.status) {
      case "PENDING":
        return "#f39c12";
      case "CONFIRMED":
        return "#27ae60";
      case "PREPARING":
        return "#3498db";
      case "READY":
        return "#8e44ad";
      case "SERVED":
        return "#2ecc71";
      case "CANCELLED":
        return "#e74c3c";
      case "available":
        return "#27ae60";
      case "occupied":
        return "#e74c3c";
      case "reserved":
        return "#f39c12";
      case "active":
        return "#27ae60";
      case "inactive":
        return "#95a5a6";
      case true:
        return "#27ae60";
      default:
        return "#95a5a6";
    }
  }};
`;

export const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  color: ${(props) => (props.danger ? "#e74c3c" : "#2cb1bc")};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.danger ? "rgba(231, 76, 60, 0.1)" : "rgba(44, 177, 188, 0.1)"};
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
`;

export const ImagePreview = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1.5rem;
`;

export const CancelButton = styled(Button)`
  background-color: #95a5a6;

  &:hover {
    background-color: #7f8c8d;
  }
`;
