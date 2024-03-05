import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const DetailsCallBack = (id) => {
  id = Number(id)
  const { data, isLoading, isError } = useQuery({
    queryKey: ['id', id],
    queryFn: () =>
      axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res) => res.data),
  })

  return { data, isLoading, isError }
}

export default DetailsCallBack
