"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadFull } from "tsparticles";

export default function LoadingScreen() {
  const text = "Hello, World!";
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [init, setInit] = useState(false);
  useEffect(() => {
    const typing = setInterval(() => {
      setTitle((prevTitleValue) => {
        const result = prevTitleValue ? prevTitleValue + text[count] : text[0];
        setCount(count + 1);
        if (count >= text.length) {
          setFinished(true);
          clearInterval(typing);
          return prevTitleValue;
        }
        return result;
      });
    }, 100);
    return () => {
      clearInterval(typing);
    };
  });
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  useEffect(() => {
    document.title = "SuHawn portfolio";
  });
  return (
    <>
      <div
        className={`flex items-center justify-center h-screen
        ${
          finished ? "sm:text-8xl text-5xl" : "sm:text-5xl text-3xl"
        } transition-all duration-500`}
      >
        {title}
      </div>
      {init && (
        <Particles
          id="tsparticles"
          style={{ position: "absolute", zIndex: -1 }}
          options={{
            particles: {
              number: {
                value: 400,
                density: {
                  enable: true,
                },
              },
              color: {
                value: `#19cb46`,
              },
              shape: {
                type: "star",
              },
              opacity: {
                value: { min: 0.3, max: 1 },
                animation: {
                  enable: true,
                  speed: 0.5,
                  sync: false,
                },
              },
              size: {
                value: { min: 1, max: 2 },
              },
              move: {
                enable: true,
                speed: { min: 2, max: 4 },
                direction: "bottom",
                straight: true,
                outModes: { default: "out" },
              },
            },
          }}
        />
      )}
    </>
  );
}
