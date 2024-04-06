import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/actions";

const Home = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.productReducer); // Destructure `data` from the state
  const { products, productsCount } = data; // Destructure `products` and `productsCount` from `data`
  console.log(products);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1 className="text-3xl font-bold">Featured Products</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "0  5px",
        }}
      >
        {products.map((product) => (
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
  );
};

export default Home;
