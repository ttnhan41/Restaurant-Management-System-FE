"use client";
import React from "react";
import styled from "styled-components";

function OrderSummary() {
  return (
    <SummaryContainer>
      <SummaryDetails>
        <SummaryLabels>
          <ItemCount>Number of Items (3)</ItemCount>
          <TotalLabel>Total</TotalLabel>
        </SummaryLabels>
        <SummaryAmounts>
          <SubtotalAmount>$15.00</SubtotalAmount>
          <TotalAmount>$15.00</TotalAmount>
        </SummaryAmounts>
      </SummaryDetails>
      <PaymentButton>
        <PaymentButtonText>Thanh Toán</PaymentButtonText>
      </PaymentButton>
    </SummaryContainer>
  );
}

const SummaryContainer = styled.div`
  background-color: rgba(255, 255, 255, 1);
  align-self: center;
  margin-top: 8px;
  width: 100%;
  max-width: 350px;
  padding: 0px;
  font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
  text-align: center;
  border-radius: 8px;
  @media (max-width: 991px) {
    padding: 12px;
    width: 100%;
  }
  @media (max-width: 768px) {
    padding: 10px;
    margin-top: 6px;
  }
`;

const SummaryDetails = styled.div`
  display: flex;
  width: 100%;
  max-width: 280px;
  align-items: stretch;
  gap: 15px;
  font-size: 12px;
  color: rgba(167, 169, 183, 1);
  line-height: 20px;
  justify-content: space-between;
  margin: 0 auto;
  @media (max-width: 768px) {
    font-size: 11px;
    line-height: 18px;
    gap: 10px;
  }
`;

const SummaryLabels = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemCount = styled.span`
  font-weight: 700;
  font-size: 11px;
`;

const TotalLabel = styled.span`
  margin-top: 12px;
  width: auto;
  font-weight: 900;
  white-space: nowrap;
  font-size: 11px;
  @media (max-width: 991px) {
    white-space: initial;
  }
  @media (max-width: 768px) {
    margin-top: 8px;
  }
`;

const SummaryAmounts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  white-space: nowrap;
  font-size: 11px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const SubtotalAmount = styled.span`
  font-weight: 700;
  align-self: start;
  font-size: 11px;
`;

const TotalAmount = styled.span`
  margin-top: 12px;
  font-weight: 900;
  font-size: 11px;
  @media (max-width: 991px) {
    white-space: initial;
  }
  @media (max-width: 768px) {
    margin-top: 8px;
  }
`;

const PaymentButton = styled.button`
  border-radius: 36.41px;
  margin: 10px auto;
  background-color: #FFFFFF;
  width: 65%;
  align-item: center;
  font-size: 14px;
  color: #fff;
  font-weight: 800;
  line-height: 1.2;
  border: none;
  cursor: pointer;
  @media (max-width: 991px) {
    margin-left: 0;
    margin-top: 12px;
  }
  @media (max-width: 768px) {
    margin-top: 10px;
    font-size: 13px;
  }
`;

const PaymentButtonText = styled.span`
  color: #fff;
  text-align: center;     
  display: flex;
  align-items: center;        
  justify-content: center;
  border-radius: 36.41px;
  background-color: rgba(236, 145, 10, 1);
  gap: 8px;
  font-size: 20px;
  display: block;
  transition: all 0.3s ease;
  padding: 12px 30px;
  @media (max-width: 991px) {
    padding: 10px 20px;
    min-height: 36px;
  }

  @media (max-width: 768px) {
    padding: 8px 15px;
    min-height: 32px;
    border-radius: 16px;
  }

  &:hover {
    background-color: rgba(236, 145, 10, 0.9);
    transform: translateY(-1px);
  }
`;

export default OrderSummary;
