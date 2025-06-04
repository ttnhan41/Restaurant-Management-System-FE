import { useEffect, useState } from "react";
import {
  Wrapper,
  Title,
  ButtonGroup,
  ActionButton,
  Table,
  Th,
  Td,
  Checkbox,
  StatusBadge,
} from "../assets/wrappers/ManagerUserList";
import axios from "axios";

const ManagerUserList = () => {
  const [accounts, setAccounts] = useState([]);
  const [selectedAccounts, setSelectedAccounts] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    const retrievedToken = localStorage.getItem("token");
    setToken(retrievedToken);
  }, []);

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = () => {
    axios
      .get("/api/users", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log("Danh sách tài khoản:", response.data);
        setAccounts(response.data);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy danh sách tài khoản:", error);
        alert("Không thể lấy danh sách tài khoản!");
      });
  };

  const handleSelectAccount = (id) => {
    setSelectedAccounts((prev) => {
      if (prev.includes(id)) {
        return prev.filter((accountId) => accountId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedAccounts(accounts.map((account) => account.id));
    } else {
      setSelectedAccounts([]);
    }
  };

  const handleButtonClick = (action) => {
    if (selectedAccounts.length === 0) {
      alert("Vui lòng chọn ít nhất một tài khoản!");
      return;
    }

    const endpoint = {
      block: "/api/users/block",
      unblock: "/api/users/unblock",
      delete: "/api/users/delete",
    }[action];

    axios
      .post(
        endpoint,
        { userIds: selectedAccounts },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        fetchAccounts();
        setSelectedAccounts([]);
        alert("Thao tác thành công!");
      })
      .catch((error) => {
        console.error("Lỗi khi thực hiện thao tác:", error);
        alert("Không thể thực hiện thao tác! Vui lòng thử lại.");
      });
  };

  return (
    <Wrapper>
      <Title>Manage Restaurant</Title>

      <ButtonGroup>
        <ActionButton
          className="block"
          onClick={() => handleButtonClick("block")}
        >
          Block
        </ActionButton>
        <ActionButton
          className="unblock"
          onClick={() => handleButtonClick("unblock")}
        >
          Unblock
        </ActionButton>
        <ActionButton
          className="delete"
          onClick={() => handleButtonClick("delete")}
        >
          Delete
        </ActionButton>
      </ButtonGroup>

      <Table>
        <thead>
          <tr>
            <Th>
              <Checkbox
                type="checkbox"
                onChange={handleSelectAll}
                checked={
                  selectedAccounts.length === accounts.length &&
                  accounts.length > 0
                }
              />
            </Th>
            <Th>S.No</Th>
            <Th>Email</Th>
            <Th>Role</Th>
            <Th>Status</Th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account, index) => (
            <tr key={account.id}>
              <Td>
                <Checkbox
                  type="checkbox"
                  checked={selectedAccounts.includes(account.id)}
                  onChange={() => handleSelectAccount(account.id)}
                />
              </Td>
              <Td>{index + 1}</Td>
              <Td>{account.email}</Td>
              <Td>{account.role}</Td>
              <Td>
                <StatusBadge blocked={account.blocked}>
                  {account.blocked ? "Blocked" : "Active"}
                </StatusBadge>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};
export default ManagerUserList;
