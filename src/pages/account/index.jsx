import { Layout } from "antd";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import ContentAccount from "../../components/Layout/Content_account";

function Account() {
    return (
        <Layout>
            <Header />

            <ContentAccount />

            <Footer />
        </Layout>
    );
}

export default Account;