"use client";
import React from "react";
import styled from "styled-components";
import MenuCard from "./MenuCard";

function MenuGrid() {
  const menuItems = [
    {
      id: 1,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/797051c64c97c7d31a09faec4016a3e67112e605?placeholderIfAbsent=true&apiKey=f326aad530e94331bcd0128e6c6ac5b0",
      name: "Basmati Rice",
      status: "In Stock",
      price: "$5.00",
      description: "Comes with a Vegetable Sauce",
      rating: "4.9"
    },
    {
      id: 2,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/797051c64c97c7d31a09faec4016a3e67112e605?placeholderIfAbsent=true&apiKey=f326aad530e94331bcd0128e6c6ac5b0",
      name: "Basmati Rice",
      status: "In Stock",
      price: "$5.00",
      description: "Comes with a Vegetable Sauce",
      rating: "4.9"
    },
    {
      id: 3,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/797051c64c97c7d31a09faec4016a3e67112e605?placeholderIfAbsent=true&apiKey=f326aad530e94331bcd0128e6c6ac5b0",
      name: "Basmati Rice",
      status: "In Stock",
      price: "$5.00",
      description: "Comes with a Vegetable Sauce",
      rating: "4.9"
    },
    {
      id: 4,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/797051c64c97c7d31a09faec4016a3e67112e605?placeholderIfAbsent=true&apiKey=f326aad530e94331bcd0128e6c6ac5b0",
      name: "Basmati Rice",
      status: "In Stock",
      price: "$5.00",
      description: "Comes with a Vegetable Sauce",
      rating: "4.9"
    },
    {
      id: 5,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/797051c64c97c7d31a09faec4016a3e67112e605?placeholderIfAbsent=true&apiKey=f326aad530e94331bcd0128e6c6ac5b0",
      name: "Basmati Rice",
      status: "In Stock",
      price: "$5.00",
      description: "Comes with a Vegetable Sauce",
      rating: "4.9"
    },
    {
      id: 6,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/797051c64c97c7d31a09faec4016a3e67112e605?placeholderIfAbsent=true&apiKey=f326aad530e94331bcd0128e6c6ac5b0",
      name: "Basmati Rice",
      status: "In Stock",
      price: "$5.00",
      description: "Comes with a Vegetable Sauce",
      rating: "4.9"
    }
  ];

  return (
    <MenuContainer>
      <MenuTitle>Chọn món</MenuTitle>
      <MenuRows>
        <MenuRow>
          {menuItems.slice(0, 3).map((item) => (
            <MenuCard key={item.id} {...item} />
          ))}
        </MenuRow>
        <MenuRow>
          {menuItems.slice(3, 6).map((item) => (
            <MenuCard key={item.id} {...item} />
          ))}
        </MenuRow>
      </MenuRows>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  display: flex;
  margin-top: 25px;
  width: 100%;
  flex-direction: column;
  align-items: stretch;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 15px;
  }
  @media (max-width: 768px) {
    margin-top: 12px;
  }
`;

const MenuTitle = styled.h1`
  color: rgba(0, 0, 0, 1);
  font-size: 22px;
  font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.2px;
  align-self: start;
  margin: 0;
  @media (max-width: 991px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const MenuRows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 15px;
  margin-left: 8px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 12px;
    margin-left: 0;
    gap: 15px;
  }
  @media (max-width: 768px) {
    gap: 12px;
    margin-top: 10px;
  }
`;

const MenuRow = styled.div`
  gap: 12px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export default MenuGrid;
