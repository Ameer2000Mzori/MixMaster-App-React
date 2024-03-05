import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const SearchLogic = (searchTerm) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['searchTerm', searchTerm],
    queryFn: () =>
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        )
        .then((res) => res.data),
  })

  return { data, isLoading, isError }
}

export default SearchLogic
