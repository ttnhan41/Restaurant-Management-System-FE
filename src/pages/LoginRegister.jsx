import { useState } from "react";
import { Eye, EyeOff, Mail, User } from "lucide-react";
import {
  Container,
  AuthCard,
  LeftPanel,
  RightPanel,
  Logo,
  WelcomeText,
  SubText,
  FoodIcon,
  FormTitle,
  InputGroup,
  InputWrapper,
  Input,
  IconWrapper,
  Button,
  SocialButton,
  LinkText,
  ToggleText,
  ErrorText,
  DividerText,
  ForgotPasswordWrapper,
} from "../assets/wrappers/LoginRegister";
import { FaFacebook } from "react-icons/fa";

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!isLogin && !formData.name.trim()) {
      newErrors.name = "Tên không được để trống";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email không được để trống";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Mật khẩu không được để trống";
    } else if (formData.password.length < 6) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Mật khẩu xác nhận không khớp";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Handle form submission here
      alert(`${isLogin ? "Đăng nhập" : "Đăng ký"} thành công!`);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Đăng nhập với ${provider}`);
    alert(`Đăng nhập với ${provider}`);
  };

  const handleForgotPassword = () => {
    console.log("Quên mật khẩu");
    alert("Chức năng quên mật khẩu sẽ được triển khai");
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({ name: "", email: "", password: "" });
    setErrors({});
    setShowPassword(false);
  };

  return (
    <Container>
      <AuthCard>
        <LeftPanel>
          <FoodIcon>🍽️</FoodIcon>
          <Logo>Savor</Logo>
          <WelcomeText>
            {isLogin ? "Chào mừng trở lại!" : "Tham gia cùng chúng tôi!"}
          </WelcomeText>
          <SubText>
            {isLogin
              ? "Đăng nhập để khám phá những món ăn tuyệt vời và trải nghiệm ẩm thực đỉnh cao"
              : "Tạo tài khoản để bắt đầu hành trình ẩm thực tuyệt vời cùng chúng tôi"}
          </SubText>
        </LeftPanel>

        <RightPanel>
          <FormTitle>{isLogin ? "Đăng Nhập" : "Đăng Ký"}</FormTitle>

          <div>
            {!isLogin && (
              <InputGroup>
                <InputWrapper>
                  <Input
                    type="text"
                    placeholder="Họ và tên"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    $hasError={!!errors.name}
                  />
                  <IconWrapper>
                    <User size={20} />
                  </IconWrapper>
                </InputWrapper>
                {errors.name && <ErrorText>{errors.name}</ErrorText>}
              </InputGroup>
            )}

            <InputGroup>
              <InputWrapper>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  $hasError={!!errors.email}
                />
                <IconWrapper>
                  <Mail size={20} />
                </IconWrapper>
              </InputWrapper>
              {errors.email && <ErrorText>{errors.email}</ErrorText>}
            </InputGroup>

            <InputGroup>
              <InputWrapper>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Mật khẩu"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  $hasError={!!errors.password}
                />
                <IconWrapper
                  $clickable
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </IconWrapper>
              </InputWrapper>
              {errors.password && <ErrorText>{errors.password}</ErrorText>}
            </InputGroup>

            {!isLogin && (
              <InputGroup>
                <InputWrapper>
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Xác nhận mật khẩu"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      handleInputChange("confirmPassword", e.target.value)
                    }
                    $hasError={!!errors.confirmPassword}
                  />
                  <IconWrapper
                    $clickable
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </IconWrapper>
                </InputWrapper>
                {errors.confirmPassword && (
                  <ErrorText>{errors.confirmPassword}</ErrorText>
                )}
              </InputGroup>
            )}

            {isLogin && (
              <ForgotPasswordWrapper>
                <LinkText onClick={handleForgotPassword}>
                  Quên mật khẩu?
                </LinkText>
              </ForgotPasswordWrapper>
            )}

            <Button onClick={handleSubmit}>
              {isLogin ? "Đăng Nhập" : "Đăng Ký"}
            </Button>
          </div>

          <DividerText>hoặc</DividerText>

          <SocialButton
            className="facebook"
            onClick={() => handleSocialLogin("Facebook")}
          >
            <FaFacebook size={20} color="#1877f2" />
            <span>Tiếp tục với Facebook</span>
          </SocialButton>

          <SocialButton onClick={() => handleSocialLogin("Google")}>
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path
                fill="#4285f4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34a853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#fbbc05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#ea4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span style={{ color: "#374151" }}>Tiếp tục với Google</span>
          </SocialButton>

          <ToggleText>
            {isLogin ? (
              <>
                Chưa có tài khoản?{" "}
                <LinkText onClick={toggleMode}>Đăng ký ngay</LinkText>
              </>
            ) : (
              <>
                Đã có tài khoản?{" "}
                <LinkText onClick={toggleMode}>Đăng nhập</LinkText>
              </>
            )}
          </ToggleText>
        </RightPanel>
      </AuthCard>
    </Container>
  );
};

export default LoginRegister;
