import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChefHat, User } from "lucide-react";
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
  UserInfo,
} from "../assets/wrappers/HomePage";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  const fetchCurrentUser = async (token) => {
    try {
      const userResponse = await axios.get("/api/users/current-user", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(userResponse.data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const retrievedToken = localStorage.getItem("token");
    if (retrievedToken) {
      setToken(retrievedToken);
      fetchCurrentUser(retrievedToken);
    }
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
          <NavLink href="/">Trang chủ</NavLink>
          <NavLink href="#">Menu</NavLink>
          <NavLink href="#">Đặt bàn</NavLink>
          {token ? (
            <Navigation>
              <NavLink href="#">Tài khoản</NavLink>
              <NavLink href="#" onClick={handleLogout}>
                Đăng xuất
              </NavLink>
            </Navigation>
          ) : (
            <NavLink href="/login-register">Đăng nhập/Đăng ký</NavLink>
          )}
        </Navigation>

        {token ? (
          <UserInfo>
            <User size={26} color="#2cb1bc" />
            <p>{user.name}</p>
          </UserInfo>
        ) : (
          <></>
        )}

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
          <MobileNavLink href="/">Trang chủ</MobileNavLink>
          <MobileNavLink href="#">Menu</MobileNavLink>
          <MobileNavLink href="#">Đặt bàn</MobileNavLink>
          {token ? (
            <MobileNav>
              <MobileNavLink href="#">Tài khoản</MobileNavLink>
              <MobileNavLink href="#" onClick={handleLogout}>
                Đăng xuất
              </MobileNavLink>
            </MobileNav>
          ) : (
            <MobileNavLink href="/login-register">
              Đăng nhập/Đăng ký
            </MobileNavLink>
          )}
        </MobileNav>
      )}
      <ToastContainer />
    </HeaderContainer>
  );
};

export default Header;
