import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import DottedMap from "dotted-map";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
    color?: string;
  }>;
  lineColor?: string;
}

export function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const isInView = useInView(svgRef, { once: true, margin: "-100px" });
  const map = new DottedMap({ height: 100, grid: "diagonal" });
  const isDark = typeof document !== 'undefined' ? document.documentElement.classList.contains("dark") : false;

  const svgMap = map.getSVG({
    radius: 0.22,
    color: isDark ? "#FFFFFF40" : "#00000040",
    shape: "circle",
    backgroundColor: isDark ? "black" : "white",
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
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
      <img
        src="/techinvention/location-map.png"
        className="h-full w-full pointer-events-none select-none object-cover"
        alt="world map"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {isInView && dots.map((dot, i) => {
          const startPoint = (dot.start as any).x !== undefined ? (dot.start as any) : projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = (dot.end as any).x !== undefined ? (dot.end as any) : projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke={`url(#path-gradient-${i})`}
                strokeWidth="1.5"
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
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
          {dots.map((dot, i) => (
            <linearGradient id={`path-gradient-${i}`} x1="0%" y1="0%" x2="100%" y2="0%" key={`gradient-${i}`}>
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="5%" stopColor={dot.color || lineColor} stopOpacity="1" />
              <stop offset="95%" stopColor={dot.color || lineColor} stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>
      </svg>
    </div>
  );
}
