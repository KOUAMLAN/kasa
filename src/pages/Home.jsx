import React from "react";
import Banner from "../components/Banner";
import CardGrid from "../components/CardGrid";
import HomeBanner from "../assets/images/home-banner.webp";

function Home() {
  return (
    <main className="page-content">
      <Banner
        image={HomeBanner}
        altText="Vue d'une maison de location immobilière"
        text="Chez vous, partout et ailleurs"
      />

      <CardGrid />
    </main>
  );
}

export default Home;