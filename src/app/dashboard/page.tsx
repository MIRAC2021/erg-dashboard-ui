import ScoreDetails from "@/components/ScoreDetails";
import ZenohDataListener from "@/components/ZenohData";
import UserCard from "@/components/UserCard";

const mainDashboard = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* Main Dashboard Content Goes Here */}
      <div className='flex-1'>
        {/* USER CARDS */}
        <div className='flex gap-4 flex-col md:flex-row flex-wrap'>
          {/* <UserCard type="RULA" value = {data.rula.final_score}/>
          <UserCard type="REBA" value = {data.reba.final_score}/>
          <UserCard type="FINAL" value = {data.final.final_score}/> */}
        </div>
        <div className='flex gap-4 flex-col md:flex-row flex-wrap mt-4'>
          {/* REBA Scores */}
          <h2 className='text-xl font-bold'>REBA Scores</h2>
          <ScoreDetails/>
        </div>
        <div className='flex gap-4 flex-col md:flex-row flex-wrap mt-4'>
          {/* RULA Scores */}
          <h2 className='text-xl font-bold'>RULA Scores</h2>
          <ScoreDetails/>
        </div>
      </div>
    </div>
  );
};

export default mainDashboard;