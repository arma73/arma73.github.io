import Header from "_components/layouts/header";
import Footer from "_components/layouts/footer";

const Frame = ({ children }) => (
    <div className="frame">
        <Header />
        {children}
        <Footer />
    </div>
);

export default Frame;
