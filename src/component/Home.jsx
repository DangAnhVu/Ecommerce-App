import Products from "./Products";

const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section with Improved Styling */}
            <div className="hero-section position-relative overflow-hidden mb-5">
                <div className="card text-white border-0 rounded-0">
                    <img
                        src="./assets/bg.jpg"
                        className="card-img img-fluid"
                        alt="New Season Fashion"
                        style={{
                            height: "85vh",
                            objectFit: "cover",
                            objectPosition: "center",
                        }}
                    />

                    {/* Dark Overlay */}
                    <div
                        className="card-img-overlay d-flex flex-column justify-content-center"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-lg-6">
                                    <div className="hero-content p-4 bg-black bg-opacity-25 rounded">
                                        <h1 className="display-4 fw-bold text-uppercase mb-3 text-white">
                                            New Season Arrivals
                                        </h1>
                                        <p className="lead fs-3 mb-4 text-white">
                                            Check out all the trends
                                        </p>
                                        <button className="btn btn-light btn-lg px-4 py-2 fw-semibold rounded-pill">
                                            SHOP NOW
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Latest Products Section */}
            <div className="container mb-5">
                <Products />
            </div>
        </div>
    );
};

export default Home;
