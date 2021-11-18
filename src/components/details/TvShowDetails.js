import {Fragment, useEffect, useState} from "react";
import {getSimilarTvShow, getTvShowCharacters, getTvShowDetails, getTvShowTrailer} from "../../utils/ApiCalls";
import {useParams} from "react-router-dom";
import {Image} from "antd";
import {fallbackImgSrc, img_url} from "../common/helpers";
import {useBreakpoints} from "react-breakpoints-hook";
import Characters from "./common/Characters";
import Details from "./common/Details";
import DisplayCard from "../card/DisplayCard";





const TvShowDetails = () => {

    const [tvShowDetails, setTvShowDetails] = useState([])
    const [tvShowTrailer, setTvShowTrailer] = useState([])
    const [similarTvShow, setSimilarTvShow] = useState([])
    const [trailerAvailable, setTrailerAvailable] = useState(true)
    const [showChar, setShowChar] = useState([])
    const {movieId} = useParams()


    useEffect(() => {
        getTvShowDetails(movieId).then(data => setTvShowDetails(data))
        getTvShowTrailer(movieId).then(data => {
            if (data.length > 0) {
                const trailers = data.filter(movie => movie.type === 'Trailer')
                const otherVideos = data.filter(movie => movie.type !== 'Trailer')
                trailers.length > 0 && setTvShowTrailer(trailers[0].key)
                trailers.length <= 0 && setTvShowTrailer(otherVideos[0].key)
            } else {
                setTrailerAvailable(false)
            }
        })
        getSimilarTvShow(movieId).then(data => setSimilarTvShow(data))
        getTvShowCharacters(movieId).then(data =>setShowChar(data))

    }, [movieId])


    let {mobile, desktop} = useBreakpoints({
        mobile: {min: 0, max: 768},
        desktop: {min: 769, max: null},
    });

    const url = img_url + tvShowDetails.poster_path
    const movieImage = <Image width={'100%'} height={desktop ? 360 : 300} src={url} alt={tvShowDetails.name}/>
    const fallbackImage = <Image width={'100%'} height={desktop ? 360 : 300} src="error" fallback={fallbackImgSrc}/>
    const photo = tvShowDetails.poster_path === null ? fallbackImage : movieImage


    return (
        <Fragment>
            <Details info={tvShowDetails} trailer={trailerAvailable} video={tvShowTrailer} img={photo} desktop={desktop} mobile={mobile}/>
            <Characters data={showChar}/>
            <DisplayCard data={similarTvShow} heading='Similar TV Shows' btnVisible={false} name='name' linkName='tv-show' />
        </Fragment>
    )
}

export default TvShowDetails


// const movieImage = <Image width={'100%'} height={desktop && 360 || mobile && 300} src={url} alt={tvShowDetails.name}/>
// const fallbackImage = <Image width={'100%'} height={desktop && 360 || mobile && 300} src="error" fallback={fallbackImgSrc}/>