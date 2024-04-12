import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const options = {
    edit: false,
    value: product.rating,
    activeColor: "tomato",
    color: "#7c7d7d",
    size: window.innerWidth < 600 ? 20 : 25,
    isHalf: true,
  };
  return (
    <div
      className="card card-compact w-96  bg-base-100 shadow-xl "
      style={{ margin: "30px 0px", width: "280px", borderRadius: "3px"  }}
    >
      <Link to={`/product/${product._id}`}>
        <div className="bg-base-200">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h1 className="card-title">{product.name}</h1>
            <span className="text-slate-400  ">Rs.{product.price}</span>
            <ReactStars {...options} />
            <span>{product.reviews.length} reviews</span>
          </div>
        </div>
      </Link>
      <div className="card-actions justify-end bg-base-400" style={{ margin: "12px 10px" }}>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-primary">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
