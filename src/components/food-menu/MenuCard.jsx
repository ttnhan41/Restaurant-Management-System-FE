"use client";
import React from "react";
import styled from "styled-components";
import StarRating from "./StarRating";
function MenuCard({ image, name, status, price, description, rating }) {
  return (
    <CardContainer>
      <CardImage src={image} alt={name} />
      <CardContent>
        <ItemInfo>
          <ItemName>{name}</ItemName>
          <ItemStatus>{status}</ItemStatus>
          
          <ItemPrice>{price}</ItemPrice>
          <ItemDescription>{description}</ItemDescription>
        </ItemInfo>
        <CardActions>
          <RatingContainer>
            <StarRating rating={5} />
            <Rating>{rating}</Rating>
          </RatingContainer>
          
          <AddButton>Add</AddButton>
        </CardActions>
      </CardContent>
    </CardContainer>
  );
}

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  line-height: normal;
  width: 33%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
    margin-top: 0;
  }
  @media (max-width: 768px) {
    max-width: 300px;
    margin: 0 auto;
  }
`;

const CardImage = styled.img`
  aspect-ratio: 1.28;
  object-fit: contain;
  object-position: center;
  width: 100%;
  border-radius: 12px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.15);
  max-height: 150px;
`;

const CardContent = styled.div`
  border-radius: 0px 0px 12px 12px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  padding: 12px 10px;
  align-items: stretch;
  gap: 8px;
  @media (max-width: 768px) {
    padding: 10px 8px;
    gap: 8px;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 11px;
  color: rgba(103, 103, 103, 1);
  font-weight: 400;
  flex: 1;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const ItemName = styled.h3`
  color: rgba(0, 0, 0, 1);
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
  font-size: 13px;
  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

const ItemStatus = styled.span`
  font-size: 10px;
  margin-top: 4px;
  @media (max-width: 768px) {
    font-size: 8px;
    margin-top: 3px;
  }
`;


const RatingContainer = styled.div`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 6px;
  width: auto;
  height: 3px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  @media (max-width: 640px) {
    width: 100%;
  }
`;

const ItemPrice = styled.span`
  color: rgba(255, 137, 6, 1);
  margin-top: 6px;
  font-size: 13px;
  font-weight: 600;
  @media (max-width: 768px) {
    margin-top: 5px;
    font-size: 10px;
  }
`;

const ItemDescription = styled.p`
  font-size: 12px;
  align-self: stretch;
  margin: 8px 0 0 0;
  line-height: 1.2;
  @media (max-width: 768px) {
    font-size: 8px;
    margin-top: 6px;
    line-height: 1.2;
  }
`;

const CardActions = styled.div`
  align-self: start;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  font-size: 10px;
  white-space: nowrap;
  text-align: center;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Rating = styled.span`
  color: #a7a9b7;
  font-family: SF Pro Text, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 500;
  line-height: auto;
  align-self: end;
  font-size: 10px;
`;

const AddButton = styled.button`
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  text-align: center;
  display: flex;
  background-color: rgba(255, 135, 0, 0.82);
  margin-top: 8px;
  padding: 6px 16px;
  font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  line-height: 1;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 28px;
  font-size: 10px;

  @media (max-width: 991px) {
    margin-right: 2px;
    padding: 6px 12px;
    white-space: initial;
  }

  @media (max-width: 768px) {
    padding: 5px 10px;
    font-size: 9px;
    margin-top: 6px;
    min-height: 24px;
  }

  &:hover {
    background-color: rgba(255, 135, 0, 1);
    transform: translateY(-1px);
  }
`;

export default MenuCard;
