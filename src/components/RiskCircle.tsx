import React from "react";

// Define the RiskCircle component
// This component displays a circle with a color based on the risk level
// and includes text indicating the risk level (low, medium, high).
const RiskCircle: React.FC<{ level: "acceptable_posture" | "low" | "medium" | "high" }> = ({ level }) => {
  const colorMap = {
    acceptable_posture: "#89ee4eff", // Green
    low: "#f1f164ff",     // Yellow
    medium: "#FF9800",  // Orange
    high: "#F44336",    // Red
  };

  return (
    <svg width="100" height="100">
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke={colorMap[level]}
        strokeWidth="10"
        fill="none"
        className={level === "medium" ? "rotate" : ""}
        />

      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="16"
        fill={colorMap[level]}
      >
        {level.toUpperCase()}
      </text>
    </svg>
  );
};

export default RiskCircle;
