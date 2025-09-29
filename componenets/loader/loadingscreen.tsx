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

  // 타이핑 효과 (수정됨)
  useEffect(() => {
    if (count >= text.length) {
      setFinished(true);
      return;
    }

    const typing = setTimeout(() => {
      setTitle((prev) => prev + text[count]);
      setCount(count + 1);
    }, 100);

    return () => clearTimeout(typing);
  }, [count]);

  // Particles 엔진 초기화
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // 문서 타이틀 설정
  useEffect(() => {
    document.title = "SuHawn portfolio";
  }, []);

  return (
    <>
      <div
        className={`flex items-center justify-center h-screen
        ${
          finished ? "sm:text-8xl text-5xl" : "sm:text-5xl text-3xl"
        } transition-all duration-500  relative z-10`}
      >
        {title}
      </div>
      {init && (
        <Particles
          id="tsparticles"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            background: "linear-gradient(to bottom, #0a0e27, #1a1a2e, #16213e)",
          }}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            particles: {
              number: {
                value: 200,
                density: {
                  enable: true,
                },
              },
              color: {
                value: ["#cdcdcd"],
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: { min: 0.1, max: 1 },
                animation: {
                  enable: true,
                  speed: 0.3,
                  sync: false,
                },
              },
              size: {
                value: { min: 0.5, max: 3 },
              },
              move: {
                enable: true,
                speed: { min: 0.1, max: 0.5 },
                direction: "none",
                random: true,
                straight: false,
                outModes: {
                  default: "out",
                },
              },
              twinkle: {
                particles: {
                  enable: true,
                  frequency: 0.05,
                  opacity: 1,
                },
              },
            },
            interactivity: {
              detectsOn: "canvas",
              events: {
                onHover: {
                  enable: true,
                  mode: "bubble",
                },
              },
              modes: {
                bubble: {
                  distance: 200,
                  size: 6,
                  duration: 2,
                  opacity: 1,
                },
              },
            },
            emitters: [
              {
                position: {
                  x: 50,
                  y: 50,
                },
                rate: {
                  delay: 0.2,
                  quantity: 2,
                },
                size: {
                  width: 0,
                  height: 0,
                },
                particles: {
                  move: {
                    angle: {
                      value: 45,
                      offset: 0,
                    },
                    speed: 1,
                    outModes: {
                      default: "destroy",
                    },
                  },
                  opacity: {
                    value: { min: 0.1, max: 0.5 },
                  },
                  size: {
                    value: { min: 1, max: 2 },
                  },
                  life: {
                    duration: {
                      value: 10,
                    },
                  },
                },
              },
            ],
          }}
        />
      )}
    </>
  );
}
