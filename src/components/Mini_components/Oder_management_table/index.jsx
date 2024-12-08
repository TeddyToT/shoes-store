import { Table } from 'antd';
import { useState, useEffect } from 'react';

const columns = [
    {
        title: <span style={{ display: 'block', fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}>Mã đơn hàng</span>,
        dataIndex: 'order_id',
    },
    {
        title: <span style={{ display: 'block', fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}>Ngày đặt hàng</span>,
        dataIndex: 'order_date',
    },
    {
        title: <span style={{ display: 'block', fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}>Tổng tiền</span>,
        dataIndex: 'total',
    },
    {
        title: <span style={{ display: 'block', fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}>Trạng thái</span>,
        dataIndex: 'status',
    },
];

function OdermanagementTable() {
    const [dataSource, setDataSource] = useState([]);

    const userId = localStorage.getItem('id'); // Lấy id từ localStorage

    useEffect(() => {
        if (userId) { // Chỉ fetch khi có userId
            fetchOrderData();
        }
    }, [userId]);


    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'pending':
                return '#faad14'; // màu vàng
            case 'done':
                return '#52c41a'; // màu xanh
            default:
                return '#1677ff';
        }
    };

    const fetchOrderData = async () => {
        try {
            const response = await fetch(`http://localhost/be-shopbangiay/api/invoice.php?userId=${userId}`);
            const data = await response.json();

            const transformedData = data.map((order) => {
                const total = order.items.reduce((sum, item) => {
                    return sum + (Number(item.productId.price) * Number(item.quantity));
                }, 0);

                return {
                    key: order.invoiceId,
                    order_id: <span style={{ display: 'block', fontSize: '16px', textAlign: 'center' }}>
                        #{order.invoiceId}
                    </span>,
                    order_date: <span style={{ display: 'block', fontSize: '16px', textAlign: 'center' }}>
                        {order.orderDate}
                    </span>,
                    total: <span style={{ display: 'block', fontSize: '16px', textAlign: 'center' }}>
                        {total.toLocaleString()}đ
                    </span>,
                    status: <span style={{
                        display: 'block',
                        fontSize: '16px',
                        textAlign: 'center',
                        color: getStatusColor(order.state)
                    }}>
                        {order.state}
                    </span>
                };
            });

            setDataSource(transformedData);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    return (
        <Table
            columns={columns}
            dataSource={dataSource}
            pagination={false}
            scroll={{
                y: 55 * 5,
            }}
        />
    );
}

export default OdermanagementTable;