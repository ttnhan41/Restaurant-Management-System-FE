"use client";
import React from "react";
import styled from "styled-components";
import LeftNavigation from "../components/food-menu/LeftNavigation";
import Header from "../components/food-menu/Header";
import CategoryTabs from "../components/food-menu/CategoryTab";
import MenuGrid from "../components/food-menu/MenuGrid";
import OrderSidebar from "../components/food-menu/OrderSideBar";

function Menu() {
  return (
    <DashboardContainer>
      <LeftNavigation />
      <MainContent>
        <Header />
        <ContentSection>
          <MainGrid>
            <MenuSection>
              <CategoryTabs />
              <MenuGrid />
            </MenuSection>
            <OrderSection>
              <OrderSidebar />
            </OrderSection>
          </MainGrid>
        </ContentSection>
      </MainContent>
    </DashboardContainer>
  );
}

const DashboardContainer = styled.div`
  border-radius: 8px;
  background-color: rgba(248, 248, 251, 1);
  display: flex;
  padding-right: 20px;
  align-items: stretch;
  gap: 15px 20px;
  overflow: hidden;
  flex-wrap: wrap;
  min-height: 100vh;
  max-width: 1600px;
  margin: 0 auto;
  @media (max-width: 991px) {
    padding-right: 10px;
    gap: 15px;
    flex-direction: column;
  }
  @media (max-width: 768px) {
    padding: 8px;
    border-radius: 0;
    gap: 10px;
  }
`;

const MainContent = styled.div`
  align-self: start;
  margin-top: 15px;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 0;
  width: fit-content;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 8px;
    width: 100%;
  }
  @media (max-width: 768px) {
    margin-top: 5px;
  }
`;

const ContentSection = styled.div`
  display: flex;
  margin-top: 25px;
  margin-right: 15px;
  width: 100%;
  max-width: 1400px;
  align-items: end;
  gap: 0px 40px;
  font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
  color: rgba(0, 0, 0, 1);
  font-weight: 600;
  flex-wrap: wrap;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-right: 10px;
    margin-top: 15px;
    flex-direction: column;
    align-items: stretch;
    gap: 15px;
  }
  @media (max-width: 768px) {
    margin: 10px 0 0 0;
    gap: 12px;
  }
`;

const MainGrid = styled.div`
  margin-top: 15px;
  gap: 15px;
  display: flex;
  width: 100%;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 15px;
    max-width: 100%;
    margin-top: 12px;
  }
  @media (max-width: 768px) {
    margin-top: 8px;
    gap: 12px;
  }
`;

const MenuSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  line-height: normal;
  width: 75%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const OrderSection = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  line-height: normal;
  width: 25%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0;
  }
`;

export default Menu;
