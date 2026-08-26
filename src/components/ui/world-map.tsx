"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import Image from "next/image";
import { useTheme } from "next-themes";
import dnaLogo from "../../assets/images/TechInvention Logo (DNA).png";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

export function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [svgMap, setSvgMap] = useState<string>("");
  const mapRef = useRef<any>(null);
  const { theme } = useTheme();

  useEffect(() => {
    // Generate map on client-side so 958 KB of inline SVG data is NOT baked into the initial SSR HTML
    try {
      const map = new DottedMap({ height: 75, grid: "diagonal" });
      mapRef.current = map;
      const svg = map.getSVG({
        radius: 0.22,
        color: theme === "dark" ? "#FFFFFF40" : "#00000040",
        shape: "circle",
        backgroundColor: theme === "dark" ? "black" : "white",
      });
      setSvgMap(svg);
    } catch (e) {
      console.error(e);
    }
  }, [theme]);

  const logoSrc = typeof dnaLogo === 'object' ? (dnaLogo as any).src : dnaLogo;

  const projectPoint = (lat: number, lng: number) => {
    try {
      if (mapRef.current) {
        const pin = mapRef.current.getPin({ lat, lng });
        const x = (pin.x / 148) * 800;
        const y = (pin.y / 75) * 400;
        return { x, y };
      }
    } catch (e) {}
    const x = ((lng + 180) / 360) * 800;
    const y = ((90 - lat) / 180) * 400;
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans">
      {svgMap ? (
        <Image
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
          className="h-full w-full pointer-events-none select-none transition-opacity duration-500"
          alt="world map"
          height="495"
          width="1056"
          draggable={false}
          unoptimized
        />
      ) : (
        <div className="w-full h-full bg-slate-50/50 rounded-lg animate-pulse" />
      )}
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="0.8"
                initial={{
                  pathLength: 0,
                }}
                whileInView={{
                  pathLength: 1,
                }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 1.2,
                  delay: 0.1 * i,
                  ease: "easeOut",
                }}
                key={`start-upper-${i}`}
              ></motion.path>
            </g>
          );
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => {
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`end-point-group-${i}`}>
              <circle
                cx={endPoint.x}
                cy={endPoint.y}
                r="3"
                fill={lineColor}
              />
              <circle
                cx={endPoint.x}
                cy={endPoint.y}
                r="3"
                fill={lineColor}
                opacity="0.5"
              >
                <animate
                  attributeName="r"
                  from="3"
                  to="10"
                  dur="1.8s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="1.8s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}

        {/* Render unique start points using the brand logo */}
        {(() => {
          const uniqueStartCoords = new Set<string>();
          const uniqueStarts: typeof dots = [];
          dots.forEach((dot) => {
            const coordKey = `${dot.start.lat.toFixed(4)},${dot.start.lng.toFixed(4)}`;
            if (!uniqueStartCoords.has(coordKey)) {
              uniqueStartCoords.add(coordKey);
              uniqueStarts.push(dot);
            }
          });

          return uniqueStarts.map((dot, i) => {
            const startPoint = projectPoint(dot.start.lat, dot.start.lng);
            return (
              <g key={`start-point-${i}`}>
                {/* Glowing Pulse Circle */}
                <circle
                  cx={startPoint.x}
                  cy={startPoint.y}
                  r="10"
                  fill="#1755a6" // Brand primary blue glow
                  opacity="0.3"
                >
                  <animate
                    attributeName="r"
                    from="10"
                    to="24"
                    dur="2s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.3"
                    to="0"
                    dur="2s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Solid white backing circle to hide the lines behind the logo */}
                <circle
                  cx={startPoint.x}
                  cy={startPoint.y}
                  r="10"
                  fill="white"
                />

                {/* Brand Logo DNA Image */}
                <image
                  href={logoSrc}
                  x={startPoint.x - 7}
                  y={startPoint.y - 10}
                  width="14"
                  height="20"
                />
              </g>
            );
          });
        })()}
      </svg>
    </div>
  );
}
