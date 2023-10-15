import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeItem }) => {
  return (
    <section className="tours">
      <div className="title">
        <h3>Our torus</h3>
        <div className="title-underline"></div>
      </div>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeItem={removeItem} />;
      })}
    </section>
  );
};

export default Tours;
