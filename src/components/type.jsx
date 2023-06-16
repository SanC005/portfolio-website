import React from "react";
import Typewriter from "typewriter-effect";

function type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Computer Science Student",
          "Web Developer",
          "C++ Coder",
          "AWS Cloud Practitioner",
          "AI-ML Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default type;