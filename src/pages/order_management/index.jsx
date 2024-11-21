import { Layout } from "antd";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import ContentOderManagement from "../../components/Layout/Content_order_management";

function OrderTracking() {
    return (
        <Layout>
            <Header />

            <ContentOderManagement />

            <Footer />
        </Layout>
    );
}

export default OrderTracking;