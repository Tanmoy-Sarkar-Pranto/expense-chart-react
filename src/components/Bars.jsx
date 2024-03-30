import React from "react"
import Bar from "./Bar"

const Bars = ({ spents, data }) => {
  // console.log(data)
  const heights = [3, 5.4, 8, 4.6, 3.3, 6.7, 3.8]
  return (
    <div className=" gap-x-2 flex justify-between mt-10  h-[50%] items-end">
      {data.map((item, index) => {
        return (
          <div className="flex flex-col" key={index}>
            <Bar
              height={heights[index]}
              spent={item.amount}
              highest={item.day == "wed" ? true : false}
              key={index}
            />
            <p className="text-xs mt-2 text-slate-400 self-center">
              {item.day}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default Bars
