import {Fragment, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useBreakpoints} from 'react-breakpoints-hook';
import {Image} from "antd";
import {getMovieCharacters, getSimilarMovies} from "../../utils/ApiCalls";
import {fallbackImgSrc, img_url} from "../common/helpers";
import Characters from "./common/Characters";
import Details from "./common/Details";
import DisplayCard from "../card/DisplayCard";
import useGetMovieDetails from "../../api/useGetMovieDetails";
import useGetMovieTrailer from "../../api/useGetMovieTrailer";


const getMovieTrailerFromList = (data) => {
    console.log(data)
    const results = data?.results || []
    const trailers = results.filter(movie => movie.type === 'Trailer')
    const otherVideos = results.filter(movie => movie.type !== 'Trailer')

    return trailers?.[0]?.key || otherVideos?.[0]?.key
}


const MovieDetails = () => {
    const [similarMovies, setSimilarMovies] = useState([])
    const [movieChar, setMovieChar] = useState([])

    const {movieId} = useParams()

    const {data: movieDetails} = useGetMovieDetails({id: movieId})

    const {data: movieTrailerData} = useGetMovieTrailer({id: movieId})

    const movieTrailer = getMovieTrailerFromList(movieTrailerData)

    let {mobile, desktop} = useBreakpoints({
        mobile: {min: 0, max: 768},
        desktop: {min: 769, max: null},
    });


    useEffect(() => {

        getSimilarMovies(movieId).then(data => setSimilarMovies(data))
        getMovieCharacters(movieId).then(data =>setMovieChar(data))

    }, [movieId])


    const url = img_url + movieDetails.poster_path
    const movieImage = <Image width={'100%'} height={desktop ? 360 : 300} src={url} alt={movieDetails.title}/>
    const fallbackImage = <Image width={'100%'} height={desktop ? 360 : 300} src="error" fallback={fallbackImgSrc}/>
    const photo = movieDetails.poster_path === null ? fallbackImage : movieImage


    return (
        <Fragment>
            <Details info={movieDetails} trailer={!!movieTrailer} video={movieTrailer} img={photo} desktop={desktop} mobile={mobile}/>
            <Characters data={movieChar}/>
            <DisplayCard data={similarMovies} heading='Similar Movies' btnVisible={false} name='title' linkName='movies'/>
        </Fragment>
    )
}

export default MovieDetails
