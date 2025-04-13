function About() {
    return (
        <div className="container mt-5">
            <div className="row align-items-center">
                {/* Ảnh minh hoạ */}
                <div className="col-md-6 mb-4 mb-md-0">
                    <img
                        src="https://i.pinimg.com/736x/6b/28/0b/6b280b960fc507d282a4cb0f6d1ffb85.jpg"
                        alt="About us"
                        className="img-fluid rounded-4 shadow-sm mb-5"
                    />
                </div>

                {/* Nội dung */}
                <div className="col-md-6">
                    <div
                        className="p-4 rounded-4 shadow"
                        style={{ backgroundColor: "#f8f9fa" }}
                    >
                        <h2 className="mb-4 text-primary fw-bold">
                            Về Chúng Tôi
                        </h2>
                        <p>
                            Chào mừng bạn đến với trang web của chúng tôi! Chúng
                            tôi là một đội ngũ đam mê công nghệ, chuyên cung cấp
                            các giải pháp sáng tạo và hiện đại cho khách hàng.
                        </p>
                        <p>
                            Mục tiêu của chúng tôi là mang đến những sản phẩm
                            chất lượng, đáp ứng nhu cầu và vượt qua sự mong đợi
                            của người dùng.
                        </p>
                        <p>
                            Cảm ơn bạn đã ghé thăm trang của chúng tôi! Hy vọng
                            bạn sẽ tìm thấy giá trị tại đây.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
