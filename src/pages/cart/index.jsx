import { Layout } from "antd";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import ContentCart from "../../components/Layout/Content_cart";

function Account() {
    return (
        <Layout>
            <Header />

            <ContentCart />

            <Footer />
        </Layout>
    );
}

export default Account;