import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./ProductCard";
import { fetchProduct } from "../store/actions";
import Loader from "./Loader";
import { useInputState } from "../context/inputContext";

const Products = () => {
  const dispatch = useDispatch();
  let { result } = useInputState();
  result = result.toLowerCase()
  const { products, loading } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(fetchProduct());
    
  }, [dispatch, result]);

  const filteredProducts = result
    ? products.filter((product) => product.name.toLowerCase().includes(result))
    : products;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <div className="divider">
            <h1 className="text-3xl font-bold mt-4">All Products</h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              margin: "0 5px",
            }}
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
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
              ))
            ) : (
              <h1
                className="text-3xl font-bold"
                style={{ margin: "200px 0px", fontStyle: "italic" }}
              >
                No Products for "{result}"
              </h1>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Products;

