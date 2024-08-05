"use client";
import React from "react";
import MainSection from "./MainSection";
import CardSection from "./CardSection";
import Descriptions from "./Descriptions";

const LandingPage = () => {
  return (
      <main>
        <section>
          <MainSection />
        </section>
        <section>
          <CardSection />
        </section>
        <section>
          <Descriptions />
        </section>
      </main>
  );
};

export default LandingPage;
