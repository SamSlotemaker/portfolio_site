import React from "react";
import "./style.scss";

const LandingPage = () => {
  return (
    <section className="galaxy_page">
      <section className="galaxy">
        <button className="central_planet">
          <div className="hat">
            <div className="hole">
              <div className="band"></div>
            </div>
            <div className="top"></div>
          </div>
        </button>
        <div className="planet planet_1">
          <div className="ring"></div>
        </div>
        <div className="planet planet_2"></div>
        <div className="planet planet_3"></div>
      </section>
    </section>
  );
};

export default LandingPage;
