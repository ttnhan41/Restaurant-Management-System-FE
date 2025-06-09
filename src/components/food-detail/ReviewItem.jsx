"use client";
import React from "react";
import styled from "styled-components";
import StarRating from "./StarRating";

const ReviewItem = ({ review }) => {
  const { name, rating, comment, date, avatar } = review;

  return (
    <ReviewItemContainer>
      <ReviewerAvatar>{avatar}</ReviewerAvatar>
      <ReviewContent>
        <ReviewHeader>
          <ReviewerName>{name}</ReviewerName>
          <RatingContainer>
            <StarRating rating={rating} />
          </RatingContainer>
        </ReviewHeader>

        <ReviewComment>{comment}</ReviewComment>
        <ReviewDate>{date}</ReviewDate>
      </ReviewContent>
    </ReviewItemContainer>
  );
};

const ReviewItemContainer = styled.article`
  position: relative;
  height: 200px;
  @media (max-width: 991px) {
    margin-right: 20px;
  }
  @media (max-width: 640px) {
    margin-right: 15px;
  }
`;

const ReviewerAvatar = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 53.869px;
  background: url(<path-to-image>) lightgray 50% / cover no-repeat, #d9d9d9;
  position: absolute;
  left: 0;
  top: 0;
`;

const ReviewContent = styled.div`
  margin-left: 77px;
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 15px;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const ReviewerName = styled.h3`
  width: auto;
  color: #000;
  text-align: center;
  font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 800;
  line-height: 180%;
  height: auto;
  margin: 0;
  @media (max-width: 640px) {
    font-size: 20px;
    width: 100%;
    text-align: left;
  }
`;

const RatingContainer = styled.div`
  display: inline-flex;
  padding: 0px 12px 6px 0px;
  align-items: flex-start;
  gap: 6px;
  width: 134px;
  height: 26px;
  @media (max-width: 640px) {
    padding: 0;
  }
`;

const ReviewComment = styled.p`
  width: auto;
  max-width: 863px;
  height: auto;
  color: #414141;
  font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 180%;
  margin: 0 0 5px 0;
  @media (max-width: 991px) {
    width: calc(100% - 100px);
  }
  @media (max-width: 640px) {
    width: calc(100% - 80px);
    font-size: 16px;
    line-height: 24px;
  }
`;

const ReviewDate = styled.time`
  width: 144px;
  height: 31px;
  color: #605e5e;
  font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 180%;
  @media (max-width: 640px) {
    font-size: 14px;
  }
`;

export default ReviewItem;
