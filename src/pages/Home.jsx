import React from "react";
import Banner from "../components/Banner";
import CardGrid from "../components/CardGrid";
import { assetUrl } from "../utils/assets";

function Home() {
  return (
    <main className="page-content">
      <Banner
        image={assetUrl("images/image-source-1.webp")}
        altText="Vue d'une maison de location immobilière"
        text="Chez vous, partout et ailleurs"
      />

      <CardGrid />
    </main>
  );
}

export default Home;