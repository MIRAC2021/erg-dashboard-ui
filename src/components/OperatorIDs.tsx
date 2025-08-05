import Link from "next/dist/client/link";
import Image from "next/image";
import React from "react";


const menuItems = [
  {
    title: "OperatorIDs",
    items: [
      {
        icon: "/avatar.png",
        label: "Person1",
        href: "/",
        visible: ["person1", "operator"],
      },
      {
        icon: "/avatar.png",
        label: "Person2",
        href: "/",
        visible: ["person2", "operator"],
      },
      {
        icon: "/avatar.png",
        label: "Person3",
        href: "/",
        visible: ["person3", "operator"],
      },
    ],
  },
  {
    title: "More Information",
    items: [
      // {
      //   icon: "/profile.png",
      //   label: "Profile",
      //   href: "/profile",
      //   visible: ["admin", "teacher", "student", "parent"],
      // },
      {
        icon: "/RULA.png",
        label: "RULA",
        href: "/",
        visible: ["RULA", "score", "operator"],
      },
      {
        icon: "/REBA.png",
        label: "REBA",
        href: "/",
        visible: ["REBA", "score", "operator"],
      },
    ],
  },
];

const OperatorIDs = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map(i=>(
        <React.Fragment key={i.title}>
          <div className="flex flex-col gap-4"></div>
          <span className="lg:black text-grey-400 font-light my-4">{i.title}</span>
          {i.items.map(items=>(
            <Link href={items.href} key={items.label} className="text-grey-400 font-light gap-2 flex items-center hover:bg-gray-200 p-2 rounded"> 
              <Image src={items.icon} alt="" width={20} height={20} />
              <span className="label">{items.label}</span>
            </Link>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
export default OperatorIDs;