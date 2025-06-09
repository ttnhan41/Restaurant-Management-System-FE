"use client";
import React from "react";
import styled from "styled-components";

const Button = ({ children, variant = "primary", size = "medium", onClick, ...props }) => {
  return (
    <StyledButton variant={variant} size={size} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  color: #fff;
  text-align: center;
  font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 600;
  line-height: 17px;
  border-radius: ${props => props.size === "large" ? "25.056px" : "10px"};
  border: none;
  cursor: pointer;
  background-color: rgba(255, 135, 0, 0.82);
  transition: background-color 0.2s ease;

  ${props => props.size === "large" && `
    width: 351px;
    height: 80px;
    font-size: 30px;
    @media (max-width: 991px) {
      width: 100%;
      max-width: 300px;
    }
    @media (max-width: 640px) {
      width: 100%;
    }
  `}

  ${props => props.size === "medium" && `
    width: 195px;
    height: 43px;
    font-size: 30px;
    @media (max-width: 640px) {
      width: 100%;
      max-width: 195px;
    }
  `}

  &:hover {
    background-color: rgba(255, 135, 0, 0.9);
  }

  &:active {
    background-color: rgba(255, 135, 0, 0.7);
  }
`;

export default Button;
