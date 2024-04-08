import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom"; // Import useParams hook
import { fetchProductDetails } from "../store/actions";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Navbar from "./Navbar";
import ReviewCard from "./ReviewCard";
import Loader from "./Loader";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); // Access route parameters using useParams hook

  const { product, loading, error } = useSelector(
    (state) => state.productDetailsReducer
  );

  useEffect(() => {
    dispatch(fetchProductDetails(id)); // Use the id obtained from useParams
  }, [dispatch, id]);

  const submitReviewToggle = () => {};
  const decreaseQuantity = () => {};
  const increaseQuantity = () => {};
  const addToCartHandler = () => {};

  return (
    <>
    {loading? (<Loader/>):
      (<div
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
              margin: "40px",
            }}
          >
            <Carousel>
              {product.images &&
                product.images.map((image) => (
                  <div>
                    <img key={image.url} src={image.url} />
                  </div>
                ))}
            </Carousel>
          </div>
          <div
            style={{
              margin: "40px",
            }}
          >
            <div>
              <div className="">
                <h2 className="text-3xl">{product.name}</h2>
                <p className="font-serif">Product # {product._id}</p>
              </div>
              <div className="">
                <span className=""> ({product.numOfReviews} Reviews)</span>
              </div>

              <div className="">
                <h1 className="text-3xl">{`$${product.price}`}</h1>
                <div className="">
                  <div
                    className=""
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <button className="btn" onClick={decreaseQuantity}>
                      -
                    </button>
                    <input
                      className="input input-bordered w-full max-w-xs"
                      readOnly
                      type="number"
                    />
                    <button className="btn " onClick={increaseQuantity}>
                      <b style={{ fontSize: "20px" }}>+</b>
                    </button>
                  </div>
                  <button
                    className="btn btn-primary m-2"
                    disabled={product.Stock < 1 ? true : false}
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </button>
                </div>

                <p>
                  Status:
                  <b className={product.stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
              </div>

              <div className="detailsBlock-4">
                Description : <p>{product.description}</p>
              </div>

              <button className="btn btn-primary" onClick={submitReviewToggle}>
                Submit Review
              </button>
            </div>
          </div>
        </div>
        <div className="divider" style={{marginTop:"-40px"}}>
          <h3 className="reviewsHeading text-3xl" >REVIEWS</h3>
        </div>

        <div className="mb-3">
          {product.reviews && product.reviews[0] ? (
            <div className="reviews grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
              {product.reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
        </div>
      </div>)}
    </>
  );
};

export default ProductDetails;
