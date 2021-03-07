import Layout from "_components/layout";
import Portfolio from "_components/portfolio";
import Galaxy from "_components/ui/Galaxy";
import "./Main.scss";

const Main = () => (
    <Layout className="portfolio--page">
        <Galaxy />
        <Portfolio />
    </Layout>
);

export default Main;
