import styled from "styled-components";

// Main Container
export const AppContainer = styled.main`
  min-height: 100vh;
`;

// Header Styles
export const HeaderContainer = styled.header`
  background-color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 50;
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #0a6c74;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: #374151;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #2cb1bc;
  }
`;

export const LoginButton = styled.button`
  background-color: #2cb1bc;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: background-color 0.3s ease;
  cursor: pointer;
  border: none;
  text-decoration: none;

  &:hover {
    background-color: #239ba3;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  color: #374151;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileNav = styled.div`
  padding: 1rem 0;
  border-top: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const MobileNavLink = styled.a`
  color: #374151;
  text-decoration: none;
  padding: 0.5rem 0;
  cursor: pointer;

  &:hover {
    color: #2cb1bc;
  }
`;

export const MobileLoginButton = styled(LoginButton)`
  text-align: center;
  width: 100%;
  margin-top: 0.5rem;
`;

// Banner Styles
export const BannerContainer = styled.section`
  position: relative;
  background: linear-gradient(to right, #2cb1bc, #239ba3);
  color: white;
  padding: 5rem 0;
  text-align: center;
`;

export const BannerOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const BannerContent = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const BannerTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const BannerDescription = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 48rem;
  margin: 0 auto 2rem auto;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PrimaryButton = styled.button`
  background-color: white;
  color: #2cb1bc;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  transform: scale(1);

  &:hover {
    background-color: #f3f4f6;
    transform: scale(1.05);
  }
`;

export const SecondaryButton = styled.button`
  border: 2px solid white;
  color: white;
  background-color: transparent;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: scale(1);

  &:hover {
    background-color: white;
    color: #2cb1bc;
    transform: scale(1.05);
  }
`;

// Features Styles
export const FeaturesContainer = styled.section`
  padding: 5rem 0;
  background-color: #f9fafb;
`;

export const FeaturesContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const FeaturesHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const FeaturesTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1rem;
`;

export const FeaturesDescription = styled.p`
  font-size: 1.25rem;
  color: #6b7280;
  max-width: 32rem;
  margin: 0 auto;
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

export const FeatureCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    transform: translateY(-8px);
  }
`;

export const FeatureIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.75rem;
`;

export const FeatureDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
`;

// Footer Styles
export const FooterContainer = styled.footer`
  background-color: #1f2937;
  color: white;
  padding: 3rem 0;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

export const FooterSection = styled.div`
  margin-bottom: 2rem;
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const FooterLogoText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const FooterDescription = styled.p`
  color: #d1d5db;
  line-height: 1.6;
`;

export const FooterTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`;

export const ContactText = styled.span`
  color: #d1d5db;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FooterLink = styled.a`
  color: #d1d5db;
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #2cb1bc;
  }
`;

export const Copyright = styled.div`
  border-top: 1px solid #374151;
  margin-top: 2rem;
  padding-top: 2rem;
  text-align: center;
  color: #9ca3af;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
`;
