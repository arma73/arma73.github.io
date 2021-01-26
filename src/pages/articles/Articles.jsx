import withContent from "_containers/hoc/withContent";
import Layout from "_components/layout";
import Header from "_components/layout/header";
import CardArticle from "_components/cards/cardarticle";

import "./Articles.scss";

const Articles = ({ listArticles }) => {
    const mapArticles = () => listArticles.map(item => (
        <CardArticle
            content={item.content}
            desc={item.desc}
            title={item.title}
            url={item.url}
            key={item.url}
        />
    ));

    return (
        <Layout className="articles">
            <Header />
            {mapArticles()}
        </Layout>
    );
};
export default withContent(Articles);
