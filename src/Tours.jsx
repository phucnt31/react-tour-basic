import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeItem }) => {
  return (
    <section className="tours">
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeItem={removeItem} />;
      })}
    </section>
  );
};

export default Tours;
