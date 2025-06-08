import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LeftPanel = styled.div`
  width: 350px;
  background-color: white;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  max-height: 100vh;
`;

export const RightPanel = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #f8f9fa;
`;

export const HeaderSection = styled.div`
  background-color: #2cb1bc;
  color: white;
  padding: 1.5rem;
  text-align: center;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Subtitle = styled.p`
  margin: 0.5rem 0 0 0;
  opacity: 0.9;
  font-size: 0.9rem;
`;

export const TableList = styled.div`
  padding: 1rem;
  overflow-y: auto;
  flex: 1;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #2cb1bc;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #249ca5;
  }
`;

export const TableItem = styled.div`
  border: 2px solid ${(props) => (props.selected ? "#2cb1bc" : "#e1e5e9")};
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${(props) => (props.selected ? "#f0f9fa" : "white")};

  &:hover {
    border-color: #2cb1bc;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(44, 177, 188, 0.15);
  }
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const TableNumber = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2cb1bc;
`;

export const TableStatus = styled.div`
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  color: white;
  background-color: ${(props) => {
    switch (props.status) {
      case true:
        return "#27ae60";
      case false:
        return "#f39c12";
      default:
        return "#95a5a6";
    }
  }};
`;

export const TableInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6c757d;
  font-size: 0.9rem;
`;

export const ReserveButton = styled.button`
  width: 100%;
  background-color: #2cb1bc;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 0.75rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #249ca5;
  }

  &:disabled {
    background-color: #95a5a6;
    cursor: not-allowed;
  }
`;

export const FloorPlan = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-height: 600px;
  position: relative;
`;

export const FloorTitle = styled.h2`
  text-align: center;
  color: #2cb1bc;
  margin-bottom: 2rem;
  font-size: 1.8rem;
`;

export const TableGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

export const FloorTable = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  font-weight: 600;
  color: white;
  font-size: 1.1rem;

  background-color: ${(props) => {
    if (props.selected) return "#2cb1bc";
    switch (props.status) {
      case true:
        return "#27ae60";
      case false:
        return "#f39c12";
      default:
        return "#95a5a6";
    }
  }};

  border: 3px solid ${(props) => (props.selected ? "#1a8a94" : "transparent")};

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const TableChairs = styled.div`
  position: absolute;
  top: -15px;
  right: -15px;
  background-color: #2cb1bc;
  color: white;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 500;
`;

export const Legend = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #6c757d;
`;

export const LegendColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
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
  border-radius: 12px;
  padding: 2rem;
  width: 400px;
  max-width: 90vw;
`;

export const ModalHeader = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const ModalTitle = styled.h3`
  color: #2cb1bc;
  margin: 0 0 0.5rem 0;
  font-size: 1.4rem;
`;

export const SelectedTableInfo = styled.div`
  background-color: #f0f9fa;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border-left: 4px solid #2cb1bc;
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e1e5e9;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #2cb1bc;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e1e5e9;
  border-radius: 6px;
  font-size: 1rem;
  background-color: white;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #2cb1bc;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 2rem;
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
`;

export const PrimaryButton = styled(Button)`
  background-color: #2cb1bc;
  color: white;

  &:hover {
    background-color: #249ca5;
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: #6c757d;
  color: white;

  &:hover {
    background-color: #5a6268;
  }
`;
