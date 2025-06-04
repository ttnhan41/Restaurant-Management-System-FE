import {
  Wrapper,
  Nav,
  Title,
  Container,
  LeftPane,
  RightPane,
  TableElement,
  Th,
  Td,
  TableRow,
  TableBox,
  ActionButton,
} from "../assets/wrappers/ManagerReservationList";
import { useEffect, useState } from "react";
import axios from "axios";

const ManagerReservationList = () => {
  const [tables, setTables] = useState([]);
  const [userRole, setUserRole] = useState(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    const retrievedToken = localStorage.getItem("token");
    setToken(retrievedToken);
  }, []);

  useEffect(() => {
    // Lấy role từ token
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUserRole(payload.role);
    } catch (error) {
      console.error("Lỗi khi giải mã token:", error);
    }

    axios
      .get("/api/tables")
      .then((res) => {
        console.log("GET /api/tables →", res.data);
        setTables(res.data);
      })
      .catch((err) => console.error("Lỗi lấy bảng:", err));
  }, []);

  const toggleStatus = (id, currentStatus) => {
    const table = tables.find((t) => t.id === id);
    axios
      .put(
        `/api/tables/${id}`,
        {
          tableNumber: table.tableNumber,
          seats: table.seats,
          available: !currentStatus,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        setTables((prev) =>
          prev.map((t) =>
            t.id === id ? { ...t, available: !currentStatus } : t
          )
        );
      })
      .catch((err) => console.error("Lỗi đổi trạng thái bàn:", err));
  };

  // Kiểm tra xem có hiển thị nút action không
  const showActionButton = (table) => {
    if (userRole === "MANAGER") return true; // Manager thấy tất cả các nút
    return table.available; // Guest chỉ thấy nút đặt chỗ cho bàn trống
  };

  return (
    <Wrapper>
      <Title>Danh sách bàn ăn</Title>
      <Container>
        <LeftPane>
          <TableElement>
            <thead>
              <tr>
                <Th>ID</Th>
                <Th>Số bàn</Th>
                <Th>Số ghế</Th>
                <Th>Trạng thái</Th>
                <Th>Hành động</Th>
              </tr>
            </thead>
            <tbody>
              {tables.map((table) => (
                <TableRow key={table.id} available={table.available}>
                  <Td>{table.id}</Td>
                  <Td>{table.tableNumber}</Td>
                  <Td>{table.seats}</Td>
                  <Td>{table.available ? "Trống" : "Đã đặt"}</Td>
                  <Td>
                    {showActionButton(table) && (
                      <ActionButton
                        onClick={() => toggleStatus(table.id, table.available)}
                      >
                        {table.available ? "Đặt chỗ" : "Hủy đặt chỗ"}
                      </ActionButton>
                    )}
                  </Td>
                </TableRow>
              ))}
            </tbody>
          </TableElement>
        </LeftPane>

        <RightPane>
          {tables.map((table) => (
            <TableBox
              key={table.id}
              available={table.available}
              onClick={() =>
                showActionButton(table) &&
                toggleStatus(table.id, table.available)
              }
              style={{
                cursor: showActionButton(table) ? "pointer" : "default",
                opacity: showActionButton(table) ? 1 : 0.7,
              }}
            >
              <div>Bàn #{table.tableNumber}</div>
              <div>{table.seats} ghế</div>
              <div>{table.available ? "✔ Trống" : "❌ Đã đặt"}</div>
            </TableBox>
          ))}
        </RightPane>
      </Container>
    </Wrapper>
  );
};

export default ManagerReservationList;
