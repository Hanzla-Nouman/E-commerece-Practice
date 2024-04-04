import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Product from "./Product";

const product = {
  images: [
    {
      url: "https://media.istockphoto.com/id/1224545469/photo/close-up-green-sport-pants-sweatpants-jogging-for-men-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=pIBNwe8r3aeRDL5mcgGojtGRqYCYh9xzFeMvV9jaB3I=",
    },
  ],
  name: "Pant Jeans",
  price: "$3000",
  _id: "hanxla",
};

const Home = () => {
  return (
    <>
      <Box
        m={2}
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <Typography textAlign="center" variant="h5" fontWeight="600" margin={4}>
          Featured Products
        </Typography>
        <Box display={"flex"}>
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          
        </Box>
      </Box>
    </>
  );
};

export default Home;
