import DetailsCallBack from './DetailsCallBack.jsx'

const DetailsLogic = ({ id, setActiveDrinkId }) => {
  const { data, isLoading, isError } = DetailsCallBack(id)

  if (isLoading) return <div>loading....</div>
  if (isError) return <div>there is error...</div>

  if (!data || !data.drinks || data.drinks.length === 0) return null

  return (
    <>
      <div
        className=" w-[90vw] h-[90vh]  md:h-[500px]  md:w-[500px] md:top-[25%] flex flex-col text-center items-center  bg-[#F4DFC8] rounded-md overflow-hidden shadow-xl fixed top-[5%] z-20"
        key={data.drinks[0].idDrink}
      >
        <button
          onClick={() => {
            setActiveDrinkId(0)
          }}
          className="absolute top-0 right-2 bg-black p-2 text-white"
        >
          X
        </button>
        <img
          className="h-[50%] w-[100%] object-cover"
          src={data.drinks[0].strDrinkThumb}
          alt={data.drinks[0].strDrink}
        />
        <div className="flex-col flex text-center items-center justify-between w-[100%] h-[50%] p-2 bg-white">
          <div className="text-black w-[100%] h-[50%] text-center items-center justify-center flex flex-col">
            <p> name : {data.drinks[0].strDrink}</p>
            {data.drinks[0].strVideo ? (
              <a href={data.drinks[0].strVideo} target="_blank">
                video
              </a>
            ) : (
              <a>this item has no video</a>
            )}
          </div>

          <div className="text-black w-[100%] h-[50%] text-center items-center justify-center flex flex-col ">
            <h1>"about"</h1>
            <p className="max-w-[50vw]"> {data.drinks[0].strInstructions}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailsLogic
