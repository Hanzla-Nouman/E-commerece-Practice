import React, { useEffect, useState,useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import { useParams } from "react-router-dom"; // Import useParams hook
import { fetchProductDetails } from "../store/productActions";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ReviewCard from "./ReviewCard";
import Loader from "./Loader";
import ReactStars from "react-rating-stars-component";
import { addItemsToCart } from "../store/cartActions";

const ProductDetails = () => {
 

  const { id } = useParams(); // Access route parameters using useParams hook
  const dispatch = useDispatch();
  
  const [totalItems, setTotalItems] = useState(1);
  
  const { cartItems } = useSelector(
    (state) => state.cartReducer
  );
  console.log(cartItems)
  
  const { product, loading, error } = useSelector(
    (state) => state.productDetailsReducer
  );
  // const notify = () => toast(`${product.name} added to cart ${totalItems}`);
  const options = {
    edit: false,
    value: product.ratings,
    color: "gray",
    activeColor: "#e91",
    size: 20,
    isHalf: true,
  };
  const optionsCarousel = {
    autoPlay: 1,
    infiniteLoop: 1,
    autoFocus: 1,
    showIndicators: 1,
    useKeyboardArrows: 1,
    showStatus: 0,
    showArrows: 0,
    interval: 4000,
  };

  useEffect(() => {
    dispatch(fetchProductDetails(id)); // Use the id obtained from useParams
  }, [dispatch, id]);

  const submitReviewToggle = () => {};
  const decreaseQuantity = () => {
    setTotalItems((totalItems) => totalItems - 1);
  };
  const increaseQuantity = () => {
    setTotalItems((totalItems) => totalItems + 1);
  };
  const addToCartHandler = async() => {
    await dispatch(addItemsToCart(id,totalItems,cartItems))
    console.log("success",id,"=======",totalItems,"===========",cartItems)
    // notify()
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "40%",
                height: "30%",
                margin: "50px 70px",
              }}
            > 
              <Carousel {...optionsCarousel}>
                {product.images &&
                  product.images.map((image) => (
                    <div key={image._id}>
                      <img src={image.url} />
                    </div>
                  ))}
              </Carousel>
            </div>
            <div
              style={{
                margin: "40px ",

                width: "500px",
              }}
            >
        <ToastContainer />

              <div>
                <div>
                  <h2 className="text-3xl font-semibold">{product.name}</h2>
                  <span
                    className=" italic font-medium text-md"
                    style={{ color: "rgb(107 114 128)" }}
                  >
                    # {product._id}
                  </span>
                </div>

                <div className="flex   items-center font-semibold">
                  <ReactStars {...options} />
                  <a href="#reviews" >
                    <span className="font-semibold ml-3 link-hover text-slate-800 cursor-pointer">
                      {" "}
                      ({product.numOfReviews} Reviews)
                    </span>
                  </a>
                </div>

                <div className="">
                  <h1
                    className="text-3xl font-bold"
                    style={{ color: "#234" }}
                  >{`$${product.price}`}</h1>
                  <div className="">
                    <div className="mt-2 mb-2" style={{ display: "flex" }}>
                      <button
                        disabled={totalItems === 1}
                        className="button-input uni"
                        onClick={decreaseQuantity}
                      >
                        <span className="material-symbols-outlined ">remove</span>
                      </button>
                      
                      <input
                        className=" bg-base-300 count-input    "
                        readOnly
                        value={totalItems}
                      />
           
                      <button
                      disabled={totalItems>=product.Stock}
                        className="button-input font-black uni"
                        onClick={increaseQuantity}
                      >
                        <span className="material-symbols-outlined">add</span>
                      </button>
                    </div>
                    <button
                      className="btn btn-primary mt-2 mb-3 font-bold text-md "
                      disabled={product.Stock < 1 ? true : false}
                      onClick={addToCartHandler}
                      
                    >
                      Add to Cart
                      <span className="material-symbols-outlined">
                        shopping_cart
                      </span>
                    </button>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <span className="font-semibold">Status: </span>

                      <b
                        className={
                          product.Stock > 1
                            ? "text-green-800 "
                            : "text-red-800 "
                        }
                        style={{ marginLeft: "10px" }}
                      >
                        {product.Stock < 1 ? "OutOfStock" : "InStock"}
                      </b>
                    </span>
                  </div>
                </div>

                {/* <div className="detailsBlock-4 font-bold">Description :</div> */}
                {/* <span className="font-semibold italic">{product.description}</span> */}

      <div className=" ">
                <button
                  className="btn-submit "
                  onClick={submitReviewToggle}
                >
                  Submit a Review
                </button>
                </div>
              </div>
            </div>
          </div>
          <div className="divider" style={{ marginTop: "-40px" }}>
            <h3 className="reviewsHeading text-4xl font-bold">REVIEWS</h3>
          </div>

          <div className="mb-3" id="reviews" >
            {product.reviews && product.reviews[0] ? (
              <div className="reviews grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
                {product.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
              </div>
            ) : (
              <span className="noReviews">No Reviews Yet</span>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
