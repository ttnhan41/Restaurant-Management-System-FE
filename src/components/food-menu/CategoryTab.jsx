"use client";
import React from "react";
import styled from "styled-components";

function CategoryTabs() {
  return (
    <TabsContainer>
      <CategoryTab active>Khai vị</CategoryTab>
      <CategoryTab>Món chính</CategoryTab>
      <CategoryTab>Đồ uống</CategoryTab>
      <CategoryTab>Tráng miệng</CategoryTab>
    </TabsContainer>
  );
}

const TabsContainer = styled.div`
  align-self: stretch;
  width: 100%;
  display: flex;
  align-items: stretch;
  gap: 0px 20px;
  margin-top: 15px;
  font-size: 16px;
  color: #000000;
  line-height: 1;
  flex-wrap: wrap;
  @media (max-width: 991px) {
    max-width: 100%;
    gap: 12px;
    flex-direction: column;
  }
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const CategoryTab = styled.button`
  border-radius: 18px;
  background-color: ${props => props.active
    ? 'rgba(255, 200, 138, 0.56)'
    : 'rgba(0, 0, 0, 0.42)'};
  padding: 12px 25px;
  color: ${props => props.active ? 'rgba(0, 0, 0, 1)' : 'inherit'};
  text-align: center;
  border: none;
  font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  @media (max-width: 991px) {
    padding: 10px 20px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    padding: 8px 15px;
    font-size: 13px;
    flex: 1;
    min-width: 0;
  }

  &:hover {
    opacity: 0.8;
  }
`;



export default CategoryTabs;
