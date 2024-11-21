
import { Typography, Table, InputNumber, Button, Divider, Input, Row, Col } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

const { Text } = Typography;

const CartInfoList = () => {

    const cartData = [
        {
            key: "1",
            name: "Rau xà lách",
            price: 30000,
            quantity: 2,
            image: "https://placehold.jp/75x75.png",
        },
        {
            key: "2",
            name: "Đùi gà tỏi",
            price: 70000,
            quantity: 1,
            image: "https://placehold.jp/75x75.png",
        },
    ];

    const handleRemoveItem = () => {

    };


    const columns = [
        {
            title: <div style={{ fontSize: 20, fontWeight: 700, textAlign: "center" }}>Sản phẩm</div>,
            dataIndex: "name",
            key: "name",
            render: (text, record) => (
                <div style={{ display: "flex", alignItems: "center", }}>
                    <CloseCircleOutlined style={{ fontSize: '24px', margin: '20px' }} onClick={() => handleRemoveItem()} />
                    <div style={{ display: 'flex', alignItems: "center", justifyContent: "center", flex: '1' }}>
                        <img src={record.image} alt={text} style={{ width: 50, height: 50, margin: '10px' }} />
                        <div>
                            <Text>{text}</Text>
                            <br />
                            <Text type="secondary">{record.price.toLocaleString()}đ</Text>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: <div style={{ fontSize: 20, fontWeight: 700, textAlign: "center" }}>Số lượng</div>,
            dataIndex: "quantity",
            key: "quantity",
            render: (quantity) => (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Button style={{ textAlign: 'center', fontSize: '20px', padding: '10px' }}>-</Button>
                    <InputNumber readOnly min={1} value={quantity} style={{ width: '40px', margin: "0 4px" }} />
                    <Button style={{ textAlign: 'center', fontSize: '16px', padding: '10px' }}>+</Button>
                </div>
            ),
        },
        {
            title: <div style={{ fontSize: 20, fontWeight: 700, textAlign: "center" }}>Thành tiền</div>,
            dataIndex: "price",
            key: "total",
            render: (text, record) => (
                <Text style={{ display: 'block', textAlign: "center", fontWeight: 500, fontSize: 16 }}>{(record.price * record.quantity).toLocaleString()}đ</Text>
            ),
        },
    ];

    const totalPrice = cartData.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <Row gutter={16}>
            <Col span={16}>
                <span style={{ margin: 20, fontWeight: 700, fontSize: 30 }}>Giỏ hàng</span>
                <Table
                    columns={columns}
                    dataSource={cartData}
                    pagination={false}
                    summary={() => (
                        <Table.Summary.Row>
                            <Table.Summary.Cell colSpan={3}>
                                <Text strong style={{ float: "right", fontSize: 20 }}>
                                    Tổng: {totalPrice.toLocaleString()}đ
                                </Text>
                            </Table.Summary.Cell>
                        </Table.Summary.Row>
                    )}
                />
            </Col>

            <Col span={8}>
                <div style={{ padding: "20px", background: "#f5f5f5", borderRadius: "8px" }}>
                    <Text strong style={{ fontSize: 18, fontWeight: 500 }} >Tạm tính:</Text>
                    <Text style={{ float: "right", fontSize: 16, fontWeight: 600 }}>{totalPrice.toLocaleString()}đ</Text>
                    <Divider />
                    <Text strong>Mã giảm giá:</Text>
                    <Input placeholder="#" style={{ margin: "10px 0" }} />
                    <Divider />
                    <Text style={{ fontSize: 20, fontWeight: 600 }}>TỔNG TIỀN:</Text>
                    <Text strong style={{ fontSize: "20px", float: "right" }}>{totalPrice.toLocaleString()}đ </Text>
                    <Button type="primary" block style={{ marginTop: "20px" }}>
                        Đặt hàng
                    </Button>
                </div>
            </Col>
        </Row>
    );
};

export default CartInfoList;
