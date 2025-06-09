"use client";
import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <LeftSection>
        <LogoSection>
          <LogoIcon>
            <svg
              width="40"
              height="40"
              viewBox="0 0 81 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_117_351)">
                <rect
                  x="0.0444336"
                  y="0.758423"
                  width="80.1778"
                  height="80.1778"
                  rx="12.5278"
                  fill="#FF8906"
                  fillOpacity="0.7"
                />
                <path
                  d="M59.6992 55.1666C59.6992 61.7349 46.3471 67.0655 29.8731 67.0655C13.4016 67.0655 0.0444336 61.7349 0.0444336 55.1666C0.0444336 48.5895 13.4016 43.2627 29.8731 43.2627C46.3471 43.2627 59.6992 48.5895 59.6992 55.1666Z"
                  fill="#A6A8AB"
                />
                <path
                  d="M49.9326 68.8644C66.4051 68.8644 79.7587 63.5371 79.7587 56.9655C79.7587 50.394 66.4051 45.0667 49.9326 45.0667C33.4601 45.0667 20.1064 50.394 20.1064 56.9655C20.1064 63.5371 33.4601 68.8644 49.9326 68.8644Z"
                  fill="#A6A8AB"
                />
              </g>
              <defs>
                <clipPath id="clip0_117_351">
                  <rect
                    x="0.0444336"
                    y="0.758423"
                    width="80.1778"
                    height="80.1778"
                    rx="12.5278"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
          </LogoIcon>
          <LogoText>C</LogoText>
        </LogoSection>
    
        <SearchBar>
          <SearchContent>
            <SearchIcon>
              <svg
                width="30"
                height="30"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_117_374)">
                  <path
                    d="M24.1485 21.6922H22.9263L22.4931 21.2745C24.0092 19.5108 24.922 17.221 24.922 14.7302C24.922 9.17605 20.4199 4.67395 14.8658 4.67395C9.31167 4.67395 4.80957 9.17605 4.80957 14.7302C4.80957 20.2843 9.31167 24.7864 14.8658 24.7864C17.3567 24.7864 19.6464 23.8736 21.4101 22.3575L21.8278 22.7906V24.0129L29.5634 31.733L31.8686 29.4278L24.1485 21.6922ZM14.8658 21.6922C11.0135 21.6922 7.9038 18.5825 7.9038 14.7302C7.9038 10.8779 11.0135 7.76818 14.8658 7.76818C18.7181 7.76818 21.8278 10.8779 21.8278 14.7302C21.8278 18.5825 18.7181 21.6922 14.8658 21.6922Z"
                    fill="#C9CED6"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_117_374">
                    <rect
                      x="0.167725"
                      y="0.0325928"
                      width="37.1307"
                      height="37.1307"
                      rx="14.4348"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </SearchIcon>
            <SearchText>Search...</SearchText>
          </SearchContent>
        </SearchBar>
      </LeftSection>

      <RightSection>
        <OrderText>Order</OrderText>

        <NotificationIcon>
          <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.7668 15.0074C33.7668 12.0222 32.581 9.15933 30.4701 7.04851C28.3593 4.93768 25.4964 3.75183 22.5113 3.75183C19.5261 3.75183 16.6632 4.93768 14.5524 7.04851C12.4416 9.15933 11.2557 12.0222 11.2557 15.0074C11.2557 28.1389 5.62793 31.8907 5.62793 31.8907H39.3946C39.3946 31.8907 33.7668 28.1389 33.7668 15.0074Z"
              stroke="black"
              strokeWidth="3.75185"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25.7568 39.3944C25.427 39.963 24.9536 40.4349 24.3841 40.763C23.8145 41.091 23.1687 41.2637 22.5115 41.2637C21.8542 41.2637 21.2084 41.091 20.6389 40.763C20.0693 40.4349 19.5959 39.963 19.2661 39.3944"
              stroke="black"
              strokeWidth="3.75185"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="33.7669" cy="7.50375" r="5.62778" fill="#D50C18" />
          </svg>
        </NotificationIcon>

        <ProfileAvatar>
          <svg
            width="30"
            height="30"
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="26.9347" cy="26.9347" r="26.9347" fill="#D9D9D9" />
          </svg>
        </ProfileAvatar>
      </RightSection>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(231, 231, 231, 0.45);
  @media (max-width: 991px) {
    padding: 0 15px;
    height: 80px;
  }
  @media (max-width: 640px) {
    flex-wrap: wrap;
    height: auto;
    padding: 10px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 30px; 
`;

const LogoSection = styled.div`
  width: 30px;
  height: 30px;
  align-items: center;
  position: relative;
  @media (max-width: 991px) {
    width: 60px;
    height: 60px;
  }
`;

const LogoIcon = styled.div`
  width: 30px;
  height: 30px;
  align-items: center;
  position: absolute;
  left: 0;
  top: 1px;
  @media (max-width: 991px) {
    width: 60px;
    height: 60px;
  }
`;

const LogoText = styled.h1`
  color: #fff;
  font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 900;
  line-height: 34px;
  letter-spacing: 4.259px;
  position: absolute;
  left: 24px;
  top: 0;
  width: 20px;
  height: 25px;
  margin: 0;
  @media (max-width: 991px) {
    font-size: 32px;
    left: 18px;
  }
`;

const SearchBar = styled.div`
  width: 500px;
  height: 30px;
  position: relative;
  border-radius: 14.435px;
  margin-left: 73px;
  box-shadow: 0px 0px 1.019px 0px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  @media (max-width: 991px) {
    width: 400px;
    margin-left: 20px;
  }
  @media (max-width: 640px) {
    width: 100%;
    order: 3;
    margin: 10px 0 0 0;
  }
`;

const SearchBase = styled.div`
  width: 683px;
  height: 40px;
  border-radius: 14.435px;
  box-shadow: 0px 0px 1.019px 0px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  @media (max-width: 991px) {
    width: 400px;
  }
  @media (max-width: 640px) {
    width: 100%;
  }
`;

const SearchContent = styled.div`
  width: 154px;
  height: 30px;
  display: flex;
  align-items: center;
`;

const SearchIcon = styled.div`
  width: 30px;
  padding-left: 10px;
  height:28px;
  position: relative;
`;

const SearchText = styled.span`
  width: 105px;
  color: #a6acbe;
  font-family: Montserrat, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 34px;
  letter-spacing: 0.248px;
  margin-left: 10px;
`;

const OrderText = styled.span`
  width: auto;
  height: 20px;
  color: #4b4b4b;
  text-align: center;
  font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 300;
  line-height: 17px;

  @media (max-width: 991px) {
    font-size: 20px;
    margin-right: 10px;
  }
`;

const NotificationIcon = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 45.256px;
  border-radius: 12.528px;
  width: 30px;
  height: 30px;
  @media (max-width: 991px) {
    margin-right: 20px;
  }
`;

const ProfileAvatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 53.869px;
  background: url(<path-to-image>) lightgray 50% / cover no-repeat, #d9d9d9;
`;

export default Header;
