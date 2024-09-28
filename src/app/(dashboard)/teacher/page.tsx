import React from "react";
import Announcements from "@/components/Announcements";
import Schedule from "@/components/Schedule";

function Teacher() {
  return (
    <div className="flex-1 flex flex-col lg:flex-row py-2">
      {/* Schedule */}
      <div className="lg:w-2/3">
        <Schedule />
      </div>
      {/* Announcements */}
      <div className="lg:w-1/3">
        <Announcements />
      </div>
    </div>
  );
}

export default Teacher;
