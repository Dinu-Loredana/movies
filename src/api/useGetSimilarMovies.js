import useApi from "../utils/useApi";


const useGetMovieDetails =  ({id}) => {
    const path = `movie/${id}`
    return useApi({path})
}

export default useGetMovieDetails
