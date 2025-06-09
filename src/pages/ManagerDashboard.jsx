import { useEffect, useState } from "react";
import {
  ShoppingCart,
  Calendar,
  Table,
  Utensils,
  Plus,
  Edit,
  Trash2,
  Check,
  X,
  LogOut,
  House,
} from "lucide-react";
import {
  Container,
  Sidebar,
  SidebarTitle,
  MenuList,
  MenuItem,
  MainContent,
  PageHeader,
  PageTitle,
  Button,
  TableContainer,
  TableHeader,
  TableCell,
  TableRow,
  Select,
  StatusBadge,
  ActionButton,
  Modal,
  ModalContent,
  FormGroup,
  Label,
  Input,
  TextArea,
  ImagePreview,
  ButtonGroup,
  CancelButton,
} from "../assets/wrappers/ManagerDashboard";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import moment from "moment";

const ManagerDashboard = () => {
  const [currentPage, setCurrentPage] = useState("orders");
  const [orders, setOrders] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [tables, setTables] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({});
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    const retrievedToken = localStorage.getItem("token");
    if (retrievedToken) {
      setToken(retrievedToken);
      fetchCurrentUser(retrievedToken);
      fetchOrders(retrievedToken);
      fetchReservations(retrievedToken);
    }
    fetchMenuItems();
    fetchTables();
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

  const fetchMenuItems = async () => {
    try {
      const menuItemResponse = await axios.get("/api/menu-items");
      setMenuItems(menuItemResponse.data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const fetchTables = async () => {
    try {
      const tableResponse = await axios.get("/api/tables");
      setTables(tableResponse.data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const fetchOrders = async (token) => {
    try {
      const orderResponse = await axios.get("/api/orders/all", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(orderResponse.data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const fetchReservations = async (token) => {
    try {
      const reservationResponse = await axios.get("/api/reservations/all", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setReservations(reservationResponse.data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const response = await axios.put(
        "/api/orders/updateStatus",
        { id: orderId, status: newStatus },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const updatedOrder = response.data;

      setOrders((prev) =>
        prev.map((order) => (order.id === orderId ? updatedOrder : order))
      );

      toast.success("Cập nhật tình trạng thành công!");
    } catch (error) {
      toast.error("Lỗi khi cập nhật tình trạng");
    }
  };

  const updateReservationStatus = async (reservationId, newStatus) => {
    try {
      const response = await axios.put(
        "/api/reservations/updateStatus",
        { id: reservationId, status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const updatedReservation = response.data;

      setReservations((prev) =>
        prev.map((reservation) =>
          reservation.id === reservationId ? updatedReservation : reservation
        )
      );

      toast.success("Cập nhật tình trạng thành công!");
    } catch (error) {
      toast.error(
        error.response?.data?.details || "Lỗi khi cập nhật tình trạng"
      );
    }
  };

  const handleAddEdit = async (type) => {
    try {
      const isEdit = Boolean(editingItem);
      const baseUrl = type === "menu" ? "/api/menu-items" : "/api/tables";

      if (formData.available == null) {
        formData.available = true;
      }

      if (isEdit) {
        // PUT request to update
        const response = await axios.put(
          `${baseUrl}/${editingItem.id}`,
          formData,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const updatedItem = response.data;

        if (type === "menu") {
          setMenuItems((prev) =>
            prev.map((item) =>
              item.id === editingItem.id ? updatedItem : item
            )
          );
          toast.success("Sửa món ăn thành công!");
        } else if (type === "table") {
          setTables((prev) =>
            prev.map((table) =>
              table.id === editingItem.id ? updatedItem : table
            )
          );
          toast.success("Sửa bàn thành công!");
        }
      } else {
        // POST request to create
        const response = await axios.post(baseUrl, formData, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const newItem = response.data;

        if (type === "menu") {
          setMenuItems((prev) => [...prev, newItem]);
          toast.success("Thêm món ăn thành công!");
        } else if (type === "table") {
          setTables((prev) => [...prev, newItem]);
          toast.success("Thêm bàn thành công!");
        }
      }

      setShowModal(false);
      setEditingItem(null);
      setFormData({});
    } catch (error) {
      console.error("Add/Edit error:", error);
      toast.error(
        error.response?.data?.message || "Có lỗi xảy ra khi lưu dữ liệu"
      );
    }
  };

  const handleDelete = async (type, id) => {
    const baseUrl = type === "menu" ? "/api/menu-items" : "/api/tables";

    try {
      await axios.delete(`${baseUrl}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (type === "menu") {
        setMenuItems((prev) => prev.filter((item) => item.id !== id));
        toast.success("Xóa món ăn thành công!");
      } else if (type === "table") {
        setTables((prev) => prev.filter((table) => table.id !== id));
        toast.success("Xóa bàn thành công!");
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error(
        error.response?.data?.message ||
          "Xóa không thành công. Vui lòng thử lại."
      );
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const openModal = (type, item = null) => {
    setEditingItem(item);
    setFormData(item || {});
    setShowModal(true);
  };

  const renderOrdersPage = () => (
    <>
      <PageHeader>
        <PageTitle>Danh sách đơn gọi món</PageTitle>
      </PageHeader>
      <TableContainer>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Tên khách</TableHeader>
            <TableHeader>Thời gian đặt món</TableHeader>
            <TableHeader>Món ăn</TableHeader>
            <TableHeader>Tổng tiền</TableHeader>
            <TableHeader>Tình trạng</TableHeader>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.customerName}</TableCell>
              <TableCell>
                {moment(order.orderTime).format("DD/MM/YYYY, h:mm:ss a")}
              </TableCell>
              <TableCell>{order.itemNames.join(", ")}</TableCell>
              {/* <TableCell>{order.total.toLocaleString("vi-VN")}đ</TableCell> */}
              <TableCell>{order.total}đ</TableCell>
              <TableCell>
                <Select
                  value={order.status}
                  onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                  style={{
                    backgroundColor:
                      order.status === "PENDING"
                        ? "#ffd98e"
                        : order.status === "PREPARING"
                        ? "#a6dafd"
                        : order.status === "READY"
                        ? "#f6f679"
                        : order.status === "SERVED"
                        ? "#79faaf"
                        : order.status === "CANCELLED"
                        ? "#ffaea5"
                        : "#ffffff",
                  }}
                >
                  <option value="PENDING">Chờ xác nhận</option>
                  <option value="PREPARING">Đang chuẩn bị</option>
                  <option value="READY">Sẵn sàng</option>
                  <option value="SERVED">Đã giao</option>
                  <option value="CANCELLED">Đã hủy</option>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </TableContainer>
    </>
  );

  const renderReservationsPage = () => (
    <>
      <PageHeader>
        <PageTitle>Danh sách yêu cầu đặt bàn</PageTitle>
      </PageHeader>
      <TableContainer>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Số bàn</TableHeader>
            <TableHeader>Tên khách</TableHeader>
            <TableHeader>Số lượng khách</TableHeader>
            <TableHeader>Ngày đặt bàn</TableHeader>
            <TableHeader>Tình trạng</TableHeader>
            <TableHeader>Hành động</TableHeader>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <TableRow key={reservation.id}>
              <TableCell>{reservation.id}</TableCell>
              <TableCell>{reservation.tableNumber}</TableCell>
              <TableCell>{reservation.customerName}</TableCell>
              <TableCell>{reservation.guestsCount}</TableCell>
              <TableCell>
                {moment(reservation.reservationTime).format(
                  "DD/MM/YYYY, h:mm:ss a"
                )}
              </TableCell>
              <TableCell>
                <StatusBadge status={reservation.status}>
                  {reservation.status === "PENDING"
                    ? "Chờ xác nhận"
                    : reservation.status === "CONFIRMED"
                    ? "Đã xác nhận"
                    : "Đã hủy"}
                </StatusBadge>
              </TableCell>
              <TableCell>
                {reservation.status === "PENDING" && (
                  <>
                    <ActionButton
                      onClick={() =>
                        updateReservationStatus(reservation.id, "CONFIRMED")
                      }
                    >
                      <Check size={16} />
                    </ActionButton>
                    <ActionButton
                      danger
                      onClick={() =>
                        updateReservationStatus(reservation.id, "CANCELLED")
                      }
                    >
                      <X size={16} />
                    </ActionButton>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </TableContainer>
    </>
  );

  const renderTablesPage = () => (
    <>
      <PageHeader>
        <PageTitle>Danh sách bàn đặt</PageTitle>
        <Button onClick={() => openModal("table")}>
          <Plus size={16} />
          Thêm bàn
        </Button>
      </PageHeader>
      <TableContainer>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Số bàn</TableHeader>
            <TableHeader>Số ghế</TableHeader>
            <TableHeader>Tình trạng</TableHeader>
            <TableHeader>Hành động</TableHeader>
          </tr>
        </thead>
        <tbody>
          {tables.map((table) => (
            <TableRow key={table.id}>
              <TableCell>{table.id}</TableCell>
              <TableCell>{table.tableNumber}</TableCell>
              <TableCell>{table.seats}</TableCell>
              <TableCell>
                <StatusBadge status={table.available}>
                  {table.available === true ? "Có sẵn" : "Đã đặt"}
                </StatusBadge>
              </TableCell>
              <TableCell>
                <ActionButton onClick={() => openModal("table", table)}>
                  <Edit size={16} />
                </ActionButton>
                <ActionButton
                  danger
                  onClick={() => handleDelete("table", table.id)}
                >
                  <Trash2 size={16} />
                </ActionButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </TableContainer>
    </>
  );

  const renderMenuPage = () => (
    <>
      <PageHeader>
        <PageTitle>Danh sách món ăn</PageTitle>
        <Button onClick={() => openModal("menu")}>
          <Plus size={16} />
          Thêm món ăn
        </Button>
      </PageHeader>
      <TableContainer>
        <thead>
          <tr>
            <TableHeader>Ảnh</TableHeader>
            <TableHeader>ID</TableHeader>
            <TableHeader>Tên</TableHeader>
            <TableHeader>Mô tả</TableHeader>
            <TableHeader>Loại</TableHeader>
            <TableHeader>Giá</TableHeader>
            <TableHeader>Tình trạng</TableHeader>
            <TableHeader>Hành động</TableHeader>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <ImagePreview src={item.imageUrl} alt={item.name} />
              </TableCell>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>
                {item.type === "Main"
                  ? "Món chính"
                  : item.type === "Appetizer"
                  ? "Món khai vị"
                  : item.type === "Dessert"
                  ? "Món tráng miệng"
                  : item.type === "Side"
                  ? "Món ăn kèm"
                  : item.type === "Drink"
                  ? "Đồ uống"
                  : "Món khác"}
              </TableCell>
              {/* <TableCell>{item.price.toLocaleString("vi-VN")}đ</TableCell> */}
              <TableCell>{item.price}đ</TableCell>
              <TableCell>
                <StatusBadge status={item.available}>
                  {item.available === true ? "Có sẵn" : "Không có sẵn"}
                </StatusBadge>
              </TableCell>
              <TableCell>
                <ActionButton onClick={() => openModal("menu", item)}>
                  <Edit size={16} />
                </ActionButton>
                <ActionButton
                  danger
                  onClick={() => handleDelete("menu", item.id)}
                >
                  <Trash2 size={16} />
                </ActionButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </TableContainer>
    </>
  );

  const renderModal = () => {
    if (!showModal) return null;

    const isTable = currentPage === "tables";
    const isMenu = currentPage === "menu";

    return (
      <Modal onClick={() => setShowModal(false)}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <h3 style={{ marginBottom: "25px", color: "#0e7c86" }}>
            {editingItem ? "Chỉnh sửa" : "Thêm mới"}{" "}
            {isTable ? "bàn" : "món ăn"}
          </h3>

          {isTable && (
            <>
              <FormGroup>
                <Label>Số bàn</Label>
                <Input
                  type="number"
                  value={formData.tableNumber || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      tableNumber: parseInt(e.target.value),
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label>Số ghế</Label>
                <Input
                  type="number"
                  value={formData.seats || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      seats: parseInt(e.target.value),
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label>Tình trạng</Label>
                <Select
                  value={formData.available}
                  onChange={(e) =>
                    setFormData({ ...formData, available: e.target.value })
                  }
                >
                  <option value="true">Có sẵn</option>
                  <option value="false">Đã đặt</option>
                </Select>
              </FormGroup>
            </>
          )}

          {isMenu && (
            <>
              <FormGroup>
                <Label>Tên món ăn</Label>
                <Input
                  type="text"
                  value={formData.name || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label>Mô tả</Label>
                <TextArea
                  value={formData.description || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label>Loại</Label>
                <Select
                  value={formData.type || "Main"}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                >
                  <option value="Appetizer">Món khai vị</option>
                  <option value="Main">Món chính</option>
                  <option value="Dessert">Món tráng miệng</option>
                  <option value="Side">Món ăn kèm</option>
                  <option value="Drink">Đồ uống</option>
                  <option value="Other">Món khác</option>
                </Select>
              </FormGroup>
              <FormGroup>
                <Label>Giá</Label>
                <Input
                  type="number"
                  value={formData.price || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      price: parseInt(e.target.value),
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label>URL ảnh</Label>
                <Input
                  type="text"
                  value={formData.imageUrl || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, imageUrl: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label>Tình trạng</Label>
                <Select
                  value={formData.available}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      available: e.target.value,
                    })
                  }
                >
                  <option value="true">Có sẵn</option>
                  <option value="false">Không có sẵn</option>
                </Select>
              </FormGroup>
            </>
          )}

          <ButtonGroup>
            <CancelButton onClick={() => setShowModal(false)}>Hủy</CancelButton>
            <Button onClick={() => handleAddEdit(isTable ? "table" : "menu")}>
              {editingItem ? "Cập nhật" : "Thêm"}
            </Button>
          </ButtonGroup>
        </ModalContent>
      </Modal>
    );
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "orders":
        return renderOrdersPage();
      case "reservations":
        return renderReservationsPage();
      case "tables":
        return renderTablesPage();
      case "menu":
        return renderMenuPage();
      default:
        return renderOrdersPage();
    }
  };

  if (user.role !== "MANAGER") {
    return <h5>Bạn không có quyền truy cập vào đường dẫn này</h5>;
  }

  return (
    <Container>
      <Sidebar>
        <SidebarTitle>Foodive Hero Manager</SidebarTitle>
        <MenuList>
          <MenuItem
            active={currentPage === "orders"}
            onClick={() => setCurrentPage("orders")}
          >
            <ShoppingCart size={20} />
            Đơn gọi món
          </MenuItem>
          <MenuItem
            active={currentPage === "reservations"}
            onClick={() => setCurrentPage("reservations")}
          >
            <Calendar size={20} />
            Yêu cầu đặt bàn
          </MenuItem>
          <MenuItem
            active={currentPage === "tables"}
            onClick={() => setCurrentPage("tables")}
          >
            <Table size={20} />
            Danh sách bàn
          </MenuItem>
          <MenuItem
            active={currentPage === "menu"}
            onClick={() => setCurrentPage("menu")}
          >
            <Utensils size={20} />
            Danh sách món ăn
          </MenuItem>
          <MenuItem onClick={() => (window.location.href = "/")}>
            <House size={20} />
            Về trang chủ
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <LogOut size={20} />
            Đăng xuất
          </MenuItem>
        </MenuList>
      </Sidebar>

      <MainContent>{renderCurrentPage()}</MainContent>

      {renderModal()}
      <ToastContainer />
    </Container>
  );
};

export default ManagerDashboard;
