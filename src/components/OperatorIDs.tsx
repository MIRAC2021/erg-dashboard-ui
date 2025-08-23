import Link from "next/dist/client/link";
import Image from "next/image";
import React from "react";

// Items to be displayed on the left side bar.
const menuItems = [
  {
    title: "OperatorIDs",
    items: [
      {
        icon: "/operator.png",
        label: "Person1",
        href: "/dashboard",
        visible: ["person1", "operator"],
      },
    ],
  },
  {
    title: "More Information",
    items: [
      {
        icon: "/blueCircle.png",
        label: "RULA",
        href: "/rulainfo",
        visible: ["RULA", "score", "operator"],
      },
      {
        icon: "/blackCircle.png",
        label: "REBA",
        href: "/rebainfo",
        visible: ["REBA", "score", "operator"],
      },
    ],
  },
];

/**
 * Statically defined component for rendering operators.
 *
 * TODO: Needs to be linked to live data.
 *
 * @returns {OperatorIDs} Component rendering operators.
 */
const OperatorIDs = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map(i=>(
        <React.Fragment key={i.title}>
          <div className="flex flex-col gap-4"></div><br /><br />
          <span className="lg:black text-grey-400 font-bold my-4">
            {i.title}
          </span>
          {i.items.map(items=>(
            <Link href={items.href} key={items.label} className="text-grey-400
              font-light gap-2 flex items-center hover:bg-gray-200 p-2 rounded"
            >
              <Image src={items.icon} alt="" width={20} height={20} />
              <span className="label">{items.label}</span><br />
            </Link>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default OperatorIDs;
