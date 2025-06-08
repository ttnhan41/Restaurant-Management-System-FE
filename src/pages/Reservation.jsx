import { useEffect, useState } from "react";
import { Users, Calendar, Clock } from "lucide-react";
import {
  Container,
  MainContent,
  LeftPanel,
  RightPanel,
  HeaderSection,
  Title,
  Subtitle,
  TableList,
  TableItem,
  TableHeader,
  TableNumber,
  TableStatus,
  TableInfo,
  ReserveButton,
  FloorPlan,
  FloorTitle,
  TableGrid,
  FloorTable,
  TableChairs,
  Legend,
  LegendItem,
  LegendColor,
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  SelectedTableInfo,
  FormGroup,
  Label,
  Input,
  Select,
  ButtonGroup,
  Button,
  PrimaryButton,
  SecondaryButton,
} from "../assets/wrappers/ReservationPage";
import Header from "../components/Header";
import { toast } from "react-toastify";
import axios from "axios";

const Reservation = () => {
  const [tables, setTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [token, setToken] = useState("");
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guestsCount: 2,
  });

  useEffect(() => {
    const retrievedToken = localStorage.getItem("token");
    if (retrievedToken) {
      setToken(retrievedToken);
    }
    fetchTables();
  }, []);

  const fetchTables = async () => {
    try {
      const tableResponse = await axios.get("/api/tables");
      setTables(tableResponse.data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const handleTableSelect = (table) => {
    if (table.available === true) {
      setSelectedTable(table);
    }
  };

  const handleReserve = () => {
    if (selectedTable) {
      setFormData({
        ...formData,
        guestCount: selectedTable.seats,
      });
      setShowModal(true);
    }
  };

  const handleConfirmReservation = async () => {
    if (!formData.date) {
      alert("Vui lòng chọn ngày");
    } else if (!formData.time) {
      alert("Vui lòng chọn giờ");
    }

    if (selectedTable && formData.date && formData.time) {
      try {
        const reservationFormData = {
          tableId: selectedTable.id,
          reservationTime: formData.date + "T" + formData.time,
          guestsCount: formData.guestsCount,
        };

        await axios.post("/api/reservations", reservationFormData, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setTables(
          tables.map((table) =>
            table.id === selectedTable.id
              ? { ...table, available: false }
              : table
          )
        );

        setShowModal(false);
        setSelectedTable(null);
        setFormData({
          date: "",
          time: "",
          guestsCount: 2,
        });

        toast.success("Đặt bàn thành công!");
      } catch (error) {
        console.error(error);
        toast.error(
          error.response?.data?.message || "Có lỗi xảy ra khi đặt bàn"
        );
      }
    }
  };

  const getStatusText = (available) => {
    switch (available) {
      case true:
        return "Có sẵn";
      case false:
        return "Đã đặt";
      default:
        return "Không xác định";
    }
  };

  return (
    <Container>
      <Header />
      <MainContent>
        <LeftPanel>
          <HeaderSection>
            <Title>Danh sách bàn ăn</Title>
            <Subtitle>Chọn bàn để đặt chỗ</Subtitle>
          </HeaderSection>

          <TableList>
            {tables.map((table) => (
              <TableItem
                key={table.id}
                selected={selectedTable?.id === table.id}
                onClick={() => handleTableSelect(table)}
              >
                <TableHeader>
                  <TableNumber>Bàn {table.tableNumber}</TableNumber>
                  <TableStatus status={table.available}>
                    {getStatusText(table.available)}
                  </TableStatus>
                </TableHeader>

                <TableInfo>
                  <Users size={16} />
                  <span>{table.seats} ghế</span>
                </TableInfo>

                <ReserveButton
                  disabled={
                    table.available !== true || selectedTable?.id !== table.id
                  }
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!token) {
                      window.location.href = "/login-register";
                    } else {
                      handleReserve();
                    }
                  }}
                >
                  {table.available === true
                    ? selectedTable?.id === table.id
                      ? "Đặt bàn này"
                      : "Chọn bàn"
                    : getStatusText(table.available)}
                </ReserveButton>
              </TableItem>
            ))}
          </TableList>
        </LeftPanel>

        <RightPanel>
          <FloorPlan>
            <FloorTitle>Sơ đồ bàn ăn</FloorTitle>

            <TableGrid>
              {tables.map((table) => (
                <FloorTable
                  key={table.id}
                  status={table.available}
                  selected={selectedTable?.id === table.id}
                  onClick={() => handleTableSelect(table)}
                >
                  {table.tableNumber}
                  <TableChairs>{table.seats}</TableChairs>
                </FloorTable>
              ))}
            </TableGrid>

            <Legend>
              <LegendItem>
                <LegendColor color="#27ae60" />
                <span>Có sẵn</span>
              </LegendItem>
              <LegendItem>
                <LegendColor color="#f39c12" />
                <span>Đã đặt</span>
              </LegendItem>
              <LegendItem>
                <LegendColor color="#2cb1bc" />
                <span>Đang chọn</span>
              </LegendItem>
            </Legend>
          </FloorPlan>
        </RightPanel>
      </MainContent>

      {showModal && (
        <Modal onClick={() => setShowModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>Đặt bàn</ModalTitle>
            </ModalHeader>

            <SelectedTableInfo>
              <strong>Bàn {selectedTable?.tableNumber}</strong> -{" "}
              {selectedTable?.seats} ghế
            </SelectedTableInfo>

            <FormGroup>
              <Label>
                <Calendar size={16} style={{ marginRight: "0.5rem" }} />
                <p>Ngày đặt bàn *</p>
              </Label>
              <Input
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
            </FormGroup>

            <FormGroup>
              <Label>
                <Clock size={16} style={{ marginRight: "0.5rem" }} />
                <p>Giờ đặt bàn *</p>
              </Label>
              <Input
                type="time"
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
              />
            </FormGroup>

            <FormGroup>
              <Label>
                <Users size={16} style={{ marginRight: "0.5rem" }} />
                <p>Số lượng khách</p>
              </Label>
              <Select
                value={formData.guestsCount}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    guestsCount: parseInt(e.target.value),
                  })
                }
              >
                {[...Array(selectedTable?.seats || 8)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} người
                  </option>
                ))}
              </Select>
            </FormGroup>

            <ButtonGroup>
              <SecondaryButton onClick={() => setShowModal(false)}>
                Hủy
              </SecondaryButton>
              <PrimaryButton onClick={handleConfirmReservation}>
                Xác nhận đặt bàn
              </PrimaryButton>
            </ButtonGroup>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default Reservation;
