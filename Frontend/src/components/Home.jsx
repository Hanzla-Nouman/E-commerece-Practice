import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Product from "./Product";
import Metadata from "./Metadata";
import { getAllProduct } from "../actions/productAction";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );
  console.log(products); // Log the products
  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <>
      <Metadata title="HOME PAGE" />
      <Box
        m={2}
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <Typography
          textAlign="center"
          variant="h5"
          fontWeight="600"
          margin={4}
          borderBottom={2}
          color={"#fff"}
        >
          Featured Products
        </Typography>
        <Box display={"flex"} justifyContent={"space-around"}>
          {products && products.map((product) => <Product product={product} />)}
        </Box>
      </Box>
    </>
  );
};

export default Home;
