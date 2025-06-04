import { Star, Users, Award, Heart } from "lucide-react";
import {
  FeaturesContainer,
  FeaturesContent,
  FeaturesHeader,
  FeaturesTitle,
  FeaturesDescription,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
} from "../assets/wrappers/HomePage";

// Features Component
const Features = () => {
  const features = [
    {
      icon: <Award size={48} color="#2cb1bc" />,
      title: "Chất lượng đỉnh cao",
      description:
        "Sử dụng nguyên liệu tươi ngon nhất được chọn lọc kỹ càng từ các nhà cung cấp uy tín",
    },
    {
      icon: <Users size={48} color="#2cb1bc" />,
      title: "Đội ngũ chuyên nghiệp",
      description:
        "Đầu bếp và nhân viên phục vụ được đào tạo chuyên nghiệp, tận tâm với nghề",
    },
    {
      icon: <Heart size={48} color="#2cb1bc" />,
      title: "Không gian ấm cúng",
      description:
        "Thiết kế nội thất sang trọng, tạo không gian ấm cúng cho mọi bữa ăn",
    },
    {
      icon: <Star size={48} color="#2cb1bc" />,
      title: "Đánh giá 5 sao",
      description:
        "Được khách hàng tin tưởng và đánh giá cao về chất lượng phục vụ",
    },
  ];

  return (
    <FeaturesContainer>
      <FeaturesContent>
        <FeaturesHeader>
          <FeaturesTitle>Tại sao chọn chúng tôi?</FeaturesTitle>
          <FeaturesDescription>
            Những đặc điểm nổi bật làm nên sự khác biệt của nhà hàng chúng tôi
          </FeaturesDescription>
        </FeaturesHeader>

        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </FeaturesContent>
    </FeaturesContainer>
  );
};

export default Features;
