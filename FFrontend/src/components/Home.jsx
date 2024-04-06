import React, { useEffect } from "react";
import Product from "./Product";
// import { productActions } from "../store/product";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/actions";


const Home = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.productReducer);
    console.log(products)
    
    useEffect(() => {
      dispatch(fetchData());
    }, [dispatch]);

//   const product = {
//     name: "Jeans",
//     price: "350",
//   };
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1 className="text-3xl font-bold">Featured Products</h1>

      <div style={{ display: "flex", margin: "0px 30px" }}>
        <Product product={products} />
        <Product product={products} />
        <Product product={products} />
      </div>
    </div>
  );
};

export default Home;
