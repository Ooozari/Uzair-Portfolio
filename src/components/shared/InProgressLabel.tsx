import React from "react";

function InProgressLabel() {
  return (
    <div
      className=" px-3 py-1 rounded-[14px]
          inline-flex
          bg-[#fef9c3]     
          text-[#b45309]       
          border-1 border-[#fbbf24] 
          font-semibold
          text-xs
          shadow-[inset_-1px_1px_1px_rgba(255,255,250,0.9),inset_1px_-1px_1px_rgba(251,191,36,0.5)]"
    >
      <div className="flex items-center gap-1">
        In Progress
      </div>
    </div>
  );
}

export default InProgressLabel;
