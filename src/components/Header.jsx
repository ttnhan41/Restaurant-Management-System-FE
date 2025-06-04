import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChefHat } from "lucide-react";
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  LogoText,
  Navigation,
  NavLink,
  MobileMenuButton,
  MobileNav,
  MobileNavLink,
} from "../assets/wrappers/HomePage";

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    const retrievedToken = localStorage.getItem("token");
    setToken(retrievedToken);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">
          <Logo>
            <ChefHat size={32} color="#2cb1bc" />
            <LogoText>Savor</LogoText>
          </Logo>
        </Link>

        <Navigation>
          <NavLink href="#">Trang chủ</NavLink>
          <NavLink href="#">Menu</NavLink>
          <NavLink href="#">Đặt bàn</NavLink>
          {token ? (
            <NavLink href="#" onClick={handleLogout}>
              Đăng xuất
            </NavLink>
          ) : (
            <NavLink href="/login-register">Đăng nhập/Đăng ký</NavLink>
          )}
        </Navigation>

        <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </MobileMenuButton>
      </HeaderContent>

      {isMenuOpen && (
        <MobileNav>
          <MobileNavLink href="#">Trang chủ</MobileNavLink>
          <MobileNavLink href="#">Menu</MobileNavLink>
          <MobileNavLink href="#">Đặt bàn</MobileNavLink>
          {token ? (
            <MobileNavLink href="#" onClick={handleLogout}>
              Đăng xuất
            </MobileNavLink>
          ) : (
            <MobileNavLink href="/login-register">
              Đăng nhập/Đăng ký
            </MobileNavLink>
          )}
        </MobileNav>
      )}
    </HeaderContainer>
  );
};

export default Header;
