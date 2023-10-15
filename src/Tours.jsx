import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeItem }) => {
  return (
    <section>
      <div className="title">
        <h3>Our torus</h3>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeItem={removeItem} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
