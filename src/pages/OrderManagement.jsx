import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { API_CONFIG } from '../config';
import axiosInstance from '../config';

const Wrapper = styled.div`
  padding: 2rem;
  background-color: #f5f5f5;
`;

const Header = styled.h1`
  color: #333;
  margin-bottom: 2rem;
  font-size: 24px;
`;

const OrderContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 1rem;
  text-align: left;
  background-color: #f8f9fa;
  border-bottom: 2px solid #dee2e6;
  color: #333;
  font-weight: 600;
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
  color: #666;
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: ${props => {
    switch (props.status) {
      case 'PENDING': return '#ffc107';
      case 'COMPLETED': return '#28a745';
      case 'CANCELLED': return '#dc3545';
      default: return '#6c757d';
    }
  }};
  color: white;
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  padding: 1rem;
  background-color: #ffebee;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${props => props.variant === 'danger' ? '#dc3545' : '#28a745'};
  color: white;
  margin-right: 0.5rem;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

export default function OrderManagement() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axiosInstance.get(API_CONFIG.ENDPOINTS.ORDER_LIST);

      if (response.data) {
        setOrders(Array.isArray(response.data) ? response.data : response.data.content || []);
      } else {
        setOrders([]);
      }
    } catch (error) {
      console.error('Error loading orders:', error);
      if (!error.response) {
        setError('Không thể kết nối đến server. Vui lòng kiểm tra kết nối mạng và thử lại.');
      } else if (error.response?.status === 401) {
        setError('Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.');
      } else if (error.response?.status === 403) {
        setError('Bạn không có quyền truy cập chức năng này.');
      } else {
        setError(`Không thể tải danh sách đơn hàng. ${error.response?.data?.message || 'Vui lòng thử lại sau.'}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (orderId, newStatus) => {
    try {
      await axiosInstance.put(
        API_CONFIG.ENDPOINTS.ORDER_UPDATE(orderId),
        { status: newStatus }
      );

      await loadOrders();
    } catch (error) {
      console.error('Error updating order:', error);
      if (!error.response) {
        setError('Không thể kết nối đến server. Vui lòng kiểm tra kết nối mạng và thử lại.');
      } else if (error.response?.status === 401) {
        setError('Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.');
      } else if (error.response?.status === 403) {
        setError('Bạn không có quyền thực hiện chức năng này.');
      } else {
        setError('Không thể cập nhật trạng thái đơn hàng. Vui lòng thử lại sau.');
      }
    }
  };

  if (loading) {
    return <Wrapper>Đang tải dữ liệu...</Wrapper>;
  }

  return (
    <Wrapper>
      <Header>Quản lý đơn hàng</Header>
      
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      <OrderContainer>
        <Table>
          <thead>
            <tr>
              <Th>STT</Th>
              <Th>Mã đơn</Th>
              <Th>Bàn</Th>
              <Th>Khách hàng</Th>
              <Th>Tổng tiền</Th>
              <Th>Trạng thái</Th>
              <Th>Thao tác</Th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id}>
                <Td>{index + 1}</Td>
                <Td>#{order.orderNumber}</Td>
                <Td>Bàn {order.tableNumber}</Td>
                <Td>{order.customerName}</Td>
                <Td>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(order.totalAmount)}</Td>
                <Td>
                  <StatusBadge status={order.status}>
                    {order.status === 'PENDING' && 'Chờ xử lý'}
                    {order.status === 'COMPLETED' && 'Hoàn thành'}
                    {order.status === 'CANCELLED' && 'Đã hủy'}
                  </StatusBadge>
                </Td>
                <Td>
                  {order.status === 'PENDING' && (
                    <>
                      <ActionButton
                        onClick={() => handleUpdateStatus(order.id, 'COMPLETED')}
                      >
                        Hoàn thành
                      </ActionButton>
                      <ActionButton
                        variant="danger"
                        onClick={() => handleUpdateStatus(order.id, 'CANCELLED')}
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
                <Td colSpan="7" style={{ textAlign: 'center' }}>
                  Không có dữ liệu
                </Td>
              </tr>
            )}
          </tbody>
        </Table>
      </OrderContainer>
    </Wrapper>
  );
} 