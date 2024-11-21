import { Layout } from "antd";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import ContentOderTracking from "../../components/Layout/Content_order_tracking";

function OrderTracking() {
    return (
        <Layout>
            <Header />

            <ContentOderTracking />

            <Footer />
        </Layout>
    );
}

export default OrderTracking;