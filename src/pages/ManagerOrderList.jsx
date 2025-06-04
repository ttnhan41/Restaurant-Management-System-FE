import {
  Container,
  Table,
  Th,
  Td,
  StatusBadge,
  ErrorMessage,
  ActionButton,
} from "../assets/wrappers/ManagerOrderList";
import { useEffect, useState } from "react";
import axios from "axios";

const ManagerOrderList = () => {
  const [orders, setOrders] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState(null);

  const token =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwic3ViIjoidXNlckBnbWFpbC5jb20iLCJyb2xlIjoiTUFOQUdFUiIsImlhdCI6MTc0OTAxODE1MSwiZXhwIjoxNzQ5MDIxNzUxfQ.dcgvVcFVIJhEkdQNpw8SiUvq8agH_r5dMA6qG1fKWrI";

  useEffect(() => {
    axios
      .get("/api/menu-items")
      .then((res) => setMenuItems(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      const response = await axios
        .get("/api/orders/all", { headers: { Authorization: token } })
        .then((res) => setOrders(res.data))
        .catch((err) => console.error(err));

      if (response.data) {
        setOrders(
          Array.isArray(response.data)
            ? response.data
            : response.data.content || []
        );
      } else {
        setOrders([]);
      }
    } catch (error) {
      console.error("Error loading orders:", error);
    }
  };

  const getMenuName = (id) =>
    menuItems.find((m) => m.id === id)?.name || `Món #${id}`;
  const getUserName = (id) => `User #${id}`;

  const handleUpdateStatus = async (orderId, newStatus) => {
    try {
      await axios.put(
        "/api/orders/updateStatus",
        {
          id: orderId,
          status: newStatus,
        },
        { headers: { Authorization: token } }
      );

      await loadOrders();
    } catch (error) {
      console.error("Error updating order:", error);
      if (!error.response) {
        setError(
          "Không thể kết nối đến server. Vui lòng kiểm tra kết nối mạng và thử lại."
        );
      } else if (error.response?.status === 401) {
        setError("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.");
      } else if (error.response?.status === 403) {
        setError("Bạn không có quyền thực hiện chức năng này.");
      } else {
        setError(
          "Không thể cập nhật trạng thái đơn hàng. Vui lòng thử lại sau."
        );
      }
    }
  };

  return (
    <Container>
      <h2>Quản lý đơn gọi món</h2>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Table>
        <thead>
          <tr>
            <Th>Mã đơn</Th>
            <Th>Khách hàng</Th>
            <Th>Thời gian</Th>
            <Th>Món ăn</Th>
            <Th>Tổng tiền</Th>
            <Th>Trạng thái</Th>
            <Th>Thao tác</Th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <Td>{order.id}</Td>
              <Td>{getUserName(order.userId)}</Td>
              <Td>
                {order.orderTime
                  ? new Date(order.orderTime).toLocaleString()
                  : "Không có"}
              </Td>
              <Td>
                {order.items.map((item, index) => (
                  <div key={index}>{getMenuName(item.menuItemId)}</div>
                ))}
              </Td>
              <Td>
                {order.items.reduce(
                  (total, item) => total + item.quantity * item.price,
                  0
                )}
                ₫
              </Td>
              <Td>
                <StatusBadge status={order.status}>
                  {order.status === "PENDING" && "Chờ xử lý"}
                  {order.status === "IN_PROGRESS" && "Đang xử lý"}
                  {order.status === "SERVED" && "Hoàn thành"}
                  {order.status === "CANCELLED" && "Đã hủy"}
                </StatusBadge>
              </Td>
              <Td>
                {order.status === "PENDING" && (
                  <>
                    <ActionButton
                      onClick={() => handleUpdateStatus(order.id, "SERVED")}
                    >
                      Hoàn thành
                    </ActionButton>
                    <ActionButton
                      variant="danger"
                      onClick={() => handleUpdateStatus(order.id, "CANCELLED")}
                    >
                      Hủy
                    </ActionButton>
                  </>
                )}
              </Td>
            </tr>
          ))}
          {orders.length === 0 && (
            <tr>
              <Td colSpan="7" style={{ textAlign: "center" }}>
                Không có dữ liệu
              </Td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default ManagerOrderList;
