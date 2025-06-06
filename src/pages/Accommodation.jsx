import React from "react";
import { useParams } from "react-router-dom";
import accommodations from "../data/accommodations.json";
import Gallery from "../components/Gallery";
import Collapse from "../components/Collapse";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import NotFound from "./NotFound";

function Accommodation() {
  const { id } = useParams();
  const accommodation = accommodations.find(acc => acc.id === id);

  if (!accommodation) return <NotFound />;

  return (
    <section className="accommodation">
      <Gallery pictures={accommodation.pictures} />
      <div className="accommodation-header">
        <div>
          <h1>{accommodation.title}</h1>
          <p>{accommodation.location}</p>
          <div className="tags">
            {accommodation.tags.map(tag => <Tag key={tag} tag={tag} />)}
          </div>
        </div>
        <div className="host-rating">
          <div className="host">
            <span>{accommodation.host.name}</span>
            <img src={accommodation.host.picture} alt={accommodation.host.name} />
          </div>
          <Rating rating={parseInt(accommodation.rating, 10)} />
        </div>
      </div>
      <div className="accommodation-details">
        <Collapse title="Description" content={accommodation.description} />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {accommodation.equipments.map(eq => <li key={eq}>{eq}</li>)}
            </ul>
          }
        />
      </div>
    </section>
  );
}

export default Accommodation;
