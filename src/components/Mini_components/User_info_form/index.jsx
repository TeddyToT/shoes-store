
import { Button, DatePicker, notification, Form, Input } from 'antd';
import { useState } from 'react';
function UserInfoForm() {
    const [test, setTest] = useState("")

    const onFinish = (values) => {
        notification.success({
            message: <span style={{ color: 'green', fontWeight: 'bold' }}>Hoàn thành</span>,
            description: 'Cập nhật thông tin thành công!',
            showProgress: true,

        });
        console.log(values);

    };
    const onFinishFailed = (errorInfo) => {
        notification.error({
            message: <span style={{ color: 'red', fontWeight: 'bold' }}>Có lỗi xảy ra</span>,
            description: 'Cập nhật dữ liệu thất bại!',
            showProgress: true,
        });
        console.log(errorInfo);
    };

    return (
        <Form
            labelAlign='left'
            labelCol={{
                xs: { span: 24 },
                sm: { span: 8 },
                md: { span: 6 }
            }}
            wrapperCol={{
                xs: { span: 24 },
                sm: { span: 16 },
                md: { span: 14 }
            }}
            style={{
                width: '100%',
                maxWidth: '800px', // Tăng maxWidth
                margin: 'auto',
                padding: '20px 0'
            }}
            initialValues={{
                remember: true,
            }}
            
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label={<span style={{ fontSize: '22px', fontWeight: '600' }}>Họ và tên</span>}
                name="name"
                rules={[
                    {
                        type: 'string',
                        message: 'Vui lòng nhập tên hợp lệ',
                    },
                ]}
            >
                <Input
                    placeholder='Họ và tên'
                    style={{
                        height: '45px',
                        fontSize: '18px',
                        borderRadius: '8px',
                        padding: '8px 16px'
                    }}
                />
            </Form.Item>

            <Form.Item
                label={<span style={{ fontSize: '22px', fontWeight: '600' }}>Số điện thoại</span>}
                name="sdt"
                rules={[
                    {
                        type: 'string',
                        message: 'Vui lòng nhập số điện thoại hợp lệ',
                    },
                ]}
            >
                <Input
                    placeholder='Số điện thoại'
                    style={{
                        height: '45px',
                        fontSize: '18px',
                        borderRadius: '8px',
                        padding: '8px 16px'
                    }}
                />
            </Form.Item>

            <Form.Item
                label={<span style={{ fontSize: '22px', fontWeight: '600' }}>Email</span>}
                name="email"
                rules={[
                    {
                        type: 'email',
                        message: 'Vui lòng nhập Email hợp lệ',
                    },
                ]}
            >
                <Input
                    placeholder='Email'
                    style={{
                        height: '45px',
                        fontSize: '18px',
                        borderRadius: '8px',
                        padding: '8px 16px'
                    }}
                />
            </Form.Item>

            <Form.Item
                label={<span style={{ fontSize: '22px', fontWeight: '600' }}>Ngày sinh</span>}
                name="birthday"
                rules={[
                    {
                        type: 'date',
                        message: 'Vui lòng nhập ngày sinh hợp lệ',
                    },
                ]}
            >
                <DatePicker
                    placeholder='dd/mm/yyyy'
                    format={'DD/MM/YYYY'}
                    style={{
                        height: '45px',
                        fontSize: '18px',
                        borderRadius: '8px',
                        padding: '8px 16px',
                        width: '100%'
                    }}
                    value={test}
                    onChange={(e)=>setTest(e.target.value)}
                    
                />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    xs: { offset: 0, span: 24 },
                    sm: { offset: 8, span: 16 },
                    md: { offset: 6, span: 14 }
                }}
                style={{ marginTop: '32px' }}
            >
                <Button
                    type="primary"
                    htmlType="submit"
                    style={{
                        height: '50px',
                        fontSize: '20px',
                        fontWeight: '600',
                        padding: '0 32px',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    Cập nhật thông tin
                </Button>
            </Form.Item>
        </Form>
    );
}

export default UserInfoForm;