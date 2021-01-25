import Layout from "_components/layout";

import "./Blog.scss";

const Blog = ({ children }) => (
    <Layout className="blog">
        {children}
    </Layout>
);

export default Blog;
