import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Your comprehensive destination ",
          "For measuring Water Turbidity, pH, and Temperature",
          "Providing you with accurate information to maintain the cleanliness and health of your water.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
      }}
    />
  );
}

export default Type;
