import React from "react"
import Header from "./components/Header"
import Content from "./components/Content"

const App = () => {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center bg-red-100 font-Dmsans">
      <div className="max-w-[30rem] min-w-[15rem] pr-8 pl-8 md:pr-0 md:pl-0">
        <Header />
        <Content />
      </div>
    </main>
  )
}

export default App
