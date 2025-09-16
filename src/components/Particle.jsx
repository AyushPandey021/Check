import React from "react";
import { Particles } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";

function Particle() {
  const particlesInit = async (engine) => {
    await loadAll(engine); // This is the correct modern setup
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed w-full h-full -z-10"
      options={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              area: 1500,
            },
          },
          links: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            value: 1,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              quantity: 1,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Particle;
