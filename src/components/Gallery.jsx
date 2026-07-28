

import React, { useState } from "react";

function Gallery({ pictures }) {

  const [index, setIndex] = useState(0);

  const total = pictures.length;

  if (total === 0) return null;


  const prev = () =>
    setIndex(i => (i === 0 ? total - 1 : i - 1));


  const next = () =>
    setIndex(i => (i === total - 1 ? 0 : i + 1));


  return (

    <div className="gallery">

      <img
        src={pictures[index]}
        alt={`Photo du logement ${index + 1}`}
        width="1240"
        height="700"
        fetchPriority={index === 0 ? "high" : "auto"}
        loading={index === 0 ? "eager" : "lazy"}
        decoding="async"
        className="gallery-img"
      />


      {total > 1 && (

        <>

          <button
            className="gallery-prev"
            onClick={prev}
            aria-label="Photo précédente"
          >
            &lt;
          </button>


          <button
            className="gallery-next"
            onClick={next}
            aria-label="Photo suivante"
          >
            &gt;
          </button>


          <span className="gallery-count">
            {index + 1}/{total}
          </span>


        </>

      )}

    </div>

  );

}


export default Gallery;