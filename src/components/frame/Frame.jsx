import { withRouter } from "react-router-dom";
import Header from "_components/layouts/header";
import Footer from "_components/layouts/footer";

const Frame = ({ children, location }) => {
    const isIndexRoute = location.pathname === "/";

    return (
        <div className="frame">
            <Header 
                theme={isIndexRoute ? "light" : "dark"}
            />
            {children}
            <Footer />
        </div>
    );
};

export default withRouter(Frame);
