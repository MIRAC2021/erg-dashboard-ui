"use client"; // ✅ This must be the FIRST line

import React, { useEffect, useState } from "react";

type RulaData = {
    side: string;
    body_part: string;
    angle: number;
    score: number;
    final_score: number;
    // Add more fields as needed
};

type RebaData = {
    side: string;
    body_part: string;
    angle: number;
    score: number;
    final_score: number;
    // Add more fields as needed
};

type ErgonomicData = {
  person_id: number;
  rula: RulaData;
  reba: RebaData;
  final_risk_level: string;
};


const ZenohDataListener: React.FC = () => {
  const [data, setData] = useState<ErgonomicData | null>(null);

  useEffect(() => {
    // wss://localhost:8765
    const socket = new WebSocket("ws://localhost:8765");

    socket.onopen = () => {
      console.log("✅ WebSocket connected");
    };

    socket.onmessage = (event: MessageEvent) => {
        console.log("print this");
        console.log("📥 Incoming message:", event.data);
      try {
        // Assuming the incoming message is a JSON string
        const parsedData: ErgonomicData = JSON.parse(event.data);
        console.log("📥 Received data from Zenoh bridge:", parsedData);
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