"use client";
import React from "react";
import styled from "styled-components";

const StarRating = ({ rating = 5, totalReviews = 0 }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <StarIcon key={index} filled={index < rating}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.4416 2.92507L12.9083 5.85841C13.1083 6.26674 13.6416 6.65841 14.0916 6.73341L16.7499 7.17507C18.4499 7.45841 18.8499 8.69174 17.6249 9.90841L15.5583 11.9751C15.2083 12.3251 15.0166 13.0001 15.1249 13.4834L15.7166 16.0417C16.1833 18.0667 15.1083 18.8501 13.3166 17.7917L10.8249 16.3167C10.3749 16.0501 9.63326 16.0501 9.17492 16.3167L6.68326 17.7917C4.89992 18.8501 3.81659 18.0584 4.28326 16.0417L4.87492 13.4834C4.98326 13.0001 4.79159 12.3251 4.44159 11.9751L2.37492 9.90841C1.15826 8.69174 1.54992 7.45841 3.24992 7.17507L5.90826 6.73341C6.34992 6.65841 6.88326 6.26674 7.08326 5.85841L8.54992 2.92507C9.34992 1.33341 10.6499 1.33341 11.4416 2.92507Z"
          fill={index < rating ? "#EC910A" : "#E0E0E0"}
        />
      </svg>
    </StarIcon>
  ));

  return (
    <RatingContainer>
      <StarsContainer>{stars}</StarsContainer>
      {totalReviews > 0 && <ReviewCount>({totalReviews})</ReviewCount>}
    </RatingContainer>
  );
};

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const StarsContainer = styled.div`
  display: flex;
  gap: 2px;
`;

const StarIcon = styled.div`
  width: 20px;
  height: 20px;
`;

const ReviewCount = styled.span`
  width: 31px;
  color: #a7a9b7;
  text-align: center;
  font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 180%;
  height: 22px;
  margin-left: 23px;
`;

export default StarRating;
