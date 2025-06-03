import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 300px;
  margin: 2rem auto;
`;

const StyledLink = styled(Link)`
  padding: 1rem 2rem;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  text-align: center;
  font-weight: bold;
  
  &:hover {
    background-color: #45a049;
  }
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
`;

const Home = () => {
  return (
    <div>
      <Title>Nhà Hàng ABC</Title>
      <NavContainer>
        <StyledLink to="/menu">Xem Menu</StyledLink>
        <StyledLink to="/reservation">Đặt Bàn</StyledLink>
        <StyledLink to="/manager">Quản Lý</StyledLink>
        <StyledLink to="/account">Tài Khoản</StyledLink>
      </NavContainer>
    </div>
  );
};

export default Home;
