"use client"; 
import React from "react";
import { useErgonomicStore } from "@/lib/GlobalStore";

type Side = "right" | "left" | "body";
type ScoreType = "rula" | "reba";

const RulaScoreDetails = () => {
  const data = useErgonomicStore((state) => state.data);

  const sideLabelMap: Record<Side, string> = {
    right: "Right Side",
    left: "Left Side",
    body: "Body",
  };

  const partsPerSide: Record<Side, string[]> = {
    right: ["shoulder", "elbow", "wrist"],
    left: ["shoulder", "elbow", "wrist"],
    body: ["neck", "trunk"],
  };

  const renderScores = (type: ScoreType) => {
    const typeData = data?.[type];
    if (!typeData) return null;

return (
      <div className="rounded-2xl bg-white w-[90%] p-8 flex flex-col gap-8 mb-6">
        <h1 className="text-xl font-bold">{type.toUpperCase()} Scores</h1>
        {/* <h2 className="text-md font-semibold text-gray-700 mb-2">Score Details</h2> */}

        {(["right", "left", "body"] as Side[]).map((side) => {
          const sideData = typeData[side];
          if (!sideData) return null;

          return (
            <div key={side}>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{sideLabelMap[side]}</h3>
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
                      className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 p-2 rounded transition"
                    >
                      <div>
                        <span className="font-medium">
                          {part.charAt(0).toUpperCase() + part.slice(1)}:<br />
                        </span>{" "}
                        <span className="text-sm text-gray-500">
                          Angle: {angle ?? "N/A"}<br />
                        </span>
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
      <p className="text-red-500 font-semibold">No data available. Waiting for WebSocket update...</p>
    ) : (
      <>
        {renderScores("rula")}
        {renderScores("reba")}
      </>
    )}
  </div>
);

};

export default RulaScoreDetails;

// import React from "react";
// import { useErgonomicStore } from "@/lib/GlobalStore";

// const ScoreDetails = () => {
//   const { data } = useErgonomicStore();
//   const scoreTypes = ["rula", "reba"];
//   const sides = ["right", "left", "body", "summary"];
//   const bodyParts = ["shoulder", "elbow", "wrist", "neck", "trunk"];

//   return (
//     <div className="rounded-2xl flex flex-col gap-4">
//       {bodyParts.map((part) => (
//         <div key={part} className="bg-white p-4 rounded-lg shadow-md">
//           <h3 className="text-xl font-semibold">{part}</h3>
//           <p className="text-gray-600">RULA_right_angles: {data?.rula?.sides[0]?.bodyParts[part+"_angle"]}</p>
//           <p className="text-gray-600">RULA_right_score: {data?.rula?.sides[0]?.bodyParts[part+"_score"]}</p>
//         </div>
//       ))}
//     </div>
//   );

// };

// export default ScoreDetails;


//     return (
//       <div className="mb-6">
//         <h2 className="text-2xl font-bold uppercase">{type} Scores</h2>
//         <h3 className="text-lg font-semibold mt-2">Score Details</h3>

//         {(["right", "left", "body"] as Side[]).map((side) => {
//           const sideData = typeData[side];
//           if (!sideData) return null;

//           return (
//             <div key={side} className="mt-4">
//               <h4 className="text-xl font-bold font-medium">{sideLabelMap[side]}</h4>
//               <ul className="ml-4 text-sm text-gray-700">
//                 {partsPerSide[side].map((part) => {
//                   const angleKey = `${part}_angle` as keyof typeof sideData;
//                   const scoreKey = `${part}_score` as keyof typeof sideData;

//                   const angle = sideData[angleKey];
//                   const score = sideData[scoreKey];

//                   if (angle === undefined && score === undefined) return null;

//                   return (
//                     <li key={`${type}-${side}-${part}`}>
//                       {part.charAt(0).toUpperCase() + part.slice(1)}: {angle ?? "N/A"}, {score ?? "N/A"}
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>
//           );
//         })}
//       </div>
//     );
//   };


//   return (
//     <div className="rounded-2xl p-4 flex flex-col gap-4">
//       {renderScores("rula")}
//       {renderScores("reba")}
//     </div>
//   );
