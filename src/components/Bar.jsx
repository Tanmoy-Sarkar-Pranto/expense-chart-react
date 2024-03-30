import React, { useState } from "react"

const Bar = ({ height, spent, highest }) => {
  // const h = parseInt(height)
  // // console.log(h, typeof h)
  // console.log(`h-${height}rem`)
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ height: `${height}rem` }}
      className={`bg-red-400 w-[2rem] rounded-sm flex relative flex-col-reverse justify-end items-center cursor-pointer ${
        highest ? "hover:bg-slate-300" : "hover:bg-red-300"
      }`}
    >
      <div
        className={`absolute -top-10  flex text-xs min-h-6 min-w-12 bg-yellow-950 text-white justify-center items-center rounded-lg ${
          hovered ? "block" : "hidden"
        }`}
        // style={{ display: "none" }}
      >
        <p className="py-2 px-1 tracking-wide">${spent}</p>
      </div>
    </div>
  )
}

export default Bar
