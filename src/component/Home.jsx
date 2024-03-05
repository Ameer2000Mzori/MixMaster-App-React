import React, { useState, useEffect } from 'react'
import SearchLogic from './hooks/SearchLogic.jsx'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [getSearchTerm, setGetSearchTerm] = useState('gin')

  const { data, isLoading, isError } = SearchLogic(getSearchTerm)

  const startSearching = () => {
    setGetSearchTerm(searchTerm)
  }

  if (isLoading)
    return (
      <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        loading....
      </div>
    )
  if (isError)
    return (
      <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        there was an error...{' '}
      </div>
    )

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
