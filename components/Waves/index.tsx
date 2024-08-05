"use client";
import React from "react";
import Wave from "react-wavify";

const Waves = () => {
  return (
    <Wave
      fill="#004C93"
      paused={false}
      options={{
        height: 20,
        amplitude: 40,
        speed: 0.15,
        points: 3,
      }}
    />
  );
};

export default Waves;
