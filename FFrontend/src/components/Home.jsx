import React, { useEffect, useState } from "react";
import Product from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store/productActions";
import Loader from "./Loader";
import { useAlert } from "react-alert";
import Pagination from "react-js-pagination";
import { useInputState } from "../context/inputContext";
import Sidebar from "./Sidebar";
import Signup from "./Login";
import { logout } from '../store/userActions';
import { useNavigate } from "react-router";


const Home = () => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const alert = useAlert();
  const [currentPage, setCurrentPage] = useState(1);
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0)

  const options = {
    edit: false,
    value: 1,
    color: "#7c7d7d",
    size: window.innerWidth < 600 ? 20 : 25,
    
  };

  const categories = [
    "Electronics",
    "Mechanics",
    "Decoration",
    "Home",
    "Decor",
  ];
 
  let { result } = useInputState();
  result = result.toLowerCase();
  const { loading, products, error, resultperpage,totalProducts,filteredProductsCount } =
    useSelector((state) => state.productReducer);

  
  
    const handleMinChange = (e) => {
      const value = e.target.value;
      setMinValue(value);
    };
  
    const handleMaxChange = (e) => {
      const value = e.target.value;
      setMaxValue(value);
    };

    const handleCategory=(e)=>{
      setCategory(e.target.textContent.toLowerCase()) 
    
    }
 
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const handleApply = () => {
    dispatch(fetchProduct(currentPage, result, minValue, maxValue,category,ratings));
  };

  const filteredProducts = result
    ? products.filter((product) => product.name.toLowerCase().includes(result))
    : products;
 

  useEffect(() => {
    if (error) {
      return alert.show(error);
    }
    dispatch(fetchProduct(currentPage,result));
  }, [dispatch, alert, result,currentPage]);

  
  
  
  
    

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          
          <Sidebar   minValue={minValue}
            maxValue={maxValue}
            handleMinChange={handleMinChange}
            handleMaxChange={handleMaxChange}
            handleApply={handleApply}
            handleCategory={handleCategory}
            categories={categories}
            category={category}
            options={options}
            setRatings={setRatings}/>
            
          <h1 className="text-3xl font-bold">Featured Products</h1>
          
         
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              margin: "0  5px",
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
          
          {resultperpage < totalProducts && (
            <div className="paginationBox">
            <Pagination
            activePage={currentPage}
            itemsCountPerPage={resultperpage}
            totalItemsCount={totalProducts}
            onChange={setCurrentPageNo}
            nextPageText="Next"
            prevPageText="Prev"
            firstPageText="1st"
            lastPageText="Last"
            itemclassName="page-item"
            linkclassName="page-link"
            activeclassName="pageItemActive"
            activeLinkclassName="pageLinkActive"
          />
          </div>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
