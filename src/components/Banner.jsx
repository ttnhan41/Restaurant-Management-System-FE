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
          <PrimaryButton>Xem Menu</PrimaryButton>
          <SecondaryButton>Đặt bàn ngay</SecondaryButton>
        </ButtonGroup>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
