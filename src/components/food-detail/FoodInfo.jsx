"use client";
import React from "react";
import styled from "styled-components";
import StarRating from "./StarRating";
import Button from "./Button";

const FoodInfo = () => {
  return (
    <FoodInfoContainer>
      <FoodImageContainer>
        <FoodImage src="./87282159.jpg" alt="Tôm chiên" />
      </FoodImageContainer>
      <FoodDetails>
        <FoodTitle>Tôm chiên</FoodTitle>
        <RatingContainer>
          <StarRating rating={5} totalReviews={20} />
        </RatingContainer>
        <FoodDescription>
          Egg fried rice is the simplest of fried rice variations that you'll
          find. The basic version is nothing but cooked rice, beaten eggs,
          spring onions or scallions, oil and soy sauce cooked on high heat in
          a wok. You'll find many versions of this egg and rice recipe
        </FoodDescription>
        <CategoryTag>Món chính</CategoryTag>
        <PriceContainer>
          <PriceLabel>Giá:</PriceLabel>
          <Price>$5.00</Price>
        </PriceContainer>
        <Button variant="primary" size="medium">
          Add
        </Button>
      </FoodDetails>
    </FoodInfoContainer>
  );
};

const FoodInfoContainer = styled.section`
  display: flex;
  width: 100%;
  margin: 90px 80px 0 80px;
  gap: 60px;
  align-items: flex-start;
  @media (max-width: 991px) {
    flex-direction: column;
    padding: 40px 20px 0 20px;
    gap: 40px;
  }
  @media (max-width: 640px) {
    padding: 20px 15px 0 15px;
    gap: 30px;
  }
`;

const FoodImageContainer = styled.div`

  flex-shrink: 0;
`;

const FoodImage = styled.img`
  width: 500px;
  height: 300px;
  border-radius: 21.886px;
  box-shadow: 0px 3.385px 20.311px 0px rgba(0, 0, 0, 0.25);
  background-color: #f0f0f0;
  @media (max-width: 991px) {
    width: 100%;
    max-width: 500px;
    height: 300px;
  }
  @media (max-width: 640px) {
    height: 250px;
  }
`;

const FoodDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const FoodTitle = styled.h1`
  width: 291px;
  height: auto;
  color: #000;
  font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 40px;
  font-weight: 800;
  line-height: 17px;
  margin: 0;
  @media (max-width: 991px) {
    font-size: 35px;
    width: 100%;
  }
  @media (max-width: 640px) {
    font-size: 28px;
    height: auto;
  }
`;

const RatingContainer = styled.div`
  margin-top: 10px;
  width: 244px;
  height: 26px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  @media (max-width: 640px) {
    width: 100%;
  }
`;

const FoodDescription = styled.p`
  overflow: wrap;
  width: 863px;
  color: #383636;
  font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 300;
  line-height: 40px;
  letter-spacing: 0.44px;
  height: auto;
  margin: 0;
  @media (max-width: 991px) {
    width: 100%;
    font-size: 18px;
  }
  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 24px;
    height: auto;
    padding: 10px 0;
  }
`;

const CategoryTag = styled.span`
  width: 113px;
  height: 30px;
  color: #504f4f;
  text-align: center;
  font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 17px;
  position: relative;
  left: 10px;
  top: 6px;
  border-radius: 25.056px;
  border: 1px solid #999696;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  align-text: center;
  margin: 20px 0px;
  gap: 60px;
  @media (max-width: 640px) {
    gap: 20px;
  }
`;

const PriceLabel = styled.span`
align-text: center;
  width: 52px;
  height: auto;
  color: #000;
  font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 23px;
  font-weight: 800;
  line-height: 17px;
`;

const Price = styled.span`
  align-item: center;
  width: 68px;
  height: auto;
  color: #ff8906;
  font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 23px;
  font-weight: 400;
`;


export default FoodInfo;
