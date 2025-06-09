"use client";
import React from "react";
import styled from "styled-components";
import OrderItem from "./OrderItem";
import OrderSummary from "./OrderSummary";

function OrderSidebar() {
  const orderItems = [
    {
      id: 1,
      number: "1.",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a5545752dd115e335741178b1d54e70280752795?placeholderIfAbsent=true&apiKey=f326aad530e94331bcd0128e6c6ac5b0",
      name: "Jasmine Rice",
      price: "$5.00",
      quantity: 2
    },
    {
      id: 2,
      number: "1.",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb1172be21a099c6cd98b95dc890e30de6b3df0d?placeholderIfAbsent=true&apiKey=f326aad530e94331bcd0128e6c6ac5b0",
      name: "Long Grain White Rice",
      price: "$5.00",
      quantity: 3
    },
    {
      id: 3,
      number: "1.",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8b5bcf0cd6e246a816d3062625078c2fa6891e09?placeholderIfAbsent=true&apiKey=f326aad530e94331bcd0128e6c6ac5b0",
      name: "Bomba Rice",
      price: "$5.00",
      quantity: 4
    }
  ];

  return (
    <SidebarContainer>
      <OrderInfo>
        <CurrentOrderLabel>Current Order</CurrentOrderLabel>
        <TodaySection>
          <TodayLabel>Today</TodayLabel>
          <CalendarIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/e634ac7223f56a40a32a0a89824e124cd0215e86?placeholderIfAbsent=true&apiKey=f326aad530e94331bcd0128e6c6ac5b0" alt="Calendar" />
        </TodaySection>
      </OrderInfo>
      <OrderDivider />
      {orderItems.map((item, index) => (
        <React.Fragment key={item.id}>
          <OrderItem {...item} />
          {index < orderItems.length - 1 && <OrderDivider />}
        </React.Fragment>
      ))}
      <OrderDivider />
      <OrderSummary />
    </SidebarContainer>
  );
}


const SidebarContainer = styled.div`
  display: flex;
  background-color: #FFFFFF;
  width: 100%;
  border-radius: 8px;
  max-width: 350px;
  flex-direction: column;
  align-items: stretch;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 15px;
  }
  @media (max-width: 768px) {
    margin-top: 12px;
  }
`;

const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-left: 10px;
  margin-top: 15px;
  @media (max-width: 991px) {
    margin-left: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
  }
  @media (max-width: 768px) {
    gap: 12px;
  }
`;

const CurrentOrderLabel = styled.h2`
  font-size: 14px;
  font-weight: 700;
  margin: 0;
  flex-grow: 1;
  flex-shrink: 1;
  width: auto;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const TodaySection = styled.div`
  display: flex;
  align-items: stretch;
  gap: 8px;
  font-size: 12px;
  white-space: nowrap;
  letter-spacing: 0.1px;
  line-height: 20px;
  @media (max-width: 991px) {
    white-space: initial;
  }
  @media (max-width: 768px) {
    gap: 6px;
    font-size: 11px;
  }
`;

const TodayLabel = styled.span`
  font-weight: 600;
`;

const CalendarIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 16px;
  flex-shrink: 0;
  @media (max-width: 768px) {
    width: 14px;
  }
`;

const OrderDivider = styled.hr`
  border: none;
  border-top: 1px solid rgba(238, 240, 246, 1);
  width: 100%;
  max-width: 350px;
  flex-shrink: 0;
  height: 1px;
  margin: 15px 0;
  @media (max-width: 991px) {
    margin: 6px 0;
  }
  @media (max-width: 768px) {
    margin: 5px 0;
  }
`;

export default OrderSidebar;
