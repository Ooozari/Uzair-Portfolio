import React from 'react'

function LiveLabel() {
  return (
    <div
          className="px-3 py-1 rounded-[14px]
          inline-flex
                bg-[#d1fae5]
                text-[#065f46]
                border-1 border-[#007e5a]
                font-semibold
                text-xs
                shadow-[inset_-1px_1px_1px_rgba(255,255,250,0.9),inset_1px_-1px_1px_rgba(16,185,129,0.9)]
                "
        >
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-700 animate-pulse block"></span>
            Live
          </div>
        </div>
  )
}

export default LiveLabel