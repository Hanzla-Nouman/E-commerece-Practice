import React from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch ,useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { addItemsToCart } from "../store/cartActions";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const options = {
    edit: false,
    value: product.rating,
    color: "#7c7d7d",
    size: window.innerWidth < 600 ? 20 : 25,
    isHalf: true,
  };
  const addToCartHandler = async() => {
    await dispatch(addItemsToCart(product._id,1))
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
              src= {product.images[0].url}
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
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-primary" onClick={addToCartHandler}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
