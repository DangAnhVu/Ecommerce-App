/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [activeCategory, setActiveCategory] = useState("all");
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }
            return () => {
                componentMounted = false;
            };
        };
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                {[...Array(8)].map((_, index) => (
                    <div className="col-md-3 mb-4" key={index}>
                        <div className="card h-100 border-0 shadow-sm">
                            <Skeleton height={250} />
                            <div className="card-body">
                                <Skeleton height={20} width="70%" />
                                <Skeleton
                                    height={15}
                                    width="40%"
                                    style={{ marginTop: "10px" }}
                                />
                                <Skeleton
                                    height={40}
                                    width="50%"
                                    style={{ marginTop: "15px" }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </>
        );
    };

    const filterProduct = (type) => {
        const updateList = data.filter((x) => x.category === type);
        setFilter(updateList);
        setActiveCategory(type);
    };

    const ShowProducts = () => {
        return (
            <>
                <div className="filter-buttons text-center mb-5">
                    <div
                        className="btn-group btn-group-lg flex-wrap"
                        role="group"
                        aria-label="Product categories"
                    >
                        <button
                            className={`btn ${
                                activeCategory === "all"
                                    ? "btn-dark"
                                    : "btn-outline-dark"
                            } rounded-0 px-4`}
                            onClick={() => {
                                setFilter(data);
                                setActiveCategory("all");
                            }}
                        >
                            All
                        </button>
                        <button
                            className={`btn ${
                                activeCategory === "men's clothing"
                                    ? "btn-dark"
                                    : "btn-outline-dark"
                            } rounded-0 px-4`}
                            onClick={() => filterProduct("men's clothing")}
                        >
                            Men's Clothing
                        </button>
                        <button
                            className={`btn ${
                                activeCategory === "women's clothing"
                                    ? "btn-dark"
                                    : "btn-outline-dark"
                            } rounded-0 px-4`}
                            onClick={() => filterProduct("women's clothing")}
                        >
                            Women's Clothing
                        </button>
                        <button
                            className={`btn ${
                                activeCategory === "jewelery"
                                    ? "btn-dark"
                                    : "btn-outline-dark"
                            } rounded-0 px-4`}
                            onClick={() => filterProduct("jewelery")}
                        >
                            Jewelery
                        </button>
                        <button
                            className={`btn ${
                                activeCategory === "electronics"
                                    ? "btn-dark"
                                    : "btn-outline-dark"
                            } rounded-0 px-4`}
                            onClick={() => filterProduct("electronics")}
                        >
                            Electronics
                        </button>
                    </div>
                </div>

                <div className="row">
                    {filter.map((product) => (
                        <div
                            className="col-md-6 col-lg-3 mb-4"
                            key={product.id}
                        >
                            <div className="card h-100 border-0 product-card">
                                <div className="product-img-container p-3 bg-light d-flex align-items-center justify-content-center">
                                    <img
                                        src={product.image}
                                        className="card-img-top product-img p-2"
                                        alt={product.title}
                                        style={{
                                            maxHeight: "200px",
                                            objectFit: "contain",
                                        }}
                                    />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-bold text-truncate mb-1">
                                        {product.title.length > 22
                                            ? `${product.title.substring(
                                                  0,
                                                  22
                                              )}...`
                                            : product.title}
                                    </h5>
                                    <div className="mb-2">
                                        <small className="text-muted text-uppercase">
                                            {product.category}
                                        </small>
                                    </div>
                                    <p className="card-text h5 text-dark fw-bold mb-3">
                                        ${product.price.toFixed(2)}
                                    </p>
                                    <NavLink
                                        to={`/product/${product.id}`}
                                        className="btn btn-outline-dark w-100 rounded-0"
                                    >
                                        View Product
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filter.length === 0 && !loading && (
                    <div className="col-12 text-center py-5">
                        <h3 className="text-muted">No products found</h3>
                    </div>
                )}

                <style>{`
                    .product-card {
                        transition: all 0.3s ease;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    }

                    .product-card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
                    }

                    .product-img {
                        transition: all 0.5s ease;
                    }

                    .product-card:hover .product-img {
                        transform: scale(1.05);
                    }

                    .product-img-container {
                        height: 220px;
                        overflow: hidden;
                    }

                    .filter-buttons .btn {
                        border-radius: 0;
                        font-weight: 500;
                        letter-spacing: 0.5px;
                        transition: all 0.3s;
                    }

                    .filter-buttons .btn-outline-dark:hover {
                        background-color: #343a40;
                        color: white;
                    }

                    @media (max-width: 768px) {
                        .filter-buttons .btn {
                            margin: 2px;
                            font-size: 0.8rem;
                            padding: 8px 12px;
                        }
                    }
                `}</style>
            </>
        );
    };

    return (
        <div className="products-section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h2 className="display-6 fw-bold text-center">
                            Latest Products
                        </h2>
                    </div>
                </div>
                <div className="row">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    );
};

export default Products;
