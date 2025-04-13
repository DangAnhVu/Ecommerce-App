function Footer() {
    return (
        <footer className="bg-dark text-white mt-5 py-4 animate-fade-in">
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <h5 className="fw-bold">Về chúng tôi</h5>
                        <p className="small">
                            Chúng tôi cung cấp giải pháp sáng tạo cho doanh
                            nghiệp & cá nhân hiện đại.
                        </p>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <h5 className="fw-bold">Liên hệ</h5>
                        <ul className="list-unstyled small">
                            <li>Email: danganhvupro3z@gmail.com</li>
                            <li>Điện thoại: 0387986749</li>
                            <li>Địa chỉ: TP. Hồ Chí Minh</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5 className="fw-bold">Theo dõi chúng tôi</h5>
                        <div className="d-flex justify-content-center gap-3">
                            <a
                                href="https://fb.com/DangAnhVu19623"
                                className="text-white social-icon"
                            >
                                <i className="bi bi-facebook fs-4"></i>
                            </a>
                            <a href="#" className="text-white social-icon">
                                <i className="bi bi-instagram fs-4"></i>
                            </a>
                            <a
                                href="https://github.com/DangAnhVu"
                                className="text-white social-icon"
                            >
                                <i className="bi bi-github fs-4"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="my-4 border-light" />
                <p className="mb-0 small">
                    &copy; {new Date().getFullYear()} Your Company. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
