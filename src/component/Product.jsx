/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(
                `https://fakestoreapi.com/products/${id}`
            );
            setProduct(await response.json());
            setLoading(false);
        };
        const getRelatedProducts = async () => {
            const res = await fetch(`https://fakestoreapi.com/products`);
            const all = await res.json();

            // Lọc ra sản phẩm hiện tại
            const filtered = all.filter((item) => item.id !== parseInt(id));

            // Lấy 4 phần tử ngẫu nhiên
            const randomItems = filtered
                .sort(() => 0.5 - Math.random())
                .slice(0, 4);

            setRelatedProducts(randomItems);
        };
        getProduct();
        getRelatedProducts();
    }, [id]); // Added id to dependency array

    const Loading = () => {
        return (
            <>
                <div className="col-md-6 mb-4 mb-md-0">
                    <div className="bg-light p-3 rounded">
                        <Skeleton height={500} />
                    </div>
                </div>
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={30} width={150} />
                    <Skeleton height={50} width={300} />
                    <Skeleton height={25} width={120} />
                    <Skeleton height={40} width={100} />
                    <Skeleton height={120} />
                    <div className="d-flex gap-3 mt-4">
                        <Skeleton height={50} width={150} />
                        <Skeleton height={50} width={150} />
                    </div>
                </div>
            </>
        );
    };

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6 mb-4 mb-md-0">
                    <div className="product-img-container bg-light p-4 d-flex align-items-center justify-content-center rounded shadow-sm">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="product-detail-img img-fluid"
                            style={{ maxHeight: "400px", objectFit: "contain" }}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="product-details ps-md-4">
                        <div className="category mb-2">
                            <span className="bg-dark text-white px-3 py-1 text-uppercase rounded-pill small">
                                {product.category}
                            </span>
                        </div>

                        <h1 className="product-title fw-bold mb-3">
                            {product.title}
                        </h1>

                        <div className="d-flex align-items-center mb-3">
                            <div className="rating-badge bg-warning text-dark px-2 py-1 rounded-pill d-inline-flex align-items-center">
                                <i className="fa fa-star me-1"></i>
                                <span className="fw-bold">
                                    {product.rating && product.rating.rate}
                                    <span className="text-muted ms-1">
                                        (
                                        {product.rating && product.rating.count}{" "}
                                        reviews)
                                    </span>
                                </span>
                            </div>
                        </div>

                        <div className="price-container mb-4">
                            <span className="price-label text-muted me-2">
                                Price:
                            </span>
                            <span className="product-price display-6 fw-bold">
                                ${product.price}
                            </span>
                        </div>

                        <div className="description-container mb-4">
                            <h5 className="description-title fw-bold mb-2">
                                Description:
                            </h5>
                            <p className="product-description lead">
                                {product.description}
                            </p>
                        </div>

                        <div className="product-actions d-flex flex-wrap gap-3 mt-4">
                            <button className="btn btn-dark btn-lg px-4 py-2 d-flex align-items-center">
                                <i className="fa fa-shopping-cart me-2"></i>
                                Add To Cart
                            </button>
                            <NavLink
                                to="/cart"
                                className="btn btn-outline-dark btn-lg px-4 py-2"
                            >
                                <i className="fa fa-arrow-right me-2"></i>
                                Go To Cart
                            </NavLink>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    return (
        <div className="product-detail-section">
            <div className="container py-5">
                {/* Breadcrumbs */}
                <nav aria-label="breadcrumb" className="mb-4">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <NavLink
                                to="/"
                                className="text-decoration-none text-dark"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="breadcrumb-item">
                            <NavLink
                                to="/products"
                                className="text-decoration-none text-dark"
                            >
                                Products
                            </NavLink>
                        </li>
                        <li
                            className="breadcrumb-item active"
                            aria-current="page"
                        >
                            {!loading && product.title
                                ? product.title.substring(0, 20) + "..."
                                : "Product Details"}
                        </li>
                    </ol>
                </nav>
                <div className="row">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
                {/* Related Products Section (mockup) */}
                {!loading && relatedProducts.length > 0 && (
                    <div className="related-products mt-5 pt-5 border-top">
                        <h3 className="mb-4 fw-bold">You May Also Like</h3>
                        <div className="row">
                            {relatedProducts.map((item) => (
                                <div className="col-md-3 mb-4" key={item.id}>
                                    <div className="card border-0 shadow-sm product-card h-100">
                                        <div
                                            className="p-3 bg-light d-flex align-items-center justify-content-center"
                                            style={{ height: "180px" }}
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="img-fluid"
                                                style={{
                                                    maxHeight: "140px",
                                                    objectFit: "contain",
                                                }}
                                            />
                                        </div>
                                        <div className="card-body text-center">
                                            <h6 className="card-title">
                                                {item.title.substring(0, 40)}...
                                            </h6>
                                            <p className="text-muted">
                                                ${item.price}
                                            </p>
                                            <NavLink
                                                to={`/product/${item.id}`}
                                                className="btn btn-sm btn-outline-dark mt-2"
                                            >
                                                View Details
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <style>{`
                .product-detail-img {
                    transition: all 0.5s ease;
                }

                .product-img-container:hover .product-detail-img {
                    transform: scale(1.05);
                }

                .product-card {
                    transition: all 0.3s ease;
                }

                .product-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
                }

                .product-title {
                    font-size: 2.2rem;
                    line-height: 1.2;
                }

                @media (max-width: 768px) {
                    .product-title {
                        font-size: 1.8rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default Product;
