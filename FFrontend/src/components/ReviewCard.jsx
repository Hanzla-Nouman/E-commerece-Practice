import React from "react";
import ReactStars from "react-rating-stars-component";

const ReviewCard = ({ review }) => {
  const options = {
    value: review.rating,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <>
  

      <div className="w-96 bg-base-200 shadow-md" style={{padding:"15px", borderRadius:"6px"}}>
        <div className="">
            <div style={{display:"flex"}}>
          <img
            style={{ width: "50px" , marginRight:"10px" }}
            src={
              "https://github.com/meabhisingh/mernProjectEcommerce/blob/master/frontend/src/images/Profile.png?raw=true"
            }
            alt="User"
          />
          <h2 className="card-title">{review.name}</h2>
          </div>
          <ReactStars {...options} />
          <p>{review.comment}</p>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
