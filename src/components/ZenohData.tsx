"use client"; // ✅ This must be the FIRST line

import React, { useEffect, useState } from "react";
import { useErgonomicStore, ErgonomicData } from "@/lib/GlobalStore";

const ZenohDataListener: React.FC = () => {
  // const [data, setData] = useState<ErgonomicData | null>(null);
  const { data, setData } = useErgonomicStore();
  // const data = useErgonomicStore((state) => state.data);
  // const ErgonomicData = data ?? "N/A";

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
//   return (
//   <div className="p-6 space-y-4">
//     <h2 className="text-2xl font-bold">Zenoh Ergonomic Data</h2>
//     {data ? (
//       <div className="space-y-4">
//         <div className="bg-white p-4 rounded shadow">
//           <h3 className="text-lg font-semibold">Person ID: {data.person_id}</h3>
//         </div>

//         <div className="bg-blue-100 p-4 rounded shadow">
//           <h3 className="text-lg font-bold">RULA Data</h3>
//           <p>Side: {data.rula[0]?.side ?? "N/A"}</p>
//           <p>Body Part: {data.rula[0]?.body_part ?? "N/A"}</p>
//           <p>Angle: {data.rula[0]?.angle ?? "--"}°</p>
//           <p>Score: {data.rula[0]?.score ?? "--"}</p>
//           <p>Final Score: {data.rula[0]?.final_score ?? "--"}</p>

//         </div>

//         <div className="bg-green-100 p-4 rounded shadow">
//           <h3 className="text-lg font-bold">REBA Data</h3>
//           <p>Side: {data.reba[0]?.side ?? "N/A"}</p>
//           <p>Body Part: {data.reba[0]?.body_part ?? "N/A"}</p>
//           <p>Angle: {data.reba[0]?.angle ?? "--"}°</p>
//           <p>Score: {data.reba[0]?.score ?? "--"}</p>
//           <p>Final Score: {data.reba[0]?.final_score ?? "--"}</p>
//         </div>

//         <div className="bg-yellow-100 p-4 rounded shadow">
//           <h3 className="text-lg font-bold">Risk Level</h3>
//           <p>{data.final_risk_level}</p>
//         </div>
//       </div>
//     ) : (
//       <p>Waiting for data...</p>
//     )}
//   </div>
// );

};

export default ZenohDataListener;