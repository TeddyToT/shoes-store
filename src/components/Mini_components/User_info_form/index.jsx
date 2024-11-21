
import { Button, DatePicker, notification, Form, Input } from 'antd';

function UserInfoForm() {

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
            name="basic"
            labelCol={{
                span: 6,
            }}
            wrapperCol={{
                span: 14,
            }}
            style={{
                maxWidth: 600,
                margin: 'auto',

            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label={<span style={{ fontSize: '20px', fontWeight: 'bold' }}>Họ và tên</span>}
                name="name"
                rules={[
                    {
                        type: 'string',
                        message: 'Vui lòng nhập tên hợp lệ',
                    },
                ]}
            >
                <Input placeholder='Họ và tên' />
            </Form.Item>

            <Form.Item
                label={<span style={{ fontSize: '20px', fontWeight: 'bold' }}>Số điện thoại</span>}
                name="sdt"
                rules={[
                    {
                        type: 'string',
                        message: 'Vui lòng nhập số điện thoại hợp lệ',
                    },
                ]}
            >
                <Input placeholder='Số điện thoại' />
            </Form.Item>

            <Form.Item
                label={<span style={{ fontSize: '20px', fontWeight: 'bold' }}>Email</span>}
                name="email"
                rules={[
                    {
                        type: 'email',
                        message: 'Vui lòng nhập Email hợp lệ',
                    },
                ]}
            >
                <Input placeholder='Email' />
            </Form.Item>

            <Form.Item
                label={<span style={{ fontSize: '20px', fontWeight: 'bold' }}>Ngày sinh</span>}
                name="birthday"
                rules={[
                    {
                        type: 'date',
                        message: 'Vui lòng nhập ngày sinh hợp lệ',
                    },
                ]}
            >

                <DatePicker placeholder='dd/mm/yy' format={'DD/MM/YYYY'} />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 14,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit" size='large'>
                    Cập nhật thông tin
                </Button>
            </Form.Item>
        </Form>
    );
}

export default UserInfoForm;