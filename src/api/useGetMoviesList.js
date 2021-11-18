import useApi from "../utils/useApi";


const useGetMoviesList =  ({searchTerm, page}) => {
    const path = `search/movie?query=${searchTerm}&page=${page}`
    return useApi({path})
}

export default useGetMoviesList
