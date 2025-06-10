import styled from "styled-components";
import { FaStar } from "react-icons/fa";

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
`;

export const DetailWrapper = styled.div`
  max-width: 1200px;
  margin: 10px auto 20px auto;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  color: #666;
  cursor: pointer;
  margin-bottom: 20px;
  transition: all 0.3s;

  &:hover {
    background: #f8f9fa;
    border-color: #2cb1bc;
    color: #2cb1bc;
  }
`;

export const ContentArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ItemDetailCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const ItemImage = styled.div`
  height: 400px;
  background: url(${(props) => props.src}) center/cover;
  background-color: #f0f0f0;
  position: relative;

  @media (max-width: 768px) {
    height: 250px;
  }
`;

export const StatusBadge = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  background: ${(props) => (props.available ? "#28a745" : "#dc3545")};
  color: white;
`;

export const ItemInfo = styled.div`
  padding: 30px;
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const ItemTitle = styled.h1`
  margin: 0;
  color: #333;
  font-size: 28px;
  font-weight: 700;
`;

export const ItemPrice = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #2cb1bc;
  white-space: nowrap;
`;

export const CategoryTag = styled.span`
  display: inline-block;
  padding: 6px 12px;
  background: #f0f0f0;
  color: #666;
  border-radius: 15px;
  font-size: 16px;
  margin-bottom: 15px;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const StarRating = styled.div`
  display: flex;
  gap: 3px;
`;

export const Star = styled(FaStar)`
  color: ${(props) => (props.filled ? "#ffc107" : "#e0e0e0")};
  font-size: 18px;
`;

export const RatingText = styled.span`
  color: #666;
  font-size: 16px;
  font-weight: 600;
`;

export const ReviewCount = styled.span`
  color: #999;
  font-size: 14px;
`;

export const ItemDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 25px;
  font-size: 18px;
`;

export const ActionArea = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const QuantityButton = styled.button`
  width: 40px;
  height: 40px;
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

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export const QuantityText = styled.span`
  font-weight: 600;
  font-size: 18px;
  min-width: 30px;
  text-align: center;
`;

export const AddToCartButton = styled.button`
  flex: 1;
  padding: 15px 25px;
  border: none;
  border-radius: 8px;
  background: ${(props) => (props.disabled ? "#ccc" : "#2cb1bc")};
  color: white;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background: ${(props) => (props.disabled ? "#ccc" : "#239aa3")};
  }

  &:disabled {
    background: #95a5a6;
    cursor: not-allowed;
  }
`;

export const ReviewSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  margin: 0 0 25px 0;
  color: #333;
  font-size: 24px;
`;

export const ReviewForm = styled.form`
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #f0f0f0;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 18px;
  color: #333;
`;

export const RatingInput = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
`;

export const RatingInputStar = styled(FaStar)`
  font-size: 24px;
  color: ${(props) => (props.active ? "#ffc107" : "#e0e0e0")};
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #ffc107;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 18px;
  font-family: inherit;
  resize: vertical;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #2cb1bc;
  }

  &::placeholder {
    color: #999;
  }
`;

export const SubmitButton = styled.button`
  padding: 12px 25px;
  background: #2cb1bc;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #239aa3;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ReviewCard = styled.div`
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  transition: shadow 0.3s;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
  gap: 15px;
`;

export const ReviewerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ReviewerAvatar = styled.div`
  width: 50px;
  height: 50px;
  background: #2cb1bc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
`;

export const ReviewerDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const ReviewerName = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: #333;
`;

export const ReviewDate = styled.div`
  color: #999;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ReviewActions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const LikeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  background: none;
  border: 1px solid #e0e0e0;
  border-radius: 15px;
  color: #666;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;

  &:hover {
    background: #f8f9fa;
  }

  &.active {
    background: rgb(44, 118, 188);
    color: white;
    border-color: rgb(44, 118, 188);
  }
`;

export const ReviewText = styled.p`
  color: #666;
  line-height: 1.6;
  margin: 15px 0;
  font-size: 18px;
`;

export const CartPanel = styled.div`
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

export const CartTitle = styled.h5`
  margin: 0 0 20px 0;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CartEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #666;
  padding: 20px;
  font-size: 16px;
  gap: 10px;
`;
