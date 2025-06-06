import React from "react";

import accommodations from "../data/accommodations.json";
import Card from "../components/Card";

function Home() {
  return (
    <section>
      <h1>Nos hébergements</h1>
      <div className="cards">
        {accommodations.map(acc => (
          <Card key={acc.id} accommodation={acc} />
        ))}
      </div>
    </section>
  );
}

export default Home;