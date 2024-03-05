import React, { useState, useEffect } from 'react'
const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [getSearchTerm, setGetSearchTerm] = useState('')

  const startSearching = () => {
    setGetSearchTerm(searchTerm)
  }

  useEffect(() => {
    console.log(getSearchTerm)
  }, [getSearchTerm])

  return (
    <>
      <div className="h-[100vh] w-[100vw] text-center items-center justify-evenly flex flex-col">
        <div className="flex flex-col text-center items-center justify-center gap-4 w-[300px] h-[150px] bg-zinc-400 rounded-md text-white">
          <h1>search something</h1>
          <div className=" flex flex-row text-center items-center justify-center gap-4">
            <input
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
              }}
              type="text"
              className="text-black text-start pl-4 rounded-sm"
            />
            <button onClick={startSearching}>Search</button>
          </div>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default Home
