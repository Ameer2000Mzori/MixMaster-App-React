import React, { useState, useEffect } from 'react'
import DetailsLogic from './hooks/DetailsLogic.jsx'
import SearchLogic from './hooks/SearchLogic.jsx'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [getSearchTerm, setGetSearchTerm] = useState('gin')
  const [activeDrinkId, setActiveDrinkId] = useState(0)

  const { data, isLoading, isError } = SearchLogic(getSearchTerm)

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

  console.log(data, isError, isLoading)

  const showDetails = (id) => {
    id = Number(id)
    setActiveDrinkId(id)
  }

  return (
    <>
      <div className="  text-center items-center justify-center flex flex-col overflow-x-hidden gap-12 pt-40 ">
        <div className="flex flex-col text-center items-center justify-center gap-4 w-[300px] h-[150px] bg-[#F4EAE0] rounded-md text-black">
          <h1>search something</h1>
          <div className=" flex flex-row text-center items-center justify-center gap-4 ">
            <input
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
              }}
              type="text"
              className="text-black text-start pl-4 rounded-sm"
            />
            <button
              onClick={() => {
                setGetSearchTerm(searchTerm)
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div className=" w-[80vw] flex flex-row text-center items-center justify-center gap-4 flex-wrap">
          {data.drinks.map((drink) => {
            return (
              <div
                className="w-[300px] h-[350px] flex flex-col text-center items-center  gap-5 bg-[#F4DFC8]  rounded-md overflow-hidden shadow-xl "
                key={drink.idDrink}
              >
                <img
                  className="h-[250px] w-[100%] object-cover"
                  src={drink.strDrinkThumb}
                  alt=""
                />
                <div className="flex-row flex text-center items-center justify-between w-[100%] h-[100%] p-2">
                  <div className="text-black w-[50%] h-[100%] text-center items-center justify-center flex flex-col">
                    <h1 className="text-[15px] ">{drink.strDrink}</h1>
                    <h2 className="text-[11px]">{drink.strAlcoholic}</h2>
                  </div>
                  <div className="text-black w-[50%] h-[100%] text-center items-center justify-center flex flex-col ">
                    <h1>id: {drink.idDrink}</h1>
                    <button
                      onClick={() => {
                        showDetails(drink.idDrink)
                      }}
                      className="bg-[#000000] p-1 rounded-md text-white hover:bg-blue-400 active:bg-blue-200"
                    >
                      more details
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        {activeDrinkId ? (
          <DetailsLogic
            id={activeDrinkId}
            setActiveDrinkId={setActiveDrinkId}
          />
        ) : null}
      </div>
    </>
  )
}

export default Home
