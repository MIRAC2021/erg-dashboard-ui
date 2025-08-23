"use client"; // ✅ This must be the FIRST line
import React, { useEffect, useState } from "react";
import RulaScoreDetails from "@/components/RulaScoreDetails";
// import ScoreDetails from "@/components/ScoreDetails";
import UserCard from "@/components/UserCard";
import RiskCircle from "@/components/RiskCircle";
// import { useErgonomicStore } from "@/lib/GlobalStore";
import { useErgonomicStore, ErgonomicData } from "@/lib/GlobalStore";
import {toSentenceCase} from "@/lib/Util";

// # TODO: No one in camera frame

const mainDashboard = () => {
  const { data, setData } = useErgonomicStore();
  const validLevels = ["low", "medium", "high"] as const;
  const fallbackLevel: "low" | "medium" | "high" = "low";

  const riskLevel = validLevels.includes(data?.final_risk_level as any)
    ? (data?.final_risk_level as "low" | "medium" | "high")
    : fallbackLevel;


    useEffect(() => {
      const socket = new WebSocket("ws://localhost:8765");

      socket.onopen = () => {
        console.log("WebSocket connected");
      };

      socket.onmessage = (event: MessageEvent) => {
        console.log("print this");
        console.log("Incoming message:", event.data);
        try {
          // Assuming the incoming message is a JSON string
          const parsedData: ErgonomicData[] = JSON.parse(event.data);
          console.log("📥 Received data from from Zenoh bridge on Page:", parsedData);
          setData(parsedData[0]);
          console.log("final_risk_level field:", parsedData[0].final_score_reba);
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

  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* Main Dashboard Content Goes Here */}
      <div className='flex-1'>
        {/* USER CARDS */}
        <div className='flex gap-4 flex-col md:flex-row flex-wrap'>
          {data ? (
            <>
              <UserCard type="RULA" value={JSON.stringify(data?.final_score_rula) ?? "null"} />
              <UserCard type="REBA" value={JSON.stringify(data?.final_score_reba) ?? "null"} />
              <UserCard type="RISK" value={(data?.final_risk_level ?? "null")=== "Acceptable_posture" ? "Good" : toSentenceCase(data?.final_risk_level)} />
            </>
          ) : (
            <p>Waiting for data...</p>
          )}
        </div>
        
        {/* <pre>{JSON.stringify(data?.final_score_reba ?? "null", null, 2)}</pre> */}



        {/* <pre style={{ textAlign: "left" }}>{JSON.stringify(data, null, 2)}</pre> */}
        {/* <div className='flex gap-4 flex-col md:flex-row flex-wrap mt-4'> */}
          <div className='flex flex-col w-full mt-4'>
          {/* Printing Score Details */}
          <h2 className='text-xl font-bold'>Score Details</h2>
          <RulaScoreDetails/>
        </div>
        <div className='flex gap-4 flex-col md:flex-row flex-wrap mt-4'>
          {/* Score Circle */}
          {/* <h2 className='text-xl font-bold'>RISK Circle</h2>
          <RiskCircle level={riskLevel} /> */}
        </div>
      </div>
    </div>
  );
};

export default mainDashboard;