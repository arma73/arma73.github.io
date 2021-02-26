import { FC } from "react";
import withContent, { InjectedContentProps } from "_containers/hoc/withContent";
import Layout from "_components/layout";
import Header from "_components/layout/header";
import CardArticle from "_components/cards/cardarticle";
import { HeadArticles } from "_interfaces/articles.interface";

import "./Articles.scss";

interface ArticlesProps extends InjectedContentProps {
    "headArticles": HeadArticles[];
}

const Articles: FC<ArticlesProps> = ({ headArticles }) => {
    const mapArticles = () =>
        headArticles.map(item => (
            <CardArticle
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
export default withContent<ArticlesProps>(Articles);
