"use client";
import React from "react";
import styled from "styled-components";

function OrderItem({ number, image, name, price, quantity }) {
  return (
    <ItemContainer>
      <ItemNumber>{number}</ItemNumber>
      <ItemImage src={image} alt={name} />
      <ItemDetails>
        <ItemInfo>
          <ItemName>
            {name}
            <br />
            <ItemPrice>{price}</ItemPrice>
          </ItemName>
        </ItemInfo>
        <QuantityControls>
          <DecreaseButton />
          <Quantity>{quantity}</Quantity>
          <IncreaseButton src="https://cdn.builder.io/api/v1/image/assets/TEMP/899b51aead31f10bb4d85bc321eddd865db1c27b?placeholderIfAbsent=true&apiKey=f326aad530e94331bcd0128e6c6ac5b0" alt="Increase" />
        </QuantityControls>
      </ItemDetails>
    </ItemContainer>
  );
}

const ItemContainer = styled.div`
  align-self: start;
  display: flex;
  margin: 0 0 0 15px;
  align-items: start;
  gap: 8px;
  @media (max-width: 991px) {
    margin-left: 8px;
    margin-top: 6px;
  }
  @media (max-width: 768px) {
    margin: 6px 0 0 8px;
    gap: 8px;
    flex-wrap: wrap;
  }
`;

const ItemNumber = styled.span`
  color: rgba(0, 0, 0, 1);
  font-size: 12px;
  font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
  flex-shrink: 0;
  @media (max-width: 768px) {
    font-size: 11px;
    line-height: 18px;
  }
`;

const ItemImage = styled.img`
  aspect-ratio: 1.2;
  object-fit: contain;
  object-position: center;
  width: 70px;
  border-radius: 8px;
  align-self: stretch;
  flex-shrink: 0;
  max-width: 100%;
  @media (max-width: 768px) {
    width: 50px;
  }
`;

const ItemDetails = styled.div`
  margin-top: 4px;
  flex: 1;
  @media (max-width: 768px) {
    margin-top: 3px;
  }
`;

const ItemInfo = styled.div`
  margin-bottom: 6px;
`;

const ItemName = styled.h4`
  color: rgba(0, 0, 0, 1);
  font-size: 13px;
  font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
  @media (max-width: 991px) {
    margin-right: 4px;
  }
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const ItemPrice = styled.span`
  font-weight: 400;
  color: rgba(255, 137, 6, 1);
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: stretch;
  gap: 8px;
  @media (max-width: 768px) {
    gap: 6px;
    align-items: center;
  }
`;

const DecreaseButton = styled.button`
  border-radius: 4px;
  background-color: rgba(217, 217, 217, 0.3);
  display: flex;
  margin: auto 0;
  padding: 6px 6px;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  border: none;
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    background-color: rgba(0, 0, 0, 0.5);
    display: block;
    width: 10px;
    height: 1px;
  }
`;

const Quantity = styled.span`
  color: rgba(0, 0, 0, 1);
  font-size: 13px;
  font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
  @media (max-width: 768px) {
    font-size: 11px;
    line-height: 18px;
  }
`;

const IncreaseButton = styled.img`
  aspect-ratio: 1.04;
  object-fit: contain;
  object-position: center;
  width: 18px;
  border-radius: 0px 0px 0px 0px;
  align-self: start;
  flex-shrink: 0;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 16px;
  }
`;

export default OrderItem;
