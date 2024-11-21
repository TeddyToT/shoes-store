import { Layout } from "antd";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import ContentPayment from "../../components/Layout/Content_payment";

function Account() {
    return (
        <Layout>
            <Header />

            <ContentPayment />

            <Footer />
        </Layout>
    );
}

export default Account;