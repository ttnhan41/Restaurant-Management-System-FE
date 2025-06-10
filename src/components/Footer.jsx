import {
  FooterContainer,
  FooterContent,
  FooterGrid,
  FooterSection,
  FooterLogo,
  FooterLogoText,
  FooterDescription,
  FooterTitle,
  ContactItem,
  ContactText,
  FooterLinks,
  FooterLink,
  Copyright,
} from "../assets/wrappers/HomePage";
import { ChefHat, MapPin, Phone, Mail, Clock } from "lucide-react";

// Footer Component
const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <FooterLogo>
              <ChefHat size={32} color="#2cb1bc" />
              <FooterLogoText>Foodive Hero</FooterLogoText>
            </FooterLogo>
            <FooterDescription>
              Nhà hàng Foodive Hero - Nơi hội tụ tinh hoa ẩm thực, mang đến trải
              nghiệm ăn uống đáng nhớ cho mọi thực khách.
            </FooterDescription>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Thông tin liên lạc</FooterTitle>
            <div>
              <ContactItem>
                <MapPin size={20} color="#2cb1bc" />
                <ContactText>123 Nguyễn Văn A, Quận 1, TP.HCM</ContactText>
              </ContactItem>
              <ContactItem>
                <Phone size={20} color="#2cb1bc" />
                <ContactText>0123 456 789</ContactText>
              </ContactItem>
              <ContactItem>
                <Mail size={20} color="#2cb1bc" />
                <ContactText>info@foodivehero.com</ContactText>
              </ContactItem>
              <ContactItem>
                <Clock size={20} color="#2cb1bc" />
                <ContactText>10:00 - 22:00 (Hàng ngày)</ContactText>
              </ContactItem>
            </div>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Menu nhanh</FooterTitle>
            <FooterLinks>
              <FooterLink href="/">Trang chủ</FooterLink>
              <FooterLink href="/menu">Thực đơn</FooterLink>
              <FooterLink href="/reservation">Đặt bàn</FooterLink>
              <FooterLink href="#">Liên hệ</FooterLink>
              <FooterLink href="#">Về chúng tôi</FooterLink>
            </FooterLinks>
          </FooterSection>
        </FooterGrid>

        <Copyright>
          <p>© 2025 Nhà hàng Foodive Hero. Tất cả quyền được bảo lưu.</p>
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
