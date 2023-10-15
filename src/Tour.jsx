import React, { useState } from "react";

const Tour = ({ image, info, name, price, id, removeItem }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="single-tour">
      <span className="tour-price">${price}</span>
      <img src={image} alt={name} className="img" />
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {showInfo ? info : info.slice(0, 200) + "... "}
          <button
            type="button"
            className="info-btn"
            onClick={() => setShowInfo(!showInfo)}
          >
            {showInfo ? "Show less" : "Read more"}
          </button>
        </p>
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
