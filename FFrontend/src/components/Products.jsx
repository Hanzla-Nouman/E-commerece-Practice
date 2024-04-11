import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./ProductCard";
import { fetchProduct } from "../store/actions";
import Loader from "./Loader";
import { useInputState } from "../context/inputContext";

const Products = () => {
  const dispatch = useDispatch();
  const {result} = useInputState()
  const { products, loading } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
         <div style={{ textAlign: "center", marginTop: "30px" }}>
             <div className="divider" >
            <h1 className="text-3xl font-bold">All Products</h1>

          </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            margin: "0  5px",
          }}
        >
          { products &&
            products.map((product) => (
              <div
                key={product._id}
                style={{
                  flex: "0 0 25%",
                  maxWidth: "22%", 
                  padding: "0 15px",
                  boxSizing: "border-box",
                }}
              >
                <Product product={product} />
              </div>
            ))}
        </div>
        </div>
      )}
    </>
  );
};

export default Products;
