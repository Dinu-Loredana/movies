import useApi from "../utils/useApi";

const useGetMovieTrailer =  ({id}) => {
    const path = `movie/${id}/videos`
    return useApi({path})
}

export default useGetMovieTrailer
