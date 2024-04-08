import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./ProductCard";
import { fetchProduct } from "../store/actions";
import Loader from "./Loader";

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            margin: "0 5px",
          }}
        >
          {products &&
            products.map((product) => (
              <div
                key={product._id}
                style={{
                  flex: "0 0 25%",
                  maxWidth: "25%", // Adjusted maxWidth to 25% to accommodate 4 products in a row
                  padding: "0 15px",
                  boxSizing: "border-box",
                }}
              >
                <Product product={product} />
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Products;
