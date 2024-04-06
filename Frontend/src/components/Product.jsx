import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ReactStars from "react-rating-stars-component";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "@mui/material";

export default function Product({ product }) {
  const options = {
    edit: false,
    value: 3.5,
    activeColor:"tomato",
    color:"#7c7d7d",
    size: window.innerWidth  < 600 ? 20 : 25,
    isHalf: true
  };
  return (
    <Box m={3}  >
      <Card sx={{ maxWidth: 345 }}  >
        <Box p={2} >
        <Link href={"#"} underline="none" color="inherit"  >
          <CardActionArea >
            {product.images &&
              product.images.length > 0 && (
                <CardMedia
                  component="img"
                  height="140"
                  image={product.images[0].url}
                />
              )}
            <CardContent>
              <Box display={"flex"} justifyContent={"space-between"} >
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Box display={"flex"}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="#2ba5b5"
                  >
                    {product.price}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions>
            <Box>
          <ReactStars {...options}/>
          {/* <span>(256 reviews)</span> */}
          <Button size="small" color="primary">
            Add to Cart
          </Button>
          </Box>
        </CardActions>
        </Box>
      </Card>
    </Box>
  );
}
