import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";

const Sidebar = ({
  minValue,
  maxValue,
  handleMinChange,
  handleMaxChange,
  handleApply,
  handleCategory,
  categories,
  options,
  setRatings,
  category
}) => {
  return (
    <>
      <div className="drawer" style={{ zIndex: "100" }}>
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <h1 className="text-3xl font-bold mb-8 mt-3">UrbanAura</h1>

            <li style={{ fontSize: "20px", fontWeight: "500" }}>Pricing</li>
            <div className="divider" style={{ margin: "1px 1px" }}></div>
            <div style={{ display: "flex", width: "40px" }}>
              <input
                className="num-input"
                style={{ display: "flex", width: "70px", margin: "0px 5px" }}
                type="number"
                value={minValue}
                onChange={handleMinChange}
                placeholder="Min"
              />$
              <input
                className="num-input"
                style={{ display: "flex", width: "70px", margin: "0px 5px" }}
                type="number"
                value={maxValue}
                onChange={handleMaxChange}
                placeholder="Max"
              />$
            </div>
            <li
              style={{ fontSize: "20px", fontWeight: "500", marginTop: "20px" }}
            >
              Categories
            </li>
            <div className="divider" style={{ margin: "1px 1px" }}></div>
            <ul className="menu w-84 min-h-full bg-base-200 text-base-content">
              {categories.map((category) => (
                <div
                  className="cat-lists"
                  style={{ fontSize: "15px", fontWeight: "500" }}
                  key={category}
                  onClick={handleCategory}
                >
                  <div style={{ display: "flex" }}>
                  {category}
                  </div>
                </div>
              ))}
             
              <li
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  marginTop: "0px",
                }}
              >
                Ratings
              </li>
              <div className="divider" style={{ margin: "1px 1px" }}></div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "400",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div className="side-star" onClick={() => setRatings(4)}>
                  <div style={{ display: "flex", alignItems: "baseline" }}>
                    <ReactStars {...options} value={4} /> and above
                  </div>
                </div>
                <div className="side-star" onClick={() => setRatings(3)}>
                  <div style={{ display: "flex", alignItems: "baseline" }}>
                    <ReactStars {...options} value={3} /> and above
                  </div>
                </div>
                <div className="side-star" onClick={() => setRatings(2)}>
                  <div style={{ display: "flex", alignItems: "baseline" }}>
                    <ReactStars {...options} value={2} /> and above
                  </div>
                </div>
                <div className="side-star" onClick={() => setRatings(1)}>
                  <div style={{ display: "flex", alignItems: "baseline" }}>
                    <ReactStars {...options} value={1} /> and above
                  </div>
                </div>
              </div>
              <div className="divider" style={{ margin: "1px 1px" }}></div>
            </ul>
            <button
              type="button"
              className="btn btn-primary"
              style={{ marginLeft: "10px" }}
              onClick={handleApply}
            >
              Apply
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
