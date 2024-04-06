import React from "react";
import { AppBar, Box, Grid, Link, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          flexDirection="column"
          p={2}
        >
          <Typography variant="h2" color="inherit">
            HXS SHOP
          </Typography>
          <Grid container spacing={1} minHeight={100}>
            <Grid
              
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Typography variant="body1">
                <Link href="#" underline="none" color={"white"}>
                  {"Home"}
                </Link>
              </Typography>
              <Typography variant="body1">
                <Link href="#" underline="none" color={"white"}>
                  {"Products"}
                </Link>
              </Typography>
              <Typography variant="body1">
                <Link href="#" underline="none" color={"white"}>
                  {"Pricing"}
                </Link>
              </Typography>
              <Typography variant="body1">
                <Link href="#" underline="none" color={"white"}>
                  {"Blogs"}
                </Link>
              </Typography>
            </Grid>
            <Grid
              // lg="4"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
                <Typography variant="body1">
                <Link href="#" underline="none" color={"white"}>
                  {"Home"}
                </Link>
              </Typography>
              <Typography variant="body1">
                <Link href="#" underline="none" color={"white"}>
                  {"Products"}
                </Link>
              </Typography>
              <Typography variant="body1">
                <Link href="#" underline="none" color={"white"}>
                  {"Pricing"}
                </Link>
              </Typography>
              <Typography variant="body1">
                <Link href="#" underline="none" color={"white"}>
                  {"Blogs"}
                </Link>
              </Typography>
            </Grid>
            <Grid
              // lg="4"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
               <Typography variant="body1">
                <Link href="#" underline="none" color={"white"}>
                  {"Home"}
                </Link>
              </Typography>
              <Typography variant="body1">
                <Link href="#" underline="none" color={"white"}>
                  {"Products"}
                </Link>
              </Typography>
              <Typography variant="body1">
                <Link href="#" underline="none" color={"white"}>
                  {"Pricing"}
                </Link>
              </Typography>
              <Typography variant="body1">
                <Link href="#" underline="none" color={"white"}>
                  {"Blogs"}
                </Link>
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body1" color="inherit">
            © 2024 Your Company. All rights reserved.
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
