"use client";
import React from "react";
import styled from "styled-components";
import Header from "../components/food-detail/Header";
import FoodInfo from "../components/food-detail/FoodInfo";
import ReviewSection from "../components/food-detail/ReviewSection";

const MenuItemDetail = () => {
  return (
    <PageContainer>
      <Header />
      <MainContent>
        <FoodInfo />
        <Divider />
        <ReviewSection />
      </MainContent>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  margin: 0;
  width: 100%;
  background-color: #fff;
  @media (max-width: 991px) {
    max-width: 991px;
  }
  @media (max-width: 640px) {
    max-width: 640px;
  }
`;

const MainContent = styled.main`
  width: 100%;
`;

const Divider = styled.div`
  width: 90%;
  height: 2px;
  margin: 80px auto;
  background-color: #d9d9d9;
  @media (max-width: 991px) {
    width: calc(100% - 40px);
    margin: 40px 20px;
  }
  @media (max-width: 640px) {
    width: calc(100% - 30px);
    margin: 30px 15px;
  }
`;

export default MenuItemDetail;
