import React, { useState } from 'react'
const Home = () => {
  return (
    <>
      <div className="h-[100vh] w-[100vw] text-center items-center justify-evenly flex flex-col">
        <div className="flex flex-col text-center items-center justify-center gap-4 w-[300px] h-[150px] bg-zinc-500 rounded-md text-white">
          <h1>search something</h1>
          <div className=" flex flex-row text-center items-center justify-center gap-4">
            <input type="text" className="text-black text-start pl-4" />
            <button>Search</button>
          </div>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default Home
