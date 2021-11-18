import request from "./request";

// /////////////////////////// MOVIES
// export const getMoviesList =  async (searchTerm, page) => {
//     const url = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&page=${page}`
//     const {data} = await request({url})
//     return data
// }


 // export const getMovieDetails = async (id) => {
 //        const url = `https://api.themoviedb.org/3/movie/${id}`
 //        const {data} = await request({url})
 //        return data
 //    }


   // export const getMovieTrailer= async (id) => {
   //      const url = `https://api.themoviedb.org/3/movie/${id}/videos`
   //      const {data} = await request({url})
   //      const {results} = data
   //      return results
   //  }


    export const getMovieCharacters = async (id) => {
        const url = `https://api.themoviedb.org/3//movie/${id}/credits`
        const {data} = await request({url})
        const {cast} = data
        return cast
    }


export const getTrendingToday= async () => {
    const url = `https://api.themoviedb.org/3/trending/movie/day`
    const {data} = await request({url})
    const {results} = data
    return results
}

export const getTrendingWeek= async () => {
    const url = `https://api.themoviedb.org/3/trending/movie/week`
    const {data} = await request({url})
    const {results} = data
    return results
}

export const getUpcomingMovies= async () => {
    const url = `https://api.themoviedb.org/3/movie/upcoming`
    const {data} = await request({url})
    const {results, dates} = data
    return {results, dates}
}

export const getTopRatedMovies= async () => {
    const url = `https://api.themoviedb.org/3/movie/top_rated`
    const {data} = await request({url})
    const {results} = data
    return results
}

export const getSimilarMovies= async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/similar`
    const {data} = await request({url})
    const {results} = data
    return results
}

export const getNowPlayingMovies= async () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing`
    const {data} = await request({url})
    const {results} = data
    return results
}


/////////////////////////// TV SHOWS


export const getOnTheAirTvShow= async () => {
    const url = `https://api.themoviedb.org/3/tv/on_the_air`
    const {data} = await request({url})
    const {results} = data
    return results
}


export const getPopularTvShow= async () => {
    const url = `https://api.themoviedb.org/3/tv/popular`
    const {data} = await request({url})
    const {results} = data
    return results
}

export const getTopRatedTvShow= async () => {
    const url = `https://api.themoviedb.org/3/tv/top_rated`
    const {data} = await request({url})
    const {results} = data
    return results
}

export const getTvShowDetails = async (id) => {
    const url = `https://api.themoviedb.org/3/tv/${id}`
    const {data} = await request({url})
    return data
}


export const getTvShowTrailer= async (id) => {
    const url = `https://api.themoviedb.org/3/tv/${id}/videos`
    const {data} = await request({url})
    const {results} = data
    return results
}


export const getTvShowCharacters = async (id) => {
    const url = `https://api.themoviedb.org/3//tv/${id}/credits`
    const {data} = await request({url})
    const {cast} = data
    return cast
}

export const getSimilarTvShow = async (id) => {
    const url = `https://api.themoviedb.org/3/tv/${id}/similar`
    const {data} = await request({url})
    const {results} = data
    return results
}

