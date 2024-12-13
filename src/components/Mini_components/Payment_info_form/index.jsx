import { useState, useEffect } from 'react';
import { Button, Form, Input, Card, Typography, Row, Col, notification, Divider } from 'antd';
import { DollarOutlined, CreditCardOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import momo from '../../../assets/images/momo.png'
import ship from '../../../assets/images/ship.png'
import { toast } from 'react-toastify';
import axios from 'axios';

function PaymentInfoForm() {

    const [selectedPayment, setSelectedPayment] = useState(null);
    const [form] = Form.useForm();
    const [userData, setUserData] = useState(null);
    const [orderDetails, setOrderDetails] = useState([]);
    const userId = localStorage.getItem('id');

    const location = useLocation();
    const item = location.state;

    useEffect(() => {
        if (userId) {
            fetchUserData();
            if (item){
                buyNowData();
                console.log("Item tu detaik", orderDetails);
            }
            else{
                fetchCartData();
            }
            
        }
    }, [userId, item]);


    const fetchUserData = async () => {
        try {
            const response = await fetch(`http://localhost/be-shopbangiay/api/user.php?userId=${userId}`);
            const data = await response.json();

            form.setFieldsValue({
                name: data.name,
                email: data.email,
                sdt: data.phone,
                address: data.address
            });

            setUserData(data);
        } catch (error) {
            console.error('Error fetching user data:', error);
            notification.error({
                message: <span style={{ color: 'red', fontWeight: 'bold' }}>Có lỗi xảy ra</span>,
                description: 'Không thể tải thông tin người dùng!',
                showProgress: true,
            });
        }
    };

    const fetchCartData = async () => {
        try {
            const response = await fetch(`http://localhost/be-shopbangiay/api/cart.php?userId=${userId}`);
            const data = await response.json();

            const transformedData = data.map(item => ({
                productId: item.productId.productId,
                name: item.productId.name,
                price: Number(item.productId.price),
                quantity: Number(item.quantity),
                size: item.size,
                image: item.productId.mainImage
            }));

            setOrderDetails(transformedData);
        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    };
    const buyNowData = () => {

            setOrderDetails(item);

    };

    const shippingFee = 30000;
    const productAmount = orderDetails.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalAmount = productAmount + shippingFee;




    const onFinish = async (values) => {
        const orderData = {
            userId: userId,
            items: orderDetails.map(item => ({
                productId: item.productId,
                quantity: item.quantity,
                size: item.size
            })),
            address: values.address,
            note: values.note || '',
            paymentMethod: values.paymentmethod,
            name: values.name,
            phone: values.sdt,
            amount: productAmount
            
        };
        console.log("Dữ liệu gửi đi: ", orderData);
        if (orderData.paymentMethod == 'cash') {
            
            try {
                const response = await fetch('http://localhost/be-shopbangiay/api/invoice.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(orderData)
                });

                const res = await response.json();

                if (res.success == true) {
                    notification.success({
                        message: <span style={{ color: 'green', fontWeight: 'bold' }}>Hoàn thành</span>,
                        description: 'Đặt hàng thành công!',
                        showProgress: true,
                    });
                } else {
                    console.error('Failed to place order');
                    notification.error({
                        message: <span style={{ color: 'red', fontWeight: 'bold' }}>Có lỗi xảy ra</span>,
                        description: 'Vui lòng kiểm tra lại thông tin!',
                        showProgress: true,
                    });
                }
            } catch (error) {
                console.error('Error placing order:', error);
                notification.error({
                    message: <span style={{ color: 'red', fontWeight: 'bold' }}>Có lỗi xảy ra</span>,
                    description: 'Đặt hàng thất bại!',
                    showProgress: true,
                });
                console.log('Dữ liệu gửi đi:', JSON.stringify(orderData));
            }
        } else 
        {
 
        axios.post('http://localhost/be-shopbangiay/api/payment.php', {
            
            userId: orderData.userId,
            name: orderData.name,
            phone: orderData.phone,
            address: orderData.phone,
            note: orderData.note,
            amount: orderData.amount,
            items: orderData.items
                })

                .then((res) => {
                    window.location.href = res.data.payUrl;
                })
                .catch((e) => {
                    console.log(e)
                })
        }

    };




    useEffect(() => {
        const verifyPayment = async () => {
            const params = new URLSearchParams(window.location.search);
            const extraData = params.get("extraData");
            let data;
    
            try {
                data = extraData ? JSON.parse(decodeURIComponent(extraData)) : undefined;
            } catch (error) {
                console.error("Invalid extraData:", error);
                toast.error("Dữ liệu thanh toán không hợp lệ");
                return;
            }
    
            if (params.get("orderId")) {
                const cleanUrl = window.location.origin + window.location.pathname;
                window.history.replaceState(null, "", cleanUrl);
    
                if (params.get("resultCode") === "0") {
                    try {
                        const res = await axios.post(`http://localhost/be-shopbangiay/api/invoice.php`, {
                            userId: data.userId,
                            items: data.items,
                            paymentMethod: "Momo",
                            address: data.address,
                            note: data.note,
                            name: data.name,
                            phone: data.phone,
                        });
    
                        if (!res.data || !res.data.success) {
                            toast.error(res.data?.message || "Lỗi hệ thống, thử lại sau");
                            return;
                        }
    
                        toast.success("Tạo đơn hàng thành công");
                    } catch (error) {
                        console.error("API Error:", error);
                        toast.error("Không thể tạo đơn hàng. Vui lòng thử lại.", );
                    }
                } else {
                    toast.error("Thanh toán thất bại");
                }
            }
        };
        verifyPayment();
    }, []);
    

    
    const handlePayment = () => {
        form.validateFields().then(values => {
            onFinish(values);
        })
    }
    const handleCardClick = (method) => {
        setSelectedPayment(method);
        form.setFieldsValue({ paymentmethod: method });
        console.log("Item tu detaik", orderDetails);
    };

    return (
        <Row gutter={24} style={{ maxWidth: 1100, margin: 'auto' }}>
            {/* Form */}
            <Col span={14}>
                <Form
                    form={form}
                    labelAlign='left'
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 14 }}
                    style={{ maxWidth: 600, margin: 'auto' }}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                >
                    <Form.Item
                        label={<span style={{ fontSize: '20px', fontWeight: '500' }}>Họ và tên</span>}
                        name="name"
                        rules={[{ required: true, type: 'string', message: 'Vui lòng nhập tên hợp lệ' }]}
                    >
                        <Input size='large' placeholder='Họ và tên' />
                    </Form.Item>

                    <Form.Item
                        label={<span style={{ fontSize: '20px', fontWeight: '500' }}>Email</span>}
                        name="email"
                        rules={[{ required: true, type: 'email', message: 'Vui lòng nhập Email hợp lệ' }]}
                    >
                        <Input size='large' placeholder='Email' />
                    </Form.Item>

                    <Form.Item
                        label={<span style={{ fontSize: '20px', fontWeight: '500' }}>Số điện thoại</span>}
                        name="sdt"
                        rules={[{ required: true, type: 'string', message: 'Vui lòng nhập số điện thoại hợp lệ' }]}
                    >
                        <Input size='large' placeholder='Số điện thoại' />
                    </Form.Item>

                    <Form.Item
                        label={<span style={{ fontSize: '20px', fontWeight: '500' }}>Địa chỉ</span>}
                        name="address"
                        rules={[{ required: true, type: 'string', message: 'Vui lòng nhập địa chỉ hợp lệ' }]}
                    >
                        <Input size='large' placeholder='Địa chỉ' />
                    </Form.Item>

                    <Form.Item
                        label={<span style={{ fontSize: '20px', fontWeight: '500' }}>Ghi chú</span>}
                        name="note"
                        rules={[{ required: false, type: 'string', message: 'Vui lòng nhập xã/phường hợp lệ' }]}
                    >
                        <Input size='medium' placeholder='Ghi chú' />
                    </Form.Item>

                    <div style={{ marginBottom: '8px', fontWeight: '500', fontSize: '20px' }}>
                        <Typography.Text type="danger">*</Typography.Text> Phương thức thanh toán:
                    </div>

                    <Form.Item
                        name="paymentmethod"
                        rules={[{ required: true, message: 'Vui lòng chọn phương thức thanh toán!' }]}
                    >
                        <Row gutter={16} justify="center">
                            <Col span={12}>
                                <Card
                                    hoverable
                                    onClick={() => handleCardClick('Cod')}
                                    style={{
                                        textAlign: 'center',
                                        borderRadius: '8px',
                                        padding: '5px 0',
                                        border: selectedPayment === 'Cod' ? '1px solid #1b96dd' : '1px solid #d9d9d9',
                                        boxShadow: selectedPayment === 'Cod' ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
                                    }}
                                >
                                    <span style={{ display: 'block', }}>Thanh toán khi nhận hàng</span>
                                    <img src={ship} style={{ width: '100px', margin: 'auto' }} />

                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card
                                    hoverable
                                    onClick={() => handleCardClick('Momo')}
                                    style={{
                                        textAlign: 'center',
                                        borderRadius: '8px',
                                        padding: '5px 0',
                                        border: selectedPayment === 'Momo' ? '1px solid #1b96dd' : '1px solid #d9d9d9',
                                        boxShadow: selectedPayment === 'Momo' ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
                                    }}
                                >
                                    <span style={{ display: 'block', }}>Thanh toán bằng MOMO</span>
                                    <img src={momo} style={{ width: '100px', margin: 'auto' }} />
                                </Card>
                            </Col>
                        </Row>
                    </Form.Item>
                </Form>
            </Col>

            {/* Chi tiết đơn hàng */}
            <Col span={10}>
                <Card
                    title={<div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '18px' }}>Chi tiết đơn hàng</div>}
                    bordered={false}
                    style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                >
                    {orderDetails.map((item, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <img
                                src={item.image}
                                alt={item.name}
                                style={{
                                    width: '64px',
                                    height: '60px',
                                    objectFit: 'cover',
                                    borderRadius: '4px'
                                }}
                            />
                            <div className="item-info" style={{ flexGrow: '1', marginLeft: '10px' }}>
                                <p style={{ fontWeight: '500', marginBottom: '0' }}>{item.name}</p>
                                <p style={{ marginTop: '0', fontWeight: '500' }}>
                                    Số lượng: {item.quantity} | Size: {item.size}
                                </p>
                            </div>
                            <p style={{ fontWeight: '500' }}>{(item.price * item.quantity).toLocaleString()}đ </p>
                        </div>
                    ))}

                    <Divider style={{ border: '1px solid black' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontWeight: '500' }}>Tạm tính:</span>
                        <span style={{ fontWeight: '500' }}>{productAmount.toLocaleString()}đ</span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                        <span style={{ fontWeight: '500' }}>Phí giao hàng:</span>
                        <span style={{ fontWeight: '500' }}>{shippingFee.toLocaleString()}đ</span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', marginTop: '10px' }}>
                        <span style={{ fontSize: '20px' }}>Tổng tiền:</span>
                        <span style={{ fontSize: '20px' }}>{totalAmount.toLocaleString()}đ</span>
                    </div>
                    <Button size='large'
                        type="primary"
                        block
                        style={{ marginTop: '20px' }}
                        disabled={!selectedPayment}
                        onClick={handlePayment}
                    >
                        Thanh toán
                    </Button>
                </Card>
            </Col>
        </Row>
    );
}

export default PaymentInfoForm;
