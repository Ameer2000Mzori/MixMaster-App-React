import DetailsCallBack from './DetailsCallBack.jsx'

const DetailsLogic = ({ id, setActiveDrinkId }) => {
  const { data, isLoading, isError } = DetailsCallBack(id)

  if (isLoading) return <div>loading....</div>
  if (isError) return <div>there is error...</div>

  if (!data || !data.drinks || data.drinks.length === 0) return null

  console.log(data)
  return (
    <>
      <div
        className="w-[90vw] h-[90vh] flex flex-col text-center items-center gap-5 bg-[#F4DFC8] rounded-md overflow-hidden shadow-xl fixed top-[5%]"
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
        <div className="flex-row flex text-center items-center justify-between w-[100%] h-[100%] p-2">
          <div className="text-black w-[40%] h-[100%] text-center items-center justify-center flex flex-col">
            <p> {data.drinks[0].strDrink}</p>
            {data.drinks[0].strVideo ? (
              <a href={data.drinks[0].strVideo}>video</a>
            ) : (
              <a>this item has no video</a>
            )}
          </div>
          <div className="text-black w-[40%] h-[100%] text-center items-center justify-center flex flex-col">
            <p> {data.drinks[0].strInstructions}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailsLogic
