function Contact() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div
                        className="card p-4 shadow-lg border-0 rounded-4"
                        style={{ backgroundColor: "#f8f9fa" }}
                    >
                        <h2 className="card-title mb-4 text-primary fw-bold d-flex align-items-center">
                            <i className="bi bi-envelope-fill me-2"></i>
                            Liên hệ với chúng tôi
                        </h2>
                        <form>
                            <div className="mb-3">
                                <label
                                    htmlFor="name"
                                    className="form-label fw-semibold"
                                >
                                    Họ và tên
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Nhập họ tên của bạn"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="email"
                                    className="form-label fw-semibold"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Nhập địa chỉ email"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="message"
                                    className="form-label fw-semibold"
                                >
                                    Nội dung
                                </label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    rows="5"
                                    placeholder="Nhập nội dung tin nhắn"
                                ></textarea>
                            </div>
                            <div className="d-grid">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg"
                                >
                                    Gửi Tin Nhắn
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
