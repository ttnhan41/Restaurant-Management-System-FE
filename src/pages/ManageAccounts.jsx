import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  color: #333;
`;

const ButtonGroup = styled.div`
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
`;

const ActionButton = styled.button`
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.block {
    background-color: #000;
    color: white;
  }

  &.unblock {
    background-color: #28a745;
    color: white;
  }

  &.delete {
    background-color: #dc3545;
    color: white;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Th = styled.th`
  background-color: #17a2b8;
  color: white;
  padding: 1rem;
  text-align: left;
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
`;

const Checkbox = styled.input`
  transform: scale(1.2);
  margin: 0;
  cursor: pointer;
`;

const StatusBadge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: ${props => props.blocked ? '#dc3545' : '#28a745'};
  color: white;
`;

export default function ManageAccounts() {
  const [accounts, setAccounts] = useState([]);
  const [selectedAccounts, setSelectedAccounts] = useState([]);
  const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwic3ViIjoiYWRtaW5ubkBnbWFpbC5jb20iLCJyb2xlIjoiTUFOQUdFUiIsImlhdCI6MTc0ODk2Mjk4NSwiZXhwIjoxNzQ4OTY2NTg1fQ.Fbt5q1YJ-x3Zhj66Gd7AL0zG-45dct_zQjtSv1QsjkY';

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = () => {
    axios.get('/api/users', {
      headers: { Authorization: token }
    })
    .then(response => {
      console.log('Danh sách tài khoản:', response.data);
      setAccounts(response.data);
    })
    .catch(error => {
      console.error('Lỗi khi lấy danh sách tài khoản:', error);
      alert('Không thể lấy danh sách tài khoản!');
    });
  };

  const handleSelectAccount = (id) => {
    setSelectedAccounts(prev => {
      if (prev.includes(id)) {
        return prev.filter(accountId => accountId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedAccounts(accounts.map(account => account.id));
    } else {
      setSelectedAccounts([]);
    }
  };

  const handleButtonClick = (action) => {
    if (selectedAccounts.length === 0) {
      alert('Vui lòng chọn ít nhất một tài khoản!');
      return;
    }

    const endpoint = {
      block: '/api/users/block',
      unblock: '/api/users/unblock',
      delete: '/api/users/delete'
    }[action];

    axios.post(endpoint, { userIds: selectedAccounts }, {
      headers: { Authorization: token }
    })
    .then(() => {
      fetchAccounts();
      setSelectedAccounts([]);
      alert('Thao tác thành công!');
    })
    .catch(error => {
      console.error('Lỗi khi thực hiện thao tác:', error);
      alert('Không thể thực hiện thao tác! Vui lòng thử lại.');
    });
  };

  return (
    <Wrapper>
      <Title>Manage Restaurant</Title>
      
      <ButtonGroup>
        <ActionButton 
          className="block"
          onClick={() => handleButtonClick('block')}
        >
          Block
        </ActionButton>
        <ActionButton 
          className="unblock"
          onClick={() => handleButtonClick('unblock')}
        >
          Unblock
        </ActionButton>
        <ActionButton 
          className="delete"
          onClick={() => handleButtonClick('delete')}
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
                checked={selectedAccounts.length === accounts.length && accounts.length > 0}
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
                  {account.blocked ? 'Blocked' : 'Active'}
                </StatusBadge>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
} 