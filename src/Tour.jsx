import React from "react";

const Tour = ({ image, info, name, price }) => {
  return (
    <div className="single-tour">
      <div className="tour-price">${price}</div>
      <img src={image} alt={name} className="img" />
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default Tour;
