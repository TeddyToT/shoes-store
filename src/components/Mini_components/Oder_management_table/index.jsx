import React, { useEffect, useState } from 'react';
import { Table, Modal, Tag } from 'antd';

function OrderManagementTable() {
    const [dataSource, setDataSource] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const userId = localStorage.getItem('id'); // Lấy id từ localStorage

    useEffect(() => {
        if (userId) {
            fetchOrderData();
        }
    }, [userId]);

    const fetchOrderData = async () => {
        try {
            const response = await fetch(`http://localhost/be-shopbangiay/api/invoice.php?userId=${userId}`);
            const data = await response.json();
    
            const transformedData = data.map((order) => {
                const total = order.items.reduce((sum, item) => {
                    const price = Number(item.productId.price);
                    const discount = Number(item.productId.discount) / 100;
                    const quantity = Number(item.quantity);
    
                    
                    const finalPrice = discount > 0 ? price - (price * discount) : price;
    
                    // Cộng dồn vào tổng tiền
                    return sum + (finalPrice * quantity);
                }, 0);
    
                return {
                    key: order.invoiceId,
                    order_id: `#${order.invoiceId}`,
                    order_date: new Date(order.orderDate).toLocaleDateString('vi-VN'),
                    total: `${total.toLocaleString('vi-VN')}đ`,
                    state: order.state === 'Pending' ? 'Chờ xác nhận' :
                        order.state === 'Confirming' ? 'Đã xác nhận' :
                        order.state === 'Shipping' ? 'Đang giao' :
                        order.state === 'Done' ? 'Hoàn thành' : 'Đã hủy',
                    details: order,
                };
            });
    
            
            transformedData.sort((a, b) => new Date(b.details.orderDate) - new Date(a.details.orderDate));
    
            
            setDataSource(transformedData);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };
    

    const getStatusColor = (status) => {
        switch (status) {
            case 'Hoàn thành':
                return 'green';
            case 'Đang xử lý':
                return 'orange';
        }
    };

    const handleOpenModal = (order) => {
        setSelectedOrder(order);
        setIsModalVisible(true);
    };

    const columns = [
        { title: 'Mã đơn hàng', dataIndex: 'order_id', key: 'order_id', align: 'center' },
        { title: 'Ngày đặt hàng', dataIndex: 'order_date', key: 'order_date', align: 'center' },
        { title: 'Tổng tiền', dataIndex: 'total', key: 'total', align: 'center' },
        {
            title: 'Trạng thái',
            dataIndex: 'state',
            key: 'state',
            align: 'center',
            render: (status) => (
                <Tag
                    style={{
                        color: status === 'Hoàn thành' ? '#52c41a' : '#faad14',
                        fontWeight: 'bold',
                    }}
                >
                    {status}
                </Tag>
            ),
        },

        {
            title: 'Chi tiết',
            dataIndex: 'details',
            key: 'details',
            align: 'center',
            render: (order) => (
                <a onClick={() => handleOpenModal(order)} style={{ color: '#1890ff', cursor: 'pointer' }}>
                    Xem chi tiết
                </a>
            ),
        },
    ];

    return (
        <>
            <Table
                columns={columns}
                dataSource={dataSource}
                pagination={{ pageSize: 4 }}
            />

            <Modal
                title={`Chi tiết đơn hàng ${selectedOrder?.invoiceId}`}
                visible={isModalVisible}
                footer={null}
                onCancel={() => setIsModalVisible(false)}
            >
                <div style={{
                    marginBottom: '10px', display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <strong>Trạng thái đơn hàng: </strong>
                    <Tag
                        style={{
                            color: selectedOrder?.state === 'Done' ? '#52c41a' : '#faad14',
                            fontWeight: 'bold',
                        }}
                    >
                        {selectedOrder?.state  === 'Pending' ? 'Chờ xác nhận' :
                    selectedOrder?.state === 'Confirming' ? 'Đã xác nhận' : 
                    selectedOrder?.state === 'Shipping' ? 'Đang giao' : 
                    selectedOrder?.state === 'Done' ? 'Hoàn thành' : 'Đã hủy'}
                    </Tag>
                </div>
                {selectedOrder?.items.map((item, index) => (
                    <div key={index} style={{ display: 'flex', marginBottom: '15px' }}>
                        <img
                            src={item.productId.mainImage}
                            alt={item.productId.name}
                            style={{ width: '80px', marginRight: '10px', borderRadius: '4px' }}
                        />
                        <div>
                            <strong>{item.productId.name}</strong>
                            <div>
                                {item.quantity} x {Number(item.productId.price).toLocaleString('vi-VN')}đ
                            </div>
                            <div style={{ fontWeight: 'bold' }}>
                                = {(Number(item.productId.price) * item.quantity).toLocaleString('vi-VN')}đ
                            </div>
                        </div>
                    </div>
                ))}
                <div style={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'right' }}>
                    Tổng cộng:{' '}
                    {selectedOrder &&
                        selectedOrder.items
                            .reduce((sum, item) => sum + item.quantity * Number(item.productId.price), 0)
                            .toLocaleString('vi-VN')}
                    đ
                </div>
            </Modal>
        </>
    );
}

export default OrderManagementTable;
