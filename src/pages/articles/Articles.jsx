import Layout from "_components/layout";
import Header from "_components/layout/header";
import CardArticle from "_components/cardarticle";

import "./Articles.scss";

const Articles = ({ children }) => (
    <Layout className="articles">
        <Header />
        {children}
        <CardArticle />
    </Layout>
);

export default Articles;
