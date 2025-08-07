import Link from "next/dist/client/link";
import Image from "next/image";
import React from "react";

const bodyParts = [
  {
    title: "Right Side",
    items: [
      {
        // icon: "/avatar.png",
        label: "Shoulder",
        type: ["Angle", "Score"],
      },
      {
        // icon: "/avatar.png",
        label: "Elbow",
        type: ["Angle", "Score"],
      },
      {
        // icon: "/avatar.png",
        label: "Wrist",
        type: ["Angle", "Score"],
      },
    ],
  },
  {
    title: "Left Side",
    items: [
      {
        // icon: "/avatar.png",
        label: "Shoulder",
        type: ["Angle", "Score"],
      },
      {
        // icon: "/avatar.png",
        label: "Elbow",
        type: ["Angle", "Score"],
      },
      {
        // icon: "/avatar.png",
        label: "Wrist",
        type: ["Angle", "Score"],
      },
    ],
  },
  
    {
    title: "Body",
    items: [
      {
        // icon: "/avatar.png",
        label: "Neck",
        type: ["Angle", "Score"],
      },
      {
        // icon: "/avatar.png",
        label: "Trunk",
        type: ["Angle", "Score"],
      },
    ],
  },
];

const ScoreDetails = () => {
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
                {/* <Image src={item.icon} alt={item.label} width={30} height={30} /> */}
                <div>
                  <span className="font-medium">{item.label}: </span>
                  <span className="text-sm text-gray-500">{item.type.join(", ")}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScoreDetails;