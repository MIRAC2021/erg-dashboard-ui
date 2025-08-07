import Image from "next/image";
import React from "react";

const Rulainfo = () => {
  return (
    <div className="rulainfo">
      <Image
        src="/RULA info.png" // Relative to /public
        alt="RULA Diagram"
        width={900} // Adjust width and height as needed
        height={1200}
      />
    </div>
  );
};

export default Rulainfo;
