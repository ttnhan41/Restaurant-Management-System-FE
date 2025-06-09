import { useState, useEffect } from "react";
import {
  FaUser,
  FaEdit,
  FaSave,
  FaTimes,
  FaCalendarAlt,
  FaClock,
  FaUtensils,
  FaTable,
} from "react-icons/fa";
import Header from "../components/Header";
import {
  Container,
  AccountWrapper,
  HeaderSection,
  UserInfo,
  Avatar,
  UserDetails,
  UserName,
  UserEmail,
  EditButton,
  InfoGrid,
  InfoField,
  Label,
  Input,
  ActionButtons,
  SaveButton,
  CancelButton,
  ContentSection,
  TabSection,
  ScrollableContent,
  TabTitle,
  OrderCard,
  OrderHeader,
  OrderDate,
  StatusBadge,
  OrderItems,
  OrderItem,
  ItemName,
  ItemPrice,
  TotalPrice,
  ReservationCard,
  ReservationInfo,
  ReservationDetail,
} from "../assets/wrappers/AccountPage";
import { toast } from "react-toastify";
import axios from "axios";
import moment from "moment";

const Account = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const retrievedToken = localStorage.getItem("token");
    if (retrievedToken) {
      setToken(retrievedToken);
      fetchCurrentUser(retrievedToken);
      fetchUserOrders(retrievedToken);
      fetchUserReservations(retrievedToken);
    }
  }, []);

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

  const fetchUserOrders = async (token) => {
    try {
      const orderResponse = await axios.get("/api/orders", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(orderResponse.data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const fetchUserReservations = async (token) => {
    try {
      const reservationResponse = await axios.get("/api/reservations", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setReservations(reservationResponse.data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const [editInfo, setEditInfo] = useState({ ...user });

  const getStatusText = (status) => {
    const statusMap = {
      PENDING: "Chờ xác nhận",
      PREPARING: "Đang chuẩn bị",
      READY: "Sẵn sàng",
      SERVED: "Đã giao",
      CANCELLED: "Đã hủy",
      CONFIRMED: "Đã xác nhận",
    };
    return statusMap[status] || status;
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditInfo({ ...user });
  };

  const handleSave = async () => {
    try {
      await axios.put("/api/users/update", editInfo, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUser({ ...editInfo });
      setIsEditing(false);
      toast.success("Cập nhật thông tin cá nhân thành công!");
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Có lỗi xảy ra khi lưu dữ liệu"
      );
    }
  };

  const handleCancel = () => {
    setEditInfo({ ...user });
    setIsEditing(false);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const sortedOrders = [...orders].sort(
    (a, b) => new Date(b.orderTime) - new Date(a.orderTime)
  );

  const sortedReservations = [...reservations].sort(
    (a, b) => new Date(b.reservationTime) - new Date(a.reservationTime)
  );

  if (!token) {
    return <h5>Bạn không có quyền truy cập vào đường dẫn này</h5>;
  }

  return (
    <Container>
      <Header />
      <AccountWrapper>
        <HeaderSection>
          <UserInfo>
            <Avatar>
              <FaUser />
            </Avatar>
            <UserDetails>
              <UserName>{user.name}</UserName>
              <UserEmail>{user.email}</UserEmail>
            </UserDetails>
            {!isEditing && (
              <EditButton onClick={handleEdit}>
                <FaEdit />
                Chỉnh sửa
              </EditButton>
            )}
          </UserInfo>

          <InfoGrid>
            <InfoField>
              <Label>Tên người dùng</Label>
              <Input
                type="text"
                value={isEditing ? editInfo.name : user.name}
                onChange={(e) =>
                  setEditInfo({ ...editInfo, name: e.target.value })
                }
                disabled={!isEditing}
              />
            </InfoField>
            <InfoField>
              <Label>Email</Label>
              <Input type="email" value={user.email} disabled />
            </InfoField>
            <InfoField>
              <Label>Số điện thoại</Label>
              <Input
                type="tel"
                value={isEditing ? editInfo.phoneNumber : user.phoneNumber}
                onChange={(e) =>
                  setEditInfo({ ...editInfo, phoneNumber: e.target.value })
                }
                disabled={!isEditing}
              />
            </InfoField>
            <InfoField>
              <Label>Địa chỉ</Label>
              <Input
                type="text"
                value={isEditing ? editInfo.address : user.address}
                onChange={(e) =>
                  setEditInfo({ ...editInfo, address: e.target.value })
                }
                disabled={!isEditing}
              />
            </InfoField>
          </InfoGrid>

          {isEditing && (
            <ActionButtons>
              <SaveButton onClick={handleSave}>
                <FaSave />
                Lưu thay đổi
              </SaveButton>
              <CancelButton onClick={handleCancel}>
                <FaTimes />
                Hủy
              </CancelButton>
            </ActionButtons>
          )}
        </HeaderSection>

        <ContentSection>
          <TabSection>
            <TabTitle>
              <FaUtensils />
              Lịch sử đơn hàng
            </TabTitle>
            <ScrollableContent>
              {sortedOrders.map((order) => (
                <OrderCard key={order.id}>
                  <OrderHeader>
                    <OrderDate>
                      <FaClock style={{ marginRight: "5px" }} />
                      <p>
                        {moment(order.orderTime).format(
                          "DD/MM/YYYY, h:mm:ss a"
                        )}
                      </p>
                    </OrderDate>
                    <StatusBadge status={order.status}>
                      {getStatusText(order.status)}
                    </StatusBadge>
                  </OrderHeader>
                  <OrderItems>
                    {order.items.map((item, index) => {
                      return (
                        <OrderItem key={index}>
                          <ItemName>{order.itemNames[index]}</ItemName>
                          <ItemPrice>
                            {formatPrice(item.price * item.quantity)}
                          </ItemPrice>
                        </OrderItem>
                      );
                    })}
                  </OrderItems>
                  <TotalPrice>Tổng cộng: {formatPrice(order.total)}</TotalPrice>
                </OrderCard>
              ))}
            </ScrollableContent>
          </TabSection>

          <TabSection>
            <TabTitle>
              <FaTable />
              Lịch sử đặt bàn
            </TabTitle>
            <ScrollableContent>
              {sortedReservations.map((reservation) => (
                <ReservationCard key={reservation.id}>
                  <ReservationInfo>
                    <ReservationDetail>
                      <FaTable />
                      Bàn {reservation.tableNumber}
                    </ReservationDetail>
                    <ReservationDetail>
                      <FaUser />
                      {reservation.guestsCount} khách
                    </ReservationDetail>
                    <ReservationDetail>
                      <FaCalendarAlt />
                      {moment(reservation.reservationTime).format(
                        "DD/MM/YYYY, h:mm:ss a"
                      )}
                    </ReservationDetail>
                  </ReservationInfo>
                  <StatusBadge status={reservation.status}>
                    {getStatusText(reservation.status)}
                  </StatusBadge>
                </ReservationCard>
              ))}
            </ScrollableContent>
          </TabSection>
        </ContentSection>
      </AccountWrapper>
    </Container>
  );
};

export default Account;
