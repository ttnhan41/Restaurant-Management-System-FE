"use client";
import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <SearchSection>
        <SearchIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/b85fe62eed95f662a4aa906dee489690ac95d584?placeholderIfAbsent=true&apiKey=f326aad530e94331bcd0128e6c6ac5b0" alt="Search" />
        <SearchInput placeholder="Search..." />
      </SearchSection>
      <ProfileSection>
        <NotificationIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/76891d50a8c6b83070d4dde5aae6f3e8977446d1?placeholderIfAbsent=true&apiKey=f326aad530e94331bcd0128e6c6ac5b0" alt="Notifications" />
        <ProfileAvatar src="https://cdn.builder.io/api/v1/image/assets/TEMP/0185b5366be93bc37e37da7a0f84048e847a8978?placeholderIfAbsent=true&apiKey=f326aad530e94331bcd0128e6c6ac5b0" alt="Profile" />
      </ProfileSection>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  margin-right: 15px;
  width: 100%;
  max-width: 1400px;
  align-items: start;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-right: 8px;
    gap: 12px;
  }
  @media (max-width: 768px) {
    margin-right: 0;
    gap: 8px;
    flex-direction: column;
    align-items: stretch;
  }
`;

const SearchSection = styled.div`
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
  display: flex;
  padding: 8px 25px;
  align-items: stretch;
  gap: 8px;
  font-family: Montserrat, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  color: rgba(166, 172, 190, 1);
  font-weight: 500;
  white-space: nowrap;
  letter-spacing: 0.15px;
  line-height: 1;
  flex-wrap: wrap;
  flex: 1;
  max-width: 400px;
  @media (max-width: 991px) {
    padding: 8px 15px;
    white-space: initial;
    font-size: 14px;
    max-width: none;
  }
  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 14px;
    gap: 6px;
  }
`;

const SearchIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  border-radius: 8px;
  flex-shrink: 0;
  @media (max-width: 768px) {
    width: 18px;
  }
`;

const SearchInput = styled.input`
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  outline: none;
  @media (max-width: 991px) {
    max-width: 100%;
  }

  &::placeholder {
    color: rgba(166, 172, 190, 1);
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: stretch;
  gap: 15px;
  @media (max-width: 768px) {
    gap: 12px;
    justify-content: center;
  }
`;

const NotificationIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 28px;
  margin: auto 0;
  @media (max-width: 768px) {
    width: 24px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const ProfileAvatar = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 35px;
  border-radius: 50%;
  flex-shrink: 0;
  @media (max-width: 768px) {
    width: 30px;
  }
`;

export default Header;
