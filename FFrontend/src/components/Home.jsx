import React, { useEffect, useState } from "react";
import Product from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store/actions";
import Loader from "./Loader";
import { useAlert } from "react-alert";
import Pagination from "react-js-pagination";
import { useInputState } from "../context/inputContext";
import Sidebar from "./Sidebar";

const Home = () => {
  const alert = useAlert();
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  let { result } = useInputState();
  result = result.toLowerCase();
  const { loading, products, error, resultperpage,totalProducts } =
    useSelector((state) => state.productReducer);

  

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
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
          <Sidebar/>
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
            itemClass="page-item"
            linkClass="page-link"
            activeClass="pageItemActive"
            activeLinkClass="pageLinkActive"
          />
          </div>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
