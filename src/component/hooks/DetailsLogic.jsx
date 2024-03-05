import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const DetailsLogic = (id) => {
  id = Number(id)
  const { data, isLoading, isError } = useQuery({
    queryKey: ['id', id],
    queryFn: () =>
      axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res) => res.data),
  })

  if (isLoading) return <div>loading....</div>
  if (isError) return <div>there is error...</div>

  // Make sure data is available before trying to access its properties
  if (!data || !data.drinks || data.drinks.length === 0)
    return <div>No data found</div>

  return (
    <>
      <div
        className="w-[300px] h-[350px] flex flex-col text-center items-center gap-5 bg-[#F4DFC8] rounded-md overflow-hidden shadow-xl fixed top-[25%]"
        key={data.drinks[0].idDrink}
      >
        <button className="absolute top-0 right-2">X</button>
        <img
          className="h-[250px] w-[100%] object-cover"
          src={data.drinks[0].strDrinkThumb}
          alt={data.drinks[0].strDrink}
        />
        <div className="flex-row flex text-center items-center justify-between w-[100%] h-[100%] p-2">
          <div className="text-black w-[50%] h-[100%] text-center items-center justify-center flex flex-col">
            <h1 className="text-[15px]">{data.drinks[0].strDrink}</h1>
            <h2 className="text-[11px]">{data.drinks[0].strAlcoholic}</h2>
          </div>
          <div className="text-black w-[50%] h-[100%] text-center items-center justify-center flex flex-col">
            <h1>Id: {data.drinks[0].idDrink}</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailsLogic
