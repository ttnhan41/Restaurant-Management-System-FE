"use client";
import React from "react";
import styled from "styled-components";

function LeftNavigation() {
  return (
    <NavigationContainer>
      <LogoImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/da21655b12f4bd97d41fe794f79cd31cd55fc78b?placeholderIfAbsent=true&apiKey=f326aad530e94331bcd0128e6c6ac5b0" alt="Logo" />
      <HomeIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/38253fdd68540724559960b89a15ce5df46eb519?placeholderIfAbsent=true&apiKey=f326aad530e94331bcd0128e6c6ac5b0" alt="Home icon" />
      <HomeLabel>Home</HomeLabel>
      <MenuIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8e63938e4aee95854522a29b8023ab001d7e5a1?placeholderIfAbsent=true&apiKey=f326aad530e94331bcd0128e6c6ac5b0" alt="Menu icon" />
      <OrderIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/b25193c24f79d080dd0a3df05b3ccd4036fee056?placeholderIfAbsent=true&apiKey=f326aad530e94331bcd0128e6c6ac5b0" alt="Order icon" />
      <OrderLabel>Order</OrderLabel>
    </NavigationContainer>
  );
}

const NavigationContainer = styled.nav`
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  padding: 8px 6px 300px 6px;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  color: #000000;
  font-weight: 400;
  white-space: nowrap;
  line-height: 1;
  width: 60px;
  max-width: 100%;
  @media (max-width: 991px) {
    padding-bottom: 50px;
    display: none;
    white-space: initial;
  }
`;

const LogoImage = styled.img`
  aspect-ratio: 0.99;
  object-fit: contain;
  object-position: center;
  width: 50px;
  border-radius: 8px;
`;

const HomeIcon = styled.img`
  aspect-ratio: 1.03;
  object-fit: contain;
  object-position: center;
  width: 24px;
  margin-top: 40px;
  @media (max-width: 991px) {
    margin-top: 25px;
  }
`;

const HomeLabel = styled.div`
  margin-top: 6px;
`;

const MenuIcon = styled.img`
  aspect-ratio: 1.03;
  object-fit: contain;
  object-position: center;
  width: 100%;
  border-radius: 6px;
  align-self: stretch;
  margin-top: 35px;
  @media (max-width: 991px) {
    margin-top: 25px;
  }
`;

const OrderIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 30px;
  margin-top: 35px;
  @media (max-width: 991px) {
    margin-top: 25px;
  }
`;

const OrderLabel = styled.div`
  margin-top: 6px;
`;

export default LeftNavigation;
