"use client"; // ✅ This must be the FIRST line

import React, { useEffect, useState } from "react";
import { useErgonomicStore, ErgonomicData } from "@/lib/GlobalStore";

/**
 * Listener for ErgonomicData from the python bridge connected to a Zenoh 
 * network.
 *
 * NOTE: The component should be removed at some point.
 *
 * @returns {React.FC} component listing the data returned from the bridge.
 */
const ZenohDataListener: React.FC = () => {
  const { data, setData } = useErgonomicStore();

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8765");

    socket.onopen = () => {
      console.log("✅ WebSocket connected");
    };

    socket.onmessage = (event: MessageEvent) => {
      console.log("📥 Incoming message:", event.data);

      try {
        const parsedData: ErgonomicData = JSON.parse(event.data);
        setData(parsedData);
      } catch (err) {
        console.error("❌ Failed to parse incoming message:", err);
      }
    };

    socket.onerror = (err: Event) => {
      console.error("⚠️ WebSocket error:", err);
    };

    socket.onclose = (event) => {
        console.log("🔌 WebSocket connection closed");
        console.log("Code:", event.code);
        console.log("Reason:", event.reason);
        console.log("Was clean?:", event.wasClean);
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <h2>Zenoh Ergonomic Data</h2>
      {data ? (
        <pre style={{ textAlign: "left" }}>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Waiting for data...</p>
      )}
    </div>
  );

};

export default ZenohDataListener;
