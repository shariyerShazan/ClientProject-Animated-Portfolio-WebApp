"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export interface ConstellationBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  count?: number;
  connectionDistance?: number;
  nodeColor?: string;
  lineColor?: string;
  nodeSize?: number;
  mouseRadius?: number;
  glow?: boolean;
}

interface StarNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  phase: number;
  twinkleSpeed: number;
}

export function ConstellationBackground({
  className,
  children,
  count = 80,
  connectionDistance = 150,
  nodeColor = "rgba(136, 196, 255, 1)",
  lineColor = "rgba(136, 196, 255, 0.15)",
  nodeSize = 2,
  mouseRadius = 120,
  glow = true,
}: ConstellationBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = container.clientWidth;
    let height = container.clientHeight;
    canvas.width = width;
    canvas.height = height;

    let mouseX = -9999;
    let mouseY = -9999;
    let rafId = 0;

    const createStar = (): StarNode => {
      const base = Math.random() * nodeSize + nodeSize * 0.6;

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: base,
        baseRadius: base,
        phase: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.01 + Math.random() * 0.02,
      };
    };

    const stars: StarNode[] = Array.from({ length: count }, createStar);

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);

    const resizeObserver = new ResizeObserver(() => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width;
      canvas.height = height;
    });

    resizeObserver.observe(container);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Update stars
// ... Update stars loop er bhetore ei logic ta ektu adjust koren
for (const star of stars) {
  // 1. Twinkle ✨ (Eita thik ache)
  star.phase += star.twinkleSpeed;
  const pulse = (Math.sin(star.phase) + 1) / 2;
  star.radius = star.baseRadius + pulse * star.baseRadius * 0.6;

  // 2. Mouse Interaction (Repulsion Logic) 🖱️
  if (mouseRadius > 0) {
    const dx = star.x - mouseX;
    const dy = star.y - mouseY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < mouseRadius) {
      // "force" bariye dewa holo jate shore jaoa ta druto hoy
      const force = (mouseRadius - dist) / mouseRadius;
      
      // Acceleration bariye dilam (0.03 -> 0.4)
      // Joto kache ashbe, toto jore push korbe
      star.vx += (dx / dist) * force * 0.4; 
      star.vy += (dy / dist) * force * 0.4;
    }
  }

  // 3. Apply Velocity
  star.x += star.vx;
  star.y += star.vy;

  // Friction: Eita tara guloke move houar por abar slow kore dibe
  // Damping ektu komale (0.95) tara gulo beshi nora-chora korbe
  star.vx *= 0.97;
  star.vy *= 0.97;

  // 4. Boundaries (Tara gulo jeno screen er baire harie na jay)
  if (star.x < 0) { star.x = 0; star.vx *= -1; }
  if (star.x > width) { star.x = width; star.vx *= -1; }
  if (star.y < 0) { star.y = 0; star.vy *= -1; }
  if (star.y > height) { star.y = height; star.vy *= -1; }
}

      // Connections
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;

      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.globalAlpha = 1 - dist / connectionDistance;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw stars
      for (const star of stars) {
        const pulse = (Math.sin(star.phase) + 1) / 2;
        const alpha = 0.6 + pulse * 0.4;

        if (glow) {
          const gradient = ctx.createRadialGradient(
            star.x,
            star.y,
            0,
            star.x,
            star.y,
            star.radius * 4,
          );

          gradient.addColorStop(0, nodeColor.replace("1)", "0.35)"));
          gradient.addColorStop(1, "transparent");

          ctx.globalAlpha = alpha;
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 4, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.globalAlpha = alpha;
        ctx.fillStyle = nodeColor;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [
    count,
    connectionDistance,
    nodeColor,
    lineColor,
    nodeSize,
    mouseRadius,
    glow,
  ]);

  return (
    <div
      ref={containerRef}
      className={cn("fixed inset-0 overflow-hidden bg-neutral-950", className)}
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Soft glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at center, rgba(56,189,248,0.08), transparent 60%)",
        }}
      />

      {children && (
        <div className="relative z-10 h-full w-full">{children}</div>
      )}
    </div>
  );
}

export default function ConstellationBackgroundDemo() {
  return <ConstellationBackground />;
}
