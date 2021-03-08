import { useEffect } from "react";
import Layout from "_components/layout";
import Header from "_components/layout/header";
import { move } from "_components/navigation/move";

import "./Error404.scss";

const Error404 = () => {
    useEffect(() => {
        move(0, "#eb4a4a");
    }, []);

    return (
        <Layout className="error-page">
            <Header />
            <div className="error404">
                <span> Page not found 404 </span>
            </div>
        </Layout>
    );
};

export default Error404;
