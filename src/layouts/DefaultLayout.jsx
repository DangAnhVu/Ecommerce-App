import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const DefaultLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default DefaultLayout;
