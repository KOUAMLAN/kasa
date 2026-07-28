import React from "react";
import PropTypes from "prop-types";
import "../styles/banner.scss";

function Banner({ image, altText, text }) {
  return (
    <div className="banner">
      <picture>
        <source srcSet={image} type="image/webp" />

        <img
          src={image}
          alt={altText}
          className="banner-image"
          width="1240"
          height="700"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
      </picture>

      <div className="banner-overlay"></div>

      {text && <h1 className="banner-text">{text}</h1>}
    </div>
  );
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default Banner;