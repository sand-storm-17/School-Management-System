import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function DashboardLayout({children}:Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* Left */}
      <div className="w-[14%] md:w-[8%] lg:w-[14%] p-4">
        <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">School</span>
        </Link>
        <Menu/>
      </div>
      {/* Right */}
      <div className="w-[96%] md:w-[92%] lg:w-[86%] p-4 bg-slate-50">
        <Navbar/>
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
