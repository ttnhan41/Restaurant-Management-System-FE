import styled from "styled-components";
import foodImg from "../images/food_bg.jpg";

export const Container = styled.main`
  min-height: 100vh;
  //background: linear-gradient(135deg, #2cb1bc 0%, #14b8a6 50%, #0891b2 100%);
  background-image: url(${foodImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  overflow: hidden;
`;

export const AuthCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  box-shadow: 0 32px 64px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 900px;
  display: flex;
  overflow: hidden;
  z-index: 2;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 400px;
  }
`;

export const LeftPanel = styled.div`
  flex: 1;
  background: linear-gradient(135deg, #2cb1bc, #14b8a6);
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const RightPanel = styled.div`
  flex: 1;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const Logo = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  margin-top: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const WelcomeText = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: center;
  margin-top: 0;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const SubText = styled.p`
  font-size: 1rem;
  opacity: 0.9;
  text-align: center;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const FoodIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 30px;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 20px;
  }
`;

export const FormTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 30px;
  text-align: center;
  margin-top: 0;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 16px 50px 16px 16px;
  border: 2px solid ${(props) => (props.$hasError ? "#ef4444" : "#e5e7eb")};
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #f9fafb;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #2cb1bc;
    box-shadow: 0 0 0 3px rgba(44, 177, 188, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 16px;
  color: #6b7280;
  z-index: 1;
  cursor: ${(props) => (props.$clickable ? "pointer" : "default")};

  &:hover {
    color: ${(props) => (props.$clickable ? "#2cb1bc" : "#6b7280")};
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 16px;
  background-color: #2cb1bc;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;

  &:hover {
    background-color: #14b8a6;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(44, 177, 188, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const SocialButton = styled.button`
  width: 100%;
  padding: 12px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  background-color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 10px;
  transition: all 0.3s ease;
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    background-color: #f9fafb;
    border-color: #d1d5db;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &.facebook:hover {
    background-color: #f0f8ff;
    border-color: #1877f2;
  }
`;

export const LinkText = styled.span`
  color: #2cb1bc;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #14b8a6;
    text-decoration: underline;
  }
`;

export const ToggleText = styled.div`
  text-align: center;
  color: #6b7280;
  margin-top: 20px;
  font-size: 0.95rem;
`;

export const ErrorText = styled.div`
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 5px;
  font-weight: 500;
`;

export const DividerText = styled.div`
  text-align: center;
  margin: 20px 0;
  color: #6b7280;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 45%;
    height: 1px;
    background-color: #e5e7eb;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

export const ForgotPasswordWrapper = styled.div`
  text-align: right;
  margin-bottom: 20px;
`;
