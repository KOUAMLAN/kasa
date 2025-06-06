import React from "react";
import { Link } from "react-router-dom";

function Card({ accommodation }) {
  return (
    <Link to={`/accommodation/${accommodation.id}`} className="card">
      <img src={accommodation.cover} alt={accommodation.title} style={{ width: "100%" }} />
      <h3>{accommodation.title}</h3>
      <p>{accommodation.location}</p>
    </Link>
  );
}

export default Card;