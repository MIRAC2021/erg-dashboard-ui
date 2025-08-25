"use client"; 

import React from "react";
import { useErgonomicStore } from "@/lib/GlobalStore";

// Sides of the body for indexing ergonomic data.
type Side = "right" | "left" | "body";

// Types of scores for indexing ergonomic data.
type ScoreType = "rula" | "reba";

/**
 * Renders RUBA and RULA score details from the global store.
 *
 * @returns {ScoreDetails} A component rendering RUBA and RULA score details
 * if they've been initialized in the GlobalStore, otherwise, a placeholder 
 * component indicating that data is loading.
 */
const ScoreDetails = () => {
  const data = useErgonomicStore((state) => state.data);

  // Body sides for ergonomic data indexing.
  const sideLabelMap: Record<Side, string> = {
    right: "Right Side",
    left: "Left Side",
    body: "Body",
  };

  // Body parts for ergonomic data indexing.
  const partsPerSide: Record<Side, string[]> = {
    right: ["shoulder", "elbow", "wrist"],
    left: ["shoulder", "elbow", "wrist"],
    body: ["neck", "trunk"],
  };

  /**
   * Renders a RUBA or RULA score.
   *
   * @param {ScoreType} type - "ruba" or "rula."
   * @returns {ScoreDetails} component rendering a ruba or rula score.
   */
  const renderScores = (type: ScoreType) => {
    const typeData = data?.[type];
    if (!typeData) return null;

  return (
      <div className="rounded-2xl bg-white w-[90%] p-8 flex flex-col gap-8
        mb-6">
        <h1 className="text-xl font-bold">{type.toUpperCase()} Scores</h1>
        {(["right", "left", "body"] as Side[]).map((side) => {
          const sideData = typeData[side];
          if (!sideData) return null;

          return (
            <div key={side}>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {sideLabelMap[side]}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {partsPerSide[side].map((part) => {
                  const angleKey = `${part}_angle` as keyof typeof sideData;
                  const scoreKey = `${part}_score` as keyof typeof sideData;

                  const angle = sideData[angleKey];
                  const score = sideData[scoreKey];

                  if (angle === undefined && score === undefined) return null;

                  return (
                    <div
                      key={`${type}-${side}-${part}`}
                      className="flex items-center gap-3 bg-gray-100 
                      hover:bg-gray-200 p-2 rounded transition">
                      <div>
                        <span className="font-medium">
                          {part.charAt(0).toUpperCase() + part.slice(1)}:<br />
                        </span>{" "}
                        {type !== "reba" && (
                          <span className="text-sm text-gray-500">
                            Angle: {angle ?? "N/A"}<br />
                          </span>
                        )}
                        <span className="text-sm text-gray-500">
                         Score: {score ?? "N/A"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
  <div className="rounded-2xl p-4 flex flex-col gap-4">
    {!data ? (
      <p className="text-red-500 font-semibold">
          No data available. No one in the camera frame or update websocket or refresh the page.
      </p>
    ) : (
      <>
        {renderScores("rula")}
        {renderScores("reba")}
      </>
    )}
  </div>
);

};

export default ScoreDetails;
