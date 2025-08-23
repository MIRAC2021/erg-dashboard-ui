//  TODO: No one in camera frame
"use client"; // ✅ This must be the FIRST line.

import React, { useEffect, useState } from "react";
import RulaScoreDetails from "@/components/RulaScoreDetails";
import UserCard from "@/components/UserCard";
import RiskCircle from "@/components/RiskCircle";
import { useErgonomicStore, ErgonomicData } from "@/lib/GlobalStore";
import {toSentenceCase} from "@/lib/Util";


/**
 * Renders the main dashboard page.
 *
 * @returns {mainDashboard} The dashboard page component.
 */
const mainDashboard = () => {
  // ErgonomicData store accessor.
  const { data, setData } = useErgonomicStore();

  // Enumerated valid levels for the final risk level.
  const validLevels = ["low", "medium", "high"] as const;

  // TODO: Refactor
  const fallbackLevel: "low" | "medium" | "high" = "low";

  const riskLevel = validLevels.includes(data?.final_risk_level as any)
    ? (data?.final_risk_level as "low" | "medium" | "high")
    : fallbackLevel;


  /**
   * Connect to a websockets and updated the ergonomic data store on change.
   *
   * @returns {null} Returns the closed socket.
   */
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8765");

    socket.onopen = () => {
      console.log("WebSocket connected");
    };

    socket.onmessage = (event: MessageEvent) => {
      console.log("Incoming message:", event.data);
      try {
        // Assuming the incoming message is a JSON string
        const parsedData: ErgonomicData[] = JSON.parse(event.data);
        console.log(
          "📥 Received data from from Zenoh bridge on Page:", parsedData);
        setData(parsedData[0]);
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

    // Cleanup function to close the socket when component unmounts
    return () => {
      socket.close();
    };
  }, []);

  let final_risk_level = (data?.final_risk_level ?? "null");
  let risk = final_risk_level  ===
    "Acceptable_posture" ? "Good" : toSentenceCase(data?.final_risk_level);

  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      <div className='flex-1'>
        <div className='flex gap-4 flex-col md:flex-row flex-wrap'>
          {data ? (
            <>
              <UserCard type="RULA" 
                value={JSON.stringify(data?.final_score_rula) ?? "null"} />
              <UserCard type="REBA" 
                value={JSON.stringify(data?.final_score_reba) ?? "null"} />
              <UserCard type="RISK" value={risk} />
            </>
          ) : (
            <p>Waiting for data...</p>
          )}
        </div>
          <div className='flex flex-col w-full mt-4'>
          <h2 className='text-xl font-bold'>Score Details</h2>
          <RulaScoreDetails/>
        </div>
        <div className='flex gap-4 flex-col md:flex-row flex-wrap mt-4'>
        </div>
      </div>
    </div>
  );
};

export default mainDashboard;
