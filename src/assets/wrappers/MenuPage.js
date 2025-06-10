import styled from "styled-components";
import { FaSearch, FaStar } from "react-icons/fa";

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
`;

export const MenuWrapper = styled.div`
  max-width: 1400px;
  margin: 10px auto 20px auto;
`;

export const HeaderSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const SearchBar = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 15px 50px 15px 20px;
  border: 2px solid #e0e0e0;
  border-radius: 25px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #2cb1bc;
  }

  &::placeholder {
    color: #999;
  }
`;

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  font-size: 18px;
`;

export const FilterTabs = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const FilterTab = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 25px;
  background: ${(props) => (props.active ? "#2cb1bc" : "#f0f0f0")};
  color: ${(props) => (props.active ? "white" : "#666")};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: ${(props) => (props.active ? "#239aa3" : "#e0e0e0")};
  }
`;

export const ContentArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

export const MenuCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  opacity: ${(props) => (props.unavailable ? 0.6 : 1)};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const MenuImage = styled.div`
  height: 200px;
  background: url(${(props) => props.src}) center/cover;
  background-color: #f0f0f0;
  position: relative;
  cursor: pointer;
`;

export const StatusBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 600;
  background: ${(props) => (props.available ? "#28a745" : "#dc3545")};
  color: white;
`;

export const MenuInfo = styled.div`
  padding: 20px;
`;

export const MenuName = styled.h3`
  margin: 0 0 5px 0;
  color: #333;
  font-size: 18px;
`;

export const MenuCategory = styled.p`
  margin: 0 0 10px 0;
  color: #666;
  font-size: 14px;
  text-transform: capitalize;
`;

export const MenuPrice = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #2cb1bc;
  margin-bottom: 10px;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 15px;
`;

export const StarRating = styled.div`
  display: flex;
  gap: 2px;
`;

export const Star = styled(FaStar)`
  color: ${(props) => (props.filled ? "#ffc107" : "#e0e0e0")};
  font-size: 14px;
`;

export const RatingText = styled.span`
  color: #666;
  font-size: 14px;
  margin-left: 5px;
`;

export const AddButton = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: ${(props) => (props.disabled ? "#ccc" : "#2cb1bc")};
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background: ${(props) => (props.disabled ? "#ccc" : "#239aa3")};
  }

  &:disabled {
    background: #95a5a6;
    cursor: not-allowed;
  }
`;

export const OrderPanel = styled.div`
  background: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  height: fit-content;
  position: sticky;
  top: 70px;

  @media (max-width: 1024px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 12px 12px 0 0;
    z-index: 1000;
  }
`;

export const OrderTitle = styled.h4`
  margin: 0 0 20px 0;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const OrderList = styled.div`
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 20px;
  padding-right: 15px;

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
`;

export const OrderItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`;

export const OrderItemImage = styled.div`
  width: 60px;
  height: 60px;
  background: url(${(props) => props.src}) center/cover;
  background-color: #f0f0f0;
  border-radius: 8px;
  flex-shrink: 0;
`;

export const OrderItemInfo = styled.div`
  flex: 1;
`;

export const OrderItemName = styled.div`
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
`;

export const OrderItemPrice = styled.div`
  color: #2cb1bc;
  font-weight: 600;
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  background: #2cb1bc;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;

  &:hover {
    background: #239aa3;
  }
`;

export const QuantityText = styled.span`
  font-weight: 600;
  min-width: 20px;
  text-align: center;
`;

export const OrderSummary = styled.div`
  border-top: 2px solid #2cb1bc;
  padding-top: 15px;
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const TotalLabel = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

export const TotalPrice = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #2cb1bc;
`;

export const OrderButton = styled.button`
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 8px;
  background: ${(props) => (props.disabled ? "#ccc" : "#2cb1bc")};
  color: white;
  font-size: 18px;
  font-weight: 700;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background 0.3s;

  &:hover {
    background: ${(props) => (props.disabled ? "#ccc" : "#239aa3")};
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #666;
  padding: 40px 20px;
  font-size: 18px;
  gap: 10px;
`;
