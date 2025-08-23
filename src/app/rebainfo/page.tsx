import Image from "next/image";
import React from "react";

/**
 * Component for rendering the REBA chart explaining how it works and scores are
 * computed.
 *
 * @returns {Rebainfo} Component displaying the REBA chart.
 */
const Rebainfo = () => {
  return (
    <div className="rebainfo">
      <Image
        src="/REBA info.png" // Relative to /public
        alt="REBA Diagram"
        width={900} // Adjust width and height as needed
        height={1200}
      />
    </div>
  );
};

export default Rebainfo;
