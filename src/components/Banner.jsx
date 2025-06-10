import { useNavigate } from "react-router-dom";
import {
  BannerContainer,
  BannerOverlay,
  BannerContent,
  BannerTitle,
  BannerDescription,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
} from "../assets/wrappers/HomePage";

// Banner Component
const Banner = () => {
  const navigate = useNavigate();

  return (
    <BannerContainer>
      <BannerOverlay />
      <BannerContent>
        <BannerTitle>Trải nghiệm ẩm thực đỉnh cao</BannerTitle>
        <BannerDescription>
          Khám phá hương vị tuyệt vời từ những món ăn được chế biến tỉ mỉ bởi
          đầu bếp chuyên nghiệp
        </BannerDescription>
        <ButtonGroup>
          <PrimaryButton onClick={() => navigate("/menu")}>
            Xem Menu
          </PrimaryButton>
          <SecondaryButton onClick={() => navigate("/reservation")}>
            Đặt bàn ngay
          </SecondaryButton>
        </ButtonGroup>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
