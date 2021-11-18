import {Fragment, useEffect, useState} from "react";
import {
    getNowPlayingMovies,
    getTopRatedMovies,
    getTrendingToday,
    getTrendingWeek,
    getUpcomingMovies
} from "../utils/ApiCalls";
import DisplayCard from "../components/card/DisplayCard";



const MoviesPage = () => {
    const [trending, setTrending] = useState([])
    const [upcomingMovies, setUpcomingMovies] = useState({})
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [nowPlaying, setNowPlaying] = useState([])
    const {results} = upcomingMovies


    useEffect(() => {
        getTrendingToday().then(setTrending)
        getUpcomingMovies().then(setUpcomingMovies)
        getTopRatedMovies().then(setTopRatedMovies)
        getNowPlayingMovies().then(setNowPlaying)

    }, [])


    const displayTrendingToday = () => {
        getTrendingToday().then(setTrending)
    }

    const displayTrendingWeek = () => {
        getTrendingWeek().then(setTrending)
    }


    return (
        <Fragment>
            <DisplayCard data={trending} heading='Trending' btnVisible={true} onClickToday={displayTrendingToday} onClickWeek={displayTrendingWeek} name='title' linkName='movies'  />
            <DisplayCard data={results} heading='Upcoming' btnVisible={false} name='title' linkName='movies' />
            <DisplayCard data={topRatedMovies} heading='Top Rated Movies' btnVisible={false} name='title' linkName='movies' />
            <DisplayCard data={nowPlaying} heading='Now Playing' btnVisible={false} name='title' linkName='movies' />
        </Fragment>
    )

}

export default MoviesPage


