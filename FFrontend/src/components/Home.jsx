import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store/actions";
import Loader from "./Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state) => state.productReducer
  );

  useEffect(() => {
    if (error) {
      return alert.show(error);
    }
    dispatch(fetchProduct());
  }, [dispatch,alert]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};

export default Home;
