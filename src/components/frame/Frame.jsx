import Banner from "_components/banner";
import Footer from "_components/footer";

const Frame = ({ children }) => (
    <div className="frame">
        <Banner />
        {children}
        <Footer />
    </div>
);

export default Frame;
