import React from "react";
import Link from "next/link";
import ZenohDataListener from "@/app/zenohdata/page";
import { useErgonomicStore } from "@/lib/GlobalStore";
import {toSentenceCase} from "@/lib/Util";

// Define the RiskCircle component
// This component displays a circle with a color based on the risk level
// and includes text indicating the risk level (low, medium, high).
//{ level: "acceptable_posture" | "low" | "medium" | "high" } { level }
const RiskCircle: React.FC = () => {
  const data = useErgonomicStore((state) => state.data);
  type RiskLevel = "ACCEPTABLE_POSTURE" | "LOW" | "MEDIUM" | "HIGH";
  const level: RiskLevel = (data?.final_risk_level?.toUpperCase() as RiskLevel) ?? "HIGH";
  const colorMap: Record<RiskLevel, string> = {
    ACCEPTABLE_POSTURE: "#89ee4eff", // Green
    LOW: "#f1f164ff",     // Yellow
    MEDIUM: "#FF9800",  // Orange
    HIGH: "#F44336",    // Red
  };

  const link = "/zenohdata"; // Replace with the actual route you want to link to
  console.log("level:", level);
  return (
    <svg width="100" height="100">
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke={colorMap[level]}
        strokeWidth="10"
        fill="none"
        className={level === "MEDIUM" ? "rotate" : ""}
        />

      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="16"
        fill={colorMap[level]}
      >
        <Link 
            href={link}
            className="flex lg:justify-start gap-2"
          >
            {level.toUpperCase() === "ACCEPTABLE_POSTURE" ? "Good" : toSentenceCase(level)}
          </Link>
      </text>
    </svg>
  );
};

export default RiskCircle;
