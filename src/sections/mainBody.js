import React, { useEffect, useState, useContext } from "react";
import { ComponentStateContext } from "../Contexts/ComponentStateContext";
import Articles from "./articles";
import Features from "./features";
import Hero from "./hero";

const MainBody = () => {
  const [overlayState, setOverlayState] = useContext(ComponentStateContext);
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Hero />
      <Features />
      <Articles />
    </div>
  );
};

export default MainBody;
