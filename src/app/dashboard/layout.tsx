"use client"; 
import React from "react";
import OperatorIDs from "@/components/OperatorIDs";
import "../globals.css";
import Image from "next/image";
import Link from "next/link";
import GeneralScoringInfo from "@/components/GeneralScoringInfo";
import RiskCircle from "@/components/RiskCircle";
import { useErgonomicStore } from "@/lib/GlobalStore";

/**
 * Layout for the dashboard page.
 *
 * @param {Readonly<{
 children: React.ReactNode;
}>} data - data object from react.
 * @param {React.ReactNode} data.children - Child nodes from react.
 * @returns {DashboardLayout} Page layout for the dashboard.
 */
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = useErgonomicStore();
  // Define valid levels exactly as they appear in your data
  const validLevels = ["acceptable posture", "low", "medium", "high"] as const;

  // Default fallback
  const fallbackLevel = "low";

  // Extract raw level safely, only if valid, else fallback
  const rawRiskLevel = validLevels.includes(data?.final_risk_level as any)
    ? (data?.final_risk_level as typeof validLevels[number])
    : fallbackLevel;

  // Map "acceptable posture" to "acceptable_posture" (underscore) for RiskCircle component
  const riskLevelForCircle: "low" | "medium" | "high" | "acceptable_posture" =
    rawRiskLevel === "acceptable posture" ? "acceptable_posture" : rawRiskLevel;

  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-between items-center ccam1 p-4 border-b border-gray-400">
        <div className="flex items-center gap-2">
          <Image src="/CCAM logo.png" alt="Logo" width={40} height={40} />
          <span className="font-bold text-xl">CCAM</span>
        </div>

        <div className="text-center flex-1 text-xl font-semibold">
          REALTIME ERGONOMIC DASHBOARD
        </div>

        <div className="text-right text-sm">
          <div>DATE: {new Date().toLocaleDateString()} </div>
          <div>TIME: {new Date().toLocaleTimeString()} </div>
        </div>
      </div>

      <div className="flex flex-grow">
        <div className="w-[12%] bmd:w-[8%] lg:w-[16%] xl:w-[14%] bg-yellow-300">
          <Link 
            href="/"
            className="flex items-center justify-center lg:justify-start gap-2"
          >
          </Link>
          <OperatorIDs/>
        </div>

        <div className="w-[44%] bg-blue-100 p-4">
          {children}
        </div>

        <div className="w-[44%] overflow-scroll bg-[#F7f8FA] p-10">
          <div className="text-lg font-semibold mb-2">RISK Circle</div>
            <div className="flex justify-center mb-4">
              <RiskCircle />            
            </div>
          <br />
          <br />
          <div className=''>
            <div className="w-full flex justify-center">
              <GeneralScoringInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
