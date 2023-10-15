import React from "react";

const Tour = ({ image, info, name, price, id, removeItem }) => {
  return (
    <article className="single-tour">
      <span className="tour-price">${price}</span>
      <img src={image} alt={name} className="img" />
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{info}</p>
        <button
          type="button"
          className="delete-btn btn-block btn"
          onClick={() => removeItem(id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
