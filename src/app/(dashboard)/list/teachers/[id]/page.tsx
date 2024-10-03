import Announcements from "@/components/Announcements";
import Performance from "@/components/Performance";
import Schedule from "@/components/Schedule";
import Image from "next/image";
import Link from "next/link";

import { FaCalendarAlt } from "react-icons/fa";

const SingleTeacherPage = () => {
  return (
    <div className="flex flex-col xl:flex-row py-6 min-h-screen">
      {/* LEFT */}
      <div className="flex-col lg:w-3/5 m-2">
        {/* TOP */}
        <div className="flex flex-col p-4 lg:flex-row w-full">
          {/* INFO */}
          <div className="flex p-4 bg-color2Light rounded-lg mx-2 lg:w-1/2">
            <div className="w-1/3">
              <Image src="/favicon.ico" alt="" width={100} height={200} className="rounded-full" />
            </div>
            <div className="flex flex-col w-2/3 gap-2">
              <h1 className="font-semibold">Kumar Sandeep</h1>
              <p className="text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex flex-col md:flex-row text-xs flex-wrap justify-between">
                <div className="">O+</div>
                <div className="">January 2025</div>
                <div className="">sandeeepkumaar.0034@gmail.com</div>
                <div className="">+91-8101248472</div>
              </div>
            </div>
          </div>
          {/* STATISTICS */}
          <div className="flex p-2 lg:w-1/2 flex-wrap mx-2">
            <div className="flex p-6 gap-4 items-center bg-white rounded-lg h-fit">
              <FaCalendarAlt />
              <div>
                <h1>90%</h1>
                <p className="text-xs">Attendance</p>
              </div>
            </div>
            <div className="flex p-6 gap-4 items-center bg-white rounded-lg h-fit">
              <FaCalendarAlt />
              <div>
                <h1>2</h1>
                <p className="text-xs">Classes</p>
              </div>
            </div>
            <div className="flex p-6 gap-4 items-center bg-white rounded-lg h-fit">
              <FaCalendarAlt />
              <div>
                <h1>4</h1>
                <p className="text-xs">Exams</p>
              </div>
            </div>
            <div className="flex p-6 gap-4 items-center bg-white rounded-lg h-fit">
              <FaCalendarAlt />
              <div>
                <h1>3</h1>
                <p className="text-xs">Years</p>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <Schedule />
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-2/5">
        {/* Shortcuts */}
        <div className="p-4 bg-white">
          <div className="text-lg">Shortcuts</div>
          <div className="flex flex-wrap text-xs text-nowrap gap-2 p-2">
            <button className="bg-color1 p-2 rounded-lg">
              <Link href="/">Teacher&apos;s Classes</Link>
            </button>
            <button className="bg-color2 p-2 rounded-lg">
              <Link href="/">Teacher&apos;s Exams</Link>
            </button>
            <button className="bg-color3 p-2 rounded-lg">
              <Link href="/">Teacher&apos;s Assignments</Link>
            </button>
            <button className="bg-color1 p-2 rounded-lg">
              <Link href="/">Teacher&apos;s Students</Link>
            </button>
            <button className="bg-color2 p-2 rounded-lg">
              <Link href="/">Teacher&apos;s Lessons</Link>
            </button>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
