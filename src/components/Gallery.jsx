import React from "react";
import { useState } from "react";

function Gallery({ pictures }) {
  const [index, setIndex] = useState(0);
  const total = pictures.length;

  if (total === 0) return null;

  const prev = () => setIndex(i => (i === 0 ? total - 1 : i - 1));
  const next = () => setIndex(i => (i === total - 1 ? 0 : i + 1));

  return (
    <div className="gallery">
      <img src={pictures[index]} alt={`Photo ${index + 1}`} className="gallery-img" />
      {total > 1 && (
        <>
          <button className="gallery-prev" onClick={prev} aria-label="Précédent">&lt;</button>
          <button className="gallery-next" onClick={next} aria-label="Suivant">&gt;</button>
          <span className="gallery-count">{index + 1}/{total}</span>
        </>
      )}
    </div>
  );
}

export default Gallery;
