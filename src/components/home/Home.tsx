import React, { useState } from "react";
import { MenuPage, LandingPage } from "../../components";
import "./style.scss";

const Home = () => {
  const [isLanding, setIsLanding] = useState(true);

  if (isLanding) return <LandingPage />;

  return <MenuPage />;
};

export default Home;
