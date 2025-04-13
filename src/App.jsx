import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Products from "./component/Products";
import Product from "./component/Product";
import Contact from "./component/Contact";
import About from "./component/About";
import Footer from "./component/Footer";
import Register from "./component/Register";
import Login from "./component/Login";

function App() {
    const location = useLocation();
    const hideLayout = ["/login", "/register"].includes(location.pathname);

    return (
        <>
            {!hideLayout && <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            {!hideLayout && <Footer />}
        </>
    );
}

export default App;
