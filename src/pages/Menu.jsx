import { useState, useMemo, useEffect } from "react";
import {
  FaPlus,
  FaMinus,
  FaShoppingCart,
  FaUtensils,
  FaWineGlass,
  FaCookie,
  FaBreadSlice,
  FaCoffee,
} from "react-icons/fa";
import {
  Container,
  MenuWrapper,
  HeaderSection,
  SearchBar,
  SearchInput,
  SearchIcon,
  FilterTabs,
  FilterTab,
  ContentArea,
  MenuGrid,
  MenuCard,
  MenuImage,
  StatusBadge,
  MenuInfo,
  MenuName,
  MenuCategory,
  MenuPrice,
  RatingContainer,
  StarRating,
  Star,
  RatingText,
  AddButton,
  OrderPanel,
  OrderTitle,
  OrderList,
  OrderItem,
  OrderItemImage,
  OrderItemInfo,
  OrderItemName,
  OrderItemPrice,
  QuantityControls,
  QuantityButton,
  QuantityText,
  OrderSummary,
  TotalRow,
  TotalLabel,
  TotalPrice,
  OrderButton,
  EmptyCart,
} from "../assets/wrappers/MenuPage";
import Header from "../components/Header";
import { toast } from "react-toastify";
import axios from "axios";
import toNonAccentVietnamese from "../utils/toNonAccentVietnamese";
import { useNavigate } from "react-router-dom";

const categories = [
  { id: "All", name: "Tất cả", icon: FaUtensils },
  { id: "Appetizer", name: "Món khai vị", icon: FaBreadSlice },
  { id: "Main", name: "Món chính", icon: FaUtensils },
  { id: "Dessert", name: "Món tráng miệng", icon: FaCookie },
  { id: "Side", name: "Món ăn kèm", icon: FaBreadSlice },
  { id: "Drink", name: "Đồ uống", icon: FaWineGlass },
  { id: "Other", name: "Món khác", icon: FaCoffee },
];

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [token, setToken] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("restaurantCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const navigate = useNavigate();

  useEffect(() => {
    const retrievedToken = localStorage.getItem("token");
    if (retrievedToken) {
      setToken(retrievedToken);
    }
    fetchMenuItems();
  }, []);

  useEffect(() => {
    localStorage.setItem("restaurantCart", JSON.stringify(cart));
  }, [cart]);

  const fetchMenuItems = async () => {
    try {
      const menuItemResponse = await axios.get("/api/menu-items");
      setMenuItems(menuItemResponse.data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const filteredItems = useMemo(() => {
    let filtered = menuItems;

    if (activeFilter !== "All") {
      filtered = filtered.filter((item) => item.type === activeFilter);
    }

    if (searchTerm) {
      filtered = filtered.filter((item) =>
        toNonAccentVietnamese(item.name.toLowerCase()).includes(
          toNonAccentVietnamese(searchTerm.toLowerCase())
        )
      );
    }

    return filtered;
  }, [searchTerm, activeFilter, menuItems]);

  const addToCart = (item) => {
    if (!item.available) return;

    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id, change) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === id) {
            const newQuantity = item.quantity + change;
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} filled={index < Math.floor(rating)} />
    ));
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : categoryId;
  };

  const handleOrder = async () => {
    try {
      const orderItems = cart.map(({ id, quantity }) => ({
        menuItemId: id,
        quantity,
      }));
      const requestData = { items: orderItems };

      await axios.post("/api/orders", requestData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      localStorage.removeItem("restaurantCart");
      alert("Đặt món thành công, vui lòng chờ xác nhận!");
      window.location.href = "/account";
    } catch (error) {
      toast.error(error.response?.data?.message || "Lỗi khi đặt món");
    }
  };

  return (
    <Container>
      <Header />
      <MenuWrapper>
        <HeaderSection>
          <SearchBar>
            <SearchInput
              type="text"
              placeholder="Tìm kiếm món ăn..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchIcon />
          </SearchBar>

          <FilterTabs>
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <FilterTab
                  key={category.id}
                  active={activeFilter === category.id}
                  onClick={() => setActiveFilter(category.id)}
                >
                  <IconComponent />
                  {category.name}
                </FilterTab>
              );
            })}
          </FilterTabs>
        </HeaderSection>

        <ContentArea>
          <MenuGrid>
            {filteredItems.map((item) => (
              <MenuCard key={item.id} unavailable={!item.available}>
                <MenuImage
                  src={item.imageUrl}
                  onClick={() =>
                    navigate(`/menu/${item.id}`, { state: { item } })
                  }
                >
                  <StatusBadge available={item.available}>
                    {item.available ? "Có sẵn" : "Hết món"}
                  </StatusBadge>
                </MenuImage>
                <MenuInfo>
                  <MenuName>{item.name}</MenuName>
                  <MenuCategory>{getCategoryName(item.type)}</MenuCategory>
                  <MenuPrice>{formatPrice(item.price)}</MenuPrice>

                  <RatingContainer>
                    <StarRating>{renderStars(item.averageRating)}</StarRating>
                    <RatingText>
                      {Math.round(item.averageRating * 10) / 10}
                    </RatingText>
                  </RatingContainer>

                  <AddButton
                    disabled={!item.available}
                    onClick={() => addToCart(item)}
                  >
                    <FaPlus />
                    {item.available ? "Thêm vào đơn" : "Hết món"}
                  </AddButton>
                </MenuInfo>
              </MenuCard>
            ))}
          </MenuGrid>

          <OrderPanel>
            <OrderTitle>
              <FaShoppingCart />
              Đơn gọi món ({cart.length})
            </OrderTitle>

            {cart.length === 0 ? (
              <EmptyCart>
                <FaShoppingCart size={48} color="#ccc" />
                <p>Chưa có món nào trong đơn</p>
              </EmptyCart>
            ) : (
              <>
                <OrderList>
                  {cart.map((item) => (
                    <OrderItem key={item.id}>
                      <OrderItemImage src={item.imageUrl} />
                      <OrderItemInfo>
                        <OrderItemName>{item.name}</OrderItemName>
                        <OrderItemPrice>
                          {formatPrice(item.price * item.quantity)}
                        </OrderItemPrice>
                      </OrderItemInfo>
                      <QuantityControls>
                        <QuantityButton
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <FaMinus />
                        </QuantityButton>
                        <QuantityText>{item.quantity}</QuantityText>
                        <QuantityButton
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <FaPlus />
                        </QuantityButton>
                      </QuantityControls>
                    </OrderItem>
                  ))}
                </OrderList>

                <OrderSummary>
                  <TotalRow>
                    <TotalLabel>Tổng cộng:</TotalLabel>
                    <TotalPrice>{formatPrice(getTotalPrice())}</TotalPrice>
                  </TotalRow>
                  <OrderButton
                    disabled={cart.length === 0}
                    onClick={() => {
                      if (!token) {
                        window.location.href = "/login-register";
                      } else {
                        handleOrder();
                      }
                    }}
                  >
                    Đặt món
                  </OrderButton>
                </OrderSummary>
              </>
            )}
          </OrderPanel>
        </ContentArea>
      </MenuWrapper>
    </Container>
  );
};

export default Menu;
