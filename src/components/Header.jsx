import React from "react"
import logoImage from "../assets/images/logo.svg"

const Header = () => {
  return (
    <header className=" bg-red-400 rounded-lg text-white text-sm mb-4">
      <div className="h-[6rem] py-4 px-4 relative">
        <p className="capitalize font-extralight mb-2">my balance</p>
        <p className="font-bold text-xl tracking-widest">$921.48</p>
        <img
          src={logoImage}
          alt="logo"
          className="absolute top-7 right-4 w-[4rem]"
        />
      </div>
    </header>
  )
}

export default Header
