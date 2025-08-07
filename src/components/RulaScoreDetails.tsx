import Link from "next/dist/client/link";
import React from "react";
import { useErgonomicStore } from "@/lib/GlobalStore";
import { title } from "process";

type RulaData = {
  right: {
    "shoulder_angle": number,
    "shoulder_score": number,
    "elbow_angle": number,
    "elbow_score": number,
    "wrist_angle": number,
    "wrist_score": number
  };
  left: {
    "shoulder_angle": number,
    "shoulder_score": number,
    "elbow_angle": number,
    "elbow_score": number,
    "wrist_angle": number,
    "wrist_score": number
  };
  body: {
    "neck_angle": number,
    "neck_score": number,
    "trunk_angle": number,
    "trunk_score": number
  };
  summary: {
    "final_score": string;
  };
};

type RebaData = {
    right: {
        "shoulder_angle": number,
        "shoulder_score": number,
        "elbow_angle": number,
        "elbow_score": number,
        "wrist_angle": number,
        "wrist_score": number
    };
    left: {
        "shoulder_angle": number,
        "shoulder_score": number,
        "elbow_angle": number,
        "elbow_score": number,
        "wrist_angle": number,
        "wrist_score": number
    };
    body: {
        "neck_angle": number,
        "neck_score": number,
        "trunk_angle": number,
        "trunk_score": number
    };
    summary: {
        "final_score": string;
    };
};

const ScoreDetails = () => {
  const { data } = useErgonomicStore();
  // if (!data) {
  //   return <div className="text-center text-gray-500">No data available</div>;
  // }

  return (
    <div className="rounded-2xl bg-white w-[90%] p-8 flex flex-col gap-4">
      <h1 className="text-xl font-bold">Score Details</h1>

      {bodyParts.map((section) => (
        <div key={section.title}>
          <h2 className="text-md font-semibold text-gray-700 mb-2">{section.title}:</h2>
          <div className="grid grid-cols-2 gap-4">
            {section.items.map((item) => (
              <Link
                key={item.label}
                href="#"
                className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 p-2 rounded transition"
              >
                {data && (
                  <div className="space-y-4">
                    {["right", "left", "body", "summary"].map((section) => (
                      <div key={section}>
                        <h3 className="font-semibold capitalize">{section}</h3>
                        <div className="ml-4 space-y-1">
                          {/* Loop through RULA section */}
                          {Object.entries((data.rula as any)[section]).map(([key, value]) => (
                            <div key={`rula-${section}-${key}`}>
                              <span className="font-medium">{key}:</span>{" "}
                              <span className="text-sm text-gray-500">{typeof value === "undefined" || value === null ? "none" : String(value)}</span>
                            </div>
                          ))}

                          {/* Loop through REBA section */}
                          {Object.entries((data.reba as any)[section]).map(([key, value]) => (
                            <div key={`reba-${section}-${key}`}>
                              <span className="font-medium">{key}:</span>{" "}
                              <span className="text-sm text-gray-500">{typeof value === "undefined" || value === null ? "none" : String(value)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScoreDetails;
