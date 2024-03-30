import React from "react"
import Bars from "./Bars"
import Footer from "./Footer"
import data from "../../data"

const Content = () => {
  // console.log(data)

  return (
    <section className="flex flex-col h-[23rem] bg-stone-50 rounded-lg px-4 py-6">
      <h1 className="font-bold text-[22px]">Spending - Last 7 days</h1>
      <Bars data={data} />
      <hr className="h-[2px] w-[100%] bg-red-100 mt-6" />
      <Footer data={data} />
    </section>
  )
}

export default Content
