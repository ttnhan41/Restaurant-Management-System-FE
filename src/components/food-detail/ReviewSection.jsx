"use client";
import React, { useState } from "react";
import styled from "styled-components";
import ReviewItem from "./ReviewItem";
import Button from "./Button";

const ReviewSection = () => {
  const [rating, setRating] = useState(4);
  const [comment, setComment] = useState("");

  const reviews = [
    {
      id: 1,
      name: "Nguyễn Quốc Anh",
      rating: 5,
      comment: "After seeing so much hype, I decided to give this place a try. Delicious flavors, friendly service, and overall value for money. A hidden gem, for sure.",
      date: "27/03/2025",
      avatar: ""
    },
    {
      id: 2,
      name: "Nguyễn Quốc Anh",
      rating: 5,
      comment: "After seeing so much hype, I decided to give this place a try. Delicious flavors, friendly service, and overall value for money. A hidden gem, for sure.",
      date: "27/03/2025",
      avatar: ""
    }
  ];

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmitReview = () => {
    console.log("Submitting review:", { rating, comment });
    setComment("");
  };

  return (
    <ReviewSectionContainer>
      <SectionTitle>Reviews</SectionTitle>

      <ReviewForm>
        <UserAvatar>
          <svg
            width="54"
            height="54"
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="26.9347" cy="26.9347" r="26.9347" fill="#D9D9D9" />
          </svg>
        </UserAvatar>

        <FormContent>
          
          <RatingControls>
            <RatingLabel>Đánh giá</RatingLabel>
            <RatingButton onClick={() => handleRatingChange(Math.max(1, rating - 1))}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="20" height="20" rx="10" fill="#FF8700" fillOpacity="0.82" />
                <path
                  d="M15.8334 10.8317H4.16675V9.16504H15.8334V10.8317Z"
                  fill="white"
                  fillOpacity="0.5"
                />
              </svg>
            </RatingButton>
            <RatingValue>{rating}</RatingValue>
            <RatingButton onClick={() => handleRatingChange(Math.min(5, rating + 1))}>
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9602 11.3733H10.9202V16.6233H9.2402V11.3733H4.2002V9.62329H9.2402V4.37329H10.9202V9.62329H15.9602V11.3733Z"
                  fill="white"
                  fillOpacity="0.82"
                />
              </svg>
            </RatingButton>
          </RatingControls>

          <CommentTextarea
            placeholder="Bình luận"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <Button variant="primary" size="medium" onClick={handleSubmitReview}>
            Gửi
          </Button>
        </FormContent>
      </ReviewForm>

      <ReviewsDivider />

      <ReviewsList>
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </ReviewsList>
    </ReviewSectionContainer>
  );
};

const ReviewSectionContainer = styled.section`
  margin-top: 40px;
  margin-left: 80px;
  margin-bottom: 40px;
  @media (max-width: 991px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  @media (max-width: 640px) {
    margin-left: 15px;
    margin-right: 15px;
  }
`;

const SectionTitle = styled.h2`
  width: auto;
  height: auto;
  color: #000;
  font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 40px;
  font-weight: 800;

  margin: 0 0 56px 0;
  @media (max-width: 991px) {
    font-size: 45px;
  }
  @media (max-width: 640px) {
    font-size: 35px;
    margin-bottom: 30px;
  }
`;

const ReviewForm = styled.div`
  position: relative;
  margin-left: -54px;
  margin-bottom: 56px;
  height: 250px;
  @media (max-width: 991px) {
    margin-left: 0;
    margin-right: 20px;
  }
  @media (max-width: 640px) {
    margin-right: 15px;
  }
`;

const UserAvatar = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 53.869px;
  background: url(<path-to-image>) lightgray 50% / cover no-repeat, #d9d9d9;
  position: absolute;
  left: 0;
  top: 0;
`;

const FormContent = styled.div`
  margin-left: 100px;
`;

const RatingLabel = styled.span`
  width: auto;
  height: auto;
  color: rgba(255, 135, 0, 0.82);
  font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 8px;

`;

const RatingControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`;

const RatingButton = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
`;

const RatingValue = styled.span`
  color: rgba(255, 135, 0, 0.82);
  font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0.2px;
  width: auto;
  height: auto;
`;

const CommentTextarea = styled.textarea`
  display: block;
  width: 986px;
  height: 135px;
  color: #8d8888;
  font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0.4px;
  padding: 10px;
  border-radius: 3px;
  border: none;
  background-color: #e8e8e8;
  resize: none;
  margin-bottom: 20px;
  @media (max-width: 991px) {
    width: calc(100% - 100px);
  }
  @media (max-width: 640px) {
    width: calc(100% - 70px);
  }

  &::placeholder {
    color: #8d8888;
  }

  &:focus {
    outline: none;
    background-color: #e0e0e0;
  }
`;

const ReviewsDivider = styled.div`
  width: 100%;
  height: 2px;
  margin: 0 0 39px -54px;
  background-color: #d9d9d9;
  @media (max-width: 991px) {
    width: calc(100% - 40px);
    margin: 0 20px 39px 0;
  }
  @media (max-width: 640px) {
    width: calc(100% - 30px);
    margin: 0 15px 30px 0;
  }
`;

const ReviewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-left: -54px;
  @media (max-width: 991px) {
    margin-left: 0;
  }
`;

export default ReviewSection;
