"use client"; // ✅ This must be the FIRST line

import ScoreDetails from "@/components/ScoreDetails";
import UserCard from "@/components/UserCard";
import { useErgonomicStore } from "@/lib/GlobalStore";

const mainDashboard = () => {
  const { data } = useErgonomicStore();

  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* Main Dashboard Content Goes Here */}
      <div className='flex-1'>
        {/* USER CARDS */}
        <div className='flex gap-4 flex-col md:flex-row flex-wrap'>
          <UserCard type="RULA" value = {data?.rula.summary.final_score ?? "null"} link="/zenohdata"/>
          <UserCard type="REBA" value = {data?.reba.summary.final_score ?? "null"} link="/zenohdata"/>
          <UserCard type="RISK" value = {data?.final_risk_level ?? "null"} link="/zenohdata"/>
        </div>
        <div className='flex gap-4 flex-col md:flex-row flex-wrap mt-4'>
          {/* RULA Scores */}
          <h2 className='text-xl font-bold'>RULA Scores</h2>
          <ScoreDetails/>
        </div>
        <div className='flex gap-4 flex-col md:flex-row flex-wrap mt-4'>
          {/* REBA Scores */}
          <h2 className='text-xl font-bold'>REBA Scores</h2>
          <ScoreDetails/>
        </div>
      </div>
    </div>
  );
};

export default mainDashboard;