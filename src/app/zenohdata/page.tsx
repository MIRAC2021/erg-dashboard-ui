"use client";

import ZenohDataListener from "@/components/ZenohData";

/**
 * Component for rendering zenoh data.
 *
 * @returns {zenohdata} Component displaying ergonomic data from zenoh data.
 */
const zenohdata = () => {
  return (
    <div className="zenohdata">
      <ZenohDataListener />
    </div>
  );
};

export default zenohdata;
