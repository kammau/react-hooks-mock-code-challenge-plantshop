import React, { useState } from "react";

function PlantCard({ plant }) {
  const {id, name, image, price} = plant;
  const [stock, setStock] = useState("In Stock");
  const [className, setClassN] = useState("primary")

  function stockChange() {
    if (stock === "In Stock") {
      setStock("Out of Stock")
      setClassN("")
    } else {
      setStock("In Stock")
      setClassN("primary")
    }
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button className={className} onClick={stockChange}>{stock}</button>
    </li>
  );
}

export default PlantCard;
