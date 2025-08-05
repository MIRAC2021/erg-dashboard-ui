import OperatorIDs from "@/components/OperatorIDs";
import Navbar from "@/components/Navbar";
import "../globals.css";
import Image from "next/image";
import Link from "next/link";

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
          <div>DATE:</div>
          <div>TIME:</div>
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
            <span className="block text-center">LEFT content</span>
          </Link>
          <OperatorIDs/>
        </div>

        {/* MIDDLE */}
        <div className="w-[44%] bg-blue-100 p-4">MIDDLE content</div>

        {/* RIGHT */}
        <div className="w-[44%] md:w-[92%] xl:w-[86%] bg-[#F7f8FA] overflow-scroll">
          {/* <Navbar/> */}
            {children}
        </div>
      </div>
    </div>
  );
}



// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "../globals.css";
// import Image from "next/image";
// import Link from "next/link";

// // import Sidebar from "@/components/Sidebar"; // assumed sidebar component
// // import Header from "@/components/Header";   // assumed header component

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Ergonomic Analysis Dashboard",
//   description: "Next.js dashboard for realtime ergonomic analysis",
// };

// export default function DashboardLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
  
//   </div>
//     {/* LEFT */}
//     <div className="w-[12%] bg-yellow-300">
//       <Link href="/public">
//         <Image src="/CCAM logo.png" alt="Logo" width={64} height={64} className="mx-auto my-4" />
//         <span className="block text-center">CCAM</span>
//       </Link>
//     </div>
//     {/* MIDDLE */}
//     <div className="w-[44%] bg-blue-100">MIDDLE content</div>
//     {/* RIGHT */}
//     <div className="w-[44%] bg-white">RIGHT content</div>

//   </div>
// // return (
//   //   <html lang="en">
//   //     <body className={`${roboto.className} dashboard-body`}>
//   //       <div className="dashboard-container">
//   //         <Sidebar />
//   //         <main className="dashboard-main">
//   //           <Headers />
//   //           {children}
//   //         </main>
//   //       </div>
//   //     </body>
//   //   </html>
//   );
// }
