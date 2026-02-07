/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const PlexusBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 120,
      particles: {
        number: {
          value: 60,
          density: { enable: true, area: 800 },
        },
        color: {
          value: ["#00B4D8", "#48CAE4", "#90E0EF", "#0077B6"],
        },
        shape: { type: "circle" },
        opacity: {
          value: { min: 0.4, max: 0.7 },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
        },
        size: {
          value: { min: 2, max: 5 },
        },
        links: {
          enable: true,
          distance: 160,
          color: "random",
          opacity: 0.4,
          width: 1.5,
          triangles: {
            enable: true,
            opacity: 0.05,
          },
        },
        move: {
          enable: true,
          speed: 1.2,
          direction: "none",
          random: true,
          straight: false,
          outModes: "out", // Bounce er bodole out dile shora-shori smooth hoy
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse", // Cursor asle particles dure shore jabe
          },
        },
        modes: {
          repulse: {
            distance: 150, // Koto dur porjonto shorbe
            duration: 0.4,
          },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <div className="absolute inset-0 w-full h-full -z-10 bg-gradient-to-br from-[#f0f9ff] via-white to-[#e0f2fe] overflow-hidden">
      {/* Dynamic Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-cyan-300/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[100px]" />
      <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] bg-sky-200/30 rounded-full blur-[80px]" />

      {init && (
        <Particles
          id="tsparticles"
          className="w-full h-full"
          options={options as any}
        />
      )}

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#48CAE4 1px, transparent 1px), linear-gradient(90deg, #48CAE4 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
};

export default PlexusBackground;
