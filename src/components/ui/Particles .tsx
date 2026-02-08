// "use client";

// import type React from "react";
// import { useEffect, useRef, useState, useCallback } from "react";
// import { cn } from "@/lib/utils";

// interface MousePosition {
//   x: number;
//   y: number;
// }

// function useMousePosition(): MousePosition {
//   const [mousePosition, setMousePosition] = useState<MousePosition>({
//     x: 0,
//     y: 0,
//   });

//   useEffect(() => {
//     const handleMouseMove = (event: MouseEvent) => {
//       setMousePosition({ x: event.clientX, y: event.clientY });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return mousePosition;
// }

// export interface ParticlesProps {
//   className?: string;
//   children?: React.ReactNode;
//   quantity?: number;
//   staticity?: number;
//   ease?: number;
//   size?: number;
//   refresh?: boolean;
//   color?: string;
//   vx?: number;
//   vy?: number;
// }

// function hexToRgb(hex: string): number[] {
//   let normalized = hex.replace("#", "");
//   if (normalized.length === 3) {
//     normalized = normalized
//       .split("")
//       .map((char) => char + char)
//       .join("");
//   }
//   const hexInt = Number.parseInt(normalized, 16);
//   const red = (hexInt >> 16) & 255;
//   const green = (hexInt >> 8) & 255;
//   const blue = hexInt & 255;
//   return [red, green, blue];
// }

// interface Circle {
//   x: number;
//   y: number;
//   translateX: number;
//   translateY: number;
//   size: number;
//   alpha: number;
//   targetAlpha: number;
//   dx: number;
//   dy: number;
//   magnetism: number;
// }

// export const Particles: React.FC<ParticlesProps> = ({
//   className,
//   children,
//   quantity = 1000,
//   staticity = 80, // Smooth mouse repulsion
//   ease = 40, // Fluid movement delay
//   size = 0.6,
//   refresh = false,
//   color = "#2F8BDD",
//   vx = 0.2, // Horizontal drift
//   vy = 0.4, // Vertical drift
// }) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const canvasContainerRef = useRef<HTMLDivElement>(null);
//   const context = useRef<CanvasRenderingContext2D | null>(null);
//   const circles = useRef<Circle[]>([]);
//   const mousePosition = useMousePosition();
//   const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
//   const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
//   const animationRef = useRef<number>();
//   const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

//   const circleParams = useCallback((): Circle => {
//     const x = Math.floor(Math.random() * canvasSize.current.w);
//     const y = Math.floor(Math.random() * canvasSize.current.h);
//     const translateX = 0;
//     const translateY = 0;
//     const pSize = Math.floor(Math.random() * 2) + size;
//     const alpha = 0;
//     const targetAlpha = Number.parseFloat(
//       (Math.random() * 0.6 + 0.1).toFixed(1),
//     );

//     // Balanced Speed: Onek jore na, abar stuck na
//     const dx = (Math.random() - 0.5) * 1.5;
//     const dy = (Math.random() - 0.5) * 1.5;
//     const magnetism = 2 + Math.random() * 4;

//     return {
//       x,
//       y,
//       translateX,
//       translateY,
//       size: pSize,
//       alpha,
//       targetAlpha,
//       dx,
//       dy,
//       magnetism,
//     };
//   }, [size]);

//   const resizeCanvas = useCallback(() => {
//     if (canvasContainerRef.current && canvasRef.current && context.current) {
//       circles.current.length = 0;
//       canvasSize.current.w = canvasContainerRef.current.offsetWidth;
//       canvasSize.current.h = canvasContainerRef.current.offsetHeight;
//       canvasRef.current.width = canvasSize.current.w * dpr;
//       canvasRef.current.height = canvasSize.current.h * dpr;
//       canvasRef.current.style.width = `${canvasSize.current.w}px`;
//       canvasRef.current.style.height = `${canvasSize.current.h}px`;
//       context.current.scale(dpr, dpr);

//       // Initial draw
//       for (let i = 0; i < quantity; i++) {
//         const circle = circleParams();
//         circles.current.push(circle);
//       }
//     }
//   }, [circleParams, dpr, quantity]);

//   const rgb = hexToRgb(color);

//   const drawCircle = (circle: Circle) => {
//     if (context.current) {
//       const { x, y, translateX, translateY, size, alpha } = circle;
//       context.current.translate(translateX, translateY);
//       context.current.beginPath();
//       context.current.arc(x, y, size, 0, 2 * Math.PI);
//       context.current.fillStyle = `rgba(${rgb.join(", ")}, ${alpha})`;
//       context.current.fill();
//       context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
//     }
//   };

//   const animate = useCallback(() => {
//     if (context.current) {
//       context.current.clearRect(
//         0,
//         0,
//         canvasSize.current.w,
//         canvasSize.current.h,
//       );
//     }

//     circles.current.forEach((circle, i) => {
//       // Smooth Alpha Transition
//       if (circle.alpha < circle.targetAlpha) circle.alpha += 0.01;

//       // Base Movement + Drift
//       circle.x += circle.dx + vx;
//       circle.y += circle.dy + vy;

//       // Mouse Attraction/Repulsion Logic
//       circle.translateX +=
//         (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) /
//         ease;
//       circle.translateY +=
//         (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) /
//         ease;

//       drawCircle(circle);

//       // Boundary Check: Recycle particles
//       if (
//         circle.x < -circle.size ||
//         circle.x > canvasSize.current.w + circle.size ||
//         circle.y < -circle.size ||
//         circle.y > canvasSize.current.h + circle.size
//       ) {
//         circles.current[i] = circleParams();
//       }
//     });
//     animationRef.current = window.requestAnimationFrame(animate);
//   }, [circleParams, ease, staticity, vx, vy]);

//   useEffect(() => {
//     if (canvasRef.current) {
//       context.current = canvasRef.current.getContext("2d");
//     }
//     resizeCanvas();
//     animate();
//     window.addEventListener("resize", resizeCanvas);

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       if (animationRef.current) cancelAnimationFrame(animationRef.current);
//     };
//   }, [color, resizeCanvas, animate]);

//   useEffect(() => {
//     if (canvasRef.current) {
//       const rect = canvasRef.current.getBoundingClientRect();
//       const x = mousePosition.x - rect.left - canvasSize.current.w / 2;
//       const y = mousePosition.y - rect.top - canvasSize.current.h / 2;
//       mouse.current.x = x;
//       mouse.current.y = y;
//     }
//   }, [mousePosition]);

//   return (
//     <div
//       ref={canvasContainerRef}
//       className={cn("absolute inset-0 overflow-hidden", className)}
//     >
//       <canvas ref={canvasRef} className="absolute inset-0" />
//       {children && <div className="relative z-10">{children}</div>}
//     </div>
//   );
// };

// Particles.displayName = "Particles";
