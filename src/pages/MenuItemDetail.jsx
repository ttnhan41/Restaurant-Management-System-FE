import { useState, useEffect } from "react";
import {
  FaPlus,
  FaMinus,
  FaShoppingCart,
  FaArrowLeft,
  FaUser,
  FaCalendarAlt,
  FaThumbsUp,
  FaThumbsDown,
} from "react-icons/fa";
import {
  Container,
  DetailWrapper,
  BackButton,
  ContentArea,
  MainContent,
  ItemDetailCard,
  ItemImage,
  StatusBadge,
  ItemInfo,
  ItemHeader,
  ItemTitle,
  ItemPrice,
  CategoryTag,
  RatingContainer,
  StarRating,
  Star,
  RatingText,
  ReviewCount,
  ItemDescription,
  ActionArea,
  QuantityControls,
  QuantityButton,
  QuantityText,
  AddToCartButton,
  ReviewSection,
  SectionTitle,
  ReviewForm,
  FormGroup,
  Label,
  RatingInput,
  RatingInputStar,
  TextArea,
  SubmitButton,
  ReviewList,
  ReviewCard,
  ReviewHeader,
  ReviewerInfo,
  ReviewerAvatar,
  ReviewerDetails,
  ReviewerName,
  ReviewDate,
  ReviewActions,
  LikeButton,
  ReviewText,
  CartPanel,
  CartTitle,
  CartEmpty,
} from "../assets/wrappers/MenuItemDetailPage";
import Header from "../components/Header";
import { toast } from "react-toastify";
import axios from "axios";
import { useLocation } from "react-router-dom";
import moment from "moment";

const MenuItemDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("restaurantCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const location = useLocation();
  const [menuItem, setMenuItem] = useState(location.state?.item || {});
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    const retrievedToken = localStorage.getItem("token");
    if (retrievedToken) {
      setToken(retrievedToken);
    }
    fetchItemReviews();
  }, []);

  useEffect(() => {
    localStorage.setItem("restaurantCart", JSON.stringify(cart));
  }, [cart]);

  const fetchItemReviews = async () => {
    try {
      const reviewResponse = await axios.get(
        `/api/reviews/menu-items/${menuItem.id}`
      );
      setReviews(reviewResponse.data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStars = (rating, interactive = false, onStarClick = null) => {
    return Array.from({ length: 5 }, (_, index) => {
      if (interactive) {
        return (
          <RatingInputStar
            key={index}
            active={index < rating}
            onClick={() => onStarClick && onStarClick(index + 1)}
          />
        );
      }
      return <Star key={index} filled={index < Math.floor(rating)} />;
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const addToCart = () => {
    if (!menuItem.available || quantity <= 0) return;

    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.id === menuItem.id
      );
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === menuItem.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      } else {
        return [...prevCart, { ...menuItem, quantity }];
      }
    });

    setQuantity(1);
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (reviewRating === 0 || reviewText.trim() === "") {
      return;
    }

    try {
      const requestData = {
        menuItemId: menuItem.id,
        rating: reviewRating,
        comment: reviewText.trim(),
      };
      const response = await axios.post("/api/reviews", requestData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const newReview = {
        ...response.data,
        likes: 0,
        liked: false,
      };

      setReviews([newReview, ...reviews]);
      setReviewRating(0);
      setReviewText("");
      toast.success("Gửi đánh giá thành công!");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Lỗi khi gửi đánh giá");
    }
  };

  const toggleLike = (reviewId) => {
    setReviews(
      reviews.map((review) => {
        if (review.id === reviewId) {
          return {
            ...review,
            liked: !review.liked,
            likes: review.liked ? review.likes - 1 : review.likes + 1,
          };
        }
        return review;
      })
    );
  };

  const getTotalCartItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Container>
      <Header />
      <DetailWrapper>
        <BackButton onClick={() => window.history.back()}>
          <FaArrowLeft />
          Quay lại menu
        </BackButton>

        <ContentArea>
          <MainContent>
            <ItemDetailCard>
              <ItemImage src={menuItem.imageUrl}>
                <StatusBadge available={menuItem.available}>
                  {menuItem.available ? "Có sẵn" : "Hết món"}
                </StatusBadge>
              </ItemImage>

              <ItemInfo>
                <ItemHeader>
                  <ItemTitle>{menuItem.name}</ItemTitle>
                  <ItemPrice>{formatPrice(menuItem.price)}</ItemPrice>
                </ItemHeader>

                <CategoryTag>
                  {menuItem.type === "Appetizer"
                    ? "Món khai vị"
                    : menuItem.type === "Main"
                    ? "Món chính"
                    : menuItem.type === "Dessert"
                    ? "Món tráng miệng"
                    : menuItem.type === "Side"
                    ? "Món ăn kèm"
                    : menuItem.type === "Drink"
                    ? "Đồ uống"
                    : "Món khác"}
                </CategoryTag>

                <RatingContainer>
                  <StarRating>{renderStars(menuItem.averageRating)}</StarRating>
                  <RatingText>
                    {Math.round(menuItem.averageRating * 10) / 10}
                  </RatingText>
                  {/* <ReviewCount>({menuItem.reviewCount} đánh giá)</ReviewCount> */}
                </RatingContainer>

                <ItemDescription>{menuItem.description}</ItemDescription>

                <ActionArea>
                  <QuantityControls>
                    <QuantityButton
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <FaMinus />
                    </QuantityButton>
                    <QuantityText>{quantity}</QuantityText>
                    <QuantityButton onClick={() => setQuantity(quantity + 1)}>
                      <FaPlus />
                    </QuantityButton>
                  </QuantityControls>

                  <AddToCartButton
                    disabled={!menuItem.available}
                    onClick={addToCart}
                  >
                    <FaShoppingCart />
                    {menuItem.available ? "Thêm vào đơn" : "Hết món"}
                  </AddToCartButton>
                </ActionArea>
              </ItemInfo>
            </ItemDetailCard>

            <ReviewSection>
              <SectionTitle>Đánh giá món ăn</SectionTitle>

              {token ? (
                <ReviewForm onSubmit={handleReviewSubmit}>
                  <FormGroup>
                    <Label>Đánh giá của bạn</Label>
                    <RatingInput>
                      {renderStars(reviewRating, true, setReviewRating)}
                    </RatingInput>
                  </FormGroup>

                  <FormGroup>
                    <Label>Nhận xét</Label>
                    <TextArea
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      placeholder="Chia sẻ trải nghiệm của bạn về món ăn này..."
                      required
                    />
                  </FormGroup>

                  <SubmitButton
                    type="submit"
                    disabled={reviewRating === 0 || reviewText.trim() === ""}
                  >
                    Gửi đánh giá
                  </SubmitButton>
                </ReviewForm>
              ) : (
                <p style={{ fontSize: "18px", marginBottom: "20px" }}>
                  Hãy{" "}
                  <a href="/login-register" style={{ color: "blue" }}>
                    đăng nhập
                  </a>{" "}
                  để có thể gửi đánh giá.
                </p>
              )}

              <ReviewList>
                {reviews.map((review) => (
                  <ReviewCard key={review.id}>
                    <ReviewHeader>
                      <ReviewerInfo>
                        <ReviewerAvatar>
                          <FaUser />
                        </ReviewerAvatar>
                        <ReviewerDetails>
                          <ReviewerName>{review.userName}</ReviewerName>
                          <ReviewDate>
                            <FaCalendarAlt style={{ marginRight: "5px" }} />
                            <p>
                              {moment(review.createdAt).format(
                                "DD/MM/YYYY, h:mm a"
                              )}
                            </p>
                          </ReviewDate>
                        </ReviewerDetails>
                      </ReviewerInfo>
                      <ReviewActions>
                        <StarRating>{renderStars(review.rating)}</StarRating>
                      </ReviewActions>
                    </ReviewHeader>

                    <ReviewText>{review.comment}</ReviewText>

                    <ReviewActions>
                      <LikeButton
                        className={review.liked ? "active" : ""}
                        onClick={() => toggleLike(review.id)}
                      >
                        <FaThumbsUp />
                        {/* {review.likes} */}
                      </LikeButton>
                    </ReviewActions>
                  </ReviewCard>
                ))}
              </ReviewList>
            </ReviewSection>
          </MainContent>

          <CartPanel>
            <CartTitle>
              <FaShoppingCart />
              Đơn gọi món ({getTotalCartItems()})
            </CartTitle>

            {cart.length === 0 ? (
              <CartEmpty>
                <FaShoppingCart size={48} color="#ccc" />
                <p>Chưa có món nào trong đơn</p>
              </CartEmpty>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    marginBottom: "15px",
                    textAlign: "center",
                    fontSize: "18px",
                  }}
                >
                  <strong>Tổng cộng: {formatPrice(getTotalPrice())}</strong>
                </div>
                <AddToCartButton onClick={() => window.history.back()}>
                  Xem đơn
                </AddToCartButton>
              </div>
            )}
          </CartPanel>
        </ContentArea>
      </DetailWrapper>
    </Container>
  );
};

export default MenuItemDetail;
