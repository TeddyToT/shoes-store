
import { Table } from 'antd';

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
const dataSource = Array.from({
    length: 20,
}).map((_, i) => ({
    key: i,
    order_id: <span style={{ display: 'block', fontSize: '16px', textAlign: 'center', }}>#{i}</span>,
    order_date: <span style={{ display: 'block', fontSize: '16px', textAlign: 'center' }}>dd/mm/yy</span>,
    total: <span style={{ display: 'block', fontSize: '16px', textAlign: 'center' }}>100.000đ</span>,
    status: <span style={{ display: 'block', fontSize: '16px', textAlign: 'center', color: '#1677ff' }}>Đang giao</span>
}));


function OdermanagementTable() {
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
};

export default OdermanagementTable;