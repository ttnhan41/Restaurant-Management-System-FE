import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
`;

export const AccountWrapper = styled.div`
  max-width: 1200px;
  margin: 10px auto 0 auto;
`;

export const HeaderSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Avatar = styled.div`
  width: 80px;
  height: 80px;
  background: #2cb1bc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
`;

export const UserDetails = styled.div`
  flex: 1;
`;

export const UserName = styled.h2`
  margin: 0 0 10px 0;
  color: #333;
  font-size: 24px;
`;

export const UserEmail = styled.p`
  margin: 0;
  color: #666;
  font-size: 18px;
`;

export const EditButton = styled.button`
  background: #2cb1bc;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  transition: background 0.3s;

  &:hover {
    background: #239aa3;
  }
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

export const InfoField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label`
  font-weight: 600;
  color: #333;
  font-size: 18px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 18px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #2cb1bc;
  }

  &:disabled {
    background: #f9f9f9;
    color: #666;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const SaveButton = styled.button`
  background: #2cb1bc;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
`;

export const CancelButton = styled.button`
  background: #dc3545;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
`;

export const ContentSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const TabSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  height: 600px;
  display: flex;
  flex-direction: column;
`;

export const ScrollableContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 10px;

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
    background: #239aa3;
  }
`;

export const TabTitle = styled.h3`
  margin: 0 0 20px 0;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
`;

export const OrderCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 15px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const OrderDate = styled.div`
  display: flex;
  flex-direction: row;
  color: #666;
  font-size: 16px;
`;

export const StatusBadge = styled.span`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: ${(props) => {
    switch (props.status) {
      case "PENDING":
        return "#f39c12";
      case "PREPARING":
        return "#20b0f7";
      case "READY":
        return "#b8b50d";
      case "SERVED":
        return "#28a745";
      case "CANCELLED":
        return "#dc3545";
      case "CONFIRMED":
        return "#28a745";
      default:
        return "#6c757d";
    }
  }};
`;

export const OrderItems = styled.div`
  margin-bottom: 15px;
`;

export const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`;

export const ItemName = styled.span`
  flex: 1;
  color: #333;
`;

export const ItemQuantity = styled.span`
  color: #666;
  margin: 0 15px;
`;

export const ItemPrice = styled.span`
  color: #2cb1bc;
  font-weight: 600;
`;

export const TotalPrice = styled.div`
  text-align: right;
  font-size: 16px;
  font-weight: 700;
  color: #333;
  padding-top: 10px;
  border-top: 2px solid #2cb1bc;
`;

export const ReservationCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 15px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 15px;
  align-items: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const ReservationInfo = styled.div``;

export const ReservationDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  color: #666;
  font-size: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;
