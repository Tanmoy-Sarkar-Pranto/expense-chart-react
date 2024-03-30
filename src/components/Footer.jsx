import React from "react"

const Footer = ({ data }) => {
  let totalSpent = 0
  data.map((item, index) => {
    totalSpent += item.amount
  })
  return (
    <footer className="mt-4">
      <p className="text-sm text-slate-400">Total this month</p>
      <div className="flex justify-between items-center">
        <p className="font-bold text-3xl tracking-wide">${totalSpent}</p>
        <div className="flex flex-col ">
          <p className="text-sm text-yellow-950 text-end">+2.4%</p>
          <p className="text-sm text-slate-400">from last month</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
