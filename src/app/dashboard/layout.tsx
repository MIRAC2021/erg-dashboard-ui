import OperatorIDs from "@/components/OperatorIDs";
import Navbar from "@/components/Navbar";
import "../globals.css";
import Image from "next/image";
import Link from "next/link";
import GeneralScoringInfo from "@/components/GeneralScoringInfo";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen">
      {/* HEADER */}
      <div className="flex justify-between items-center ccam1 p-4 border-b border-gray-400">
        {/* Left - Logo and CCAM */}
        <div className="flex items-center gap-2">
          <Image src="/CCAM logo.png" alt="Logo" width={40} height={40} />
          <span className="font-bold text-xl">CCAM</span>
        </div>

        {/* Center - Title */}
        <div className="text-center flex-1 text-xl font-semibold">
          REALTIME ERGONOMIC DASHBOARD
        </div>

        {/* Right - Date and Time */}
        <div className="text-right text-sm">
          <div>DATE:  </div>
          <div>TIME:  </div>
        </div>
      </div>

      {/* MAIN DASHBOARD GRID */}
      <div className="flex flex-grow">
        {/* LEFT */}
        <div className="w-[12%] bmd:w-[8%] lg:w-[16%] xl:w-[14%] bg-yellow-300">
          <Link 
            href="/"
            className="flex items-center justify-center lg:justify-start gap-2"
          >
            {/* <span className="block text-center">LEFT content</span> */}
          </Link>
          <OperatorIDs/>
        </div>

        {/* MIDDLE */}
        <div className="w-[44%] bg-blue-100 p-4">
          {children}
        </div>

        {/* RIGHT */}
        <div className="w-[44%] overflow-scroll">
          {/*add this to className above if needed: md:w-[92%] xl:w-[86%] bg-[#F7f8FA] */}
          {/* <Navbar/> */}
          <div className="text-lg font-semibold mb-2">Live Video Feed</div>
            <div className="w-full h-64 bg-black rounded-lg overflow-hidden flex items-center justify-center">
              {/* Replace this with actual video stream */}
              <video 
                src="/sample-video.mp4" 
                controls 
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          <div className=''>
            <GeneralScoringInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
