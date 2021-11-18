import {Fragment, useEffect, useState} from "react";
import {getOnTheAirTvShow, getPopularTvShow, getTopRatedTvShow} from "../utils/ApiCalls";
import DisplayCard from "../components/card/DisplayCard";



const TVShowsPage = () => {
    const [onTheAir, setOnTheAir] = useState([])
    const [popularTV, setPopularTV] = useState([])
    const [topRatedTV, setTopRatedTV] = useState([])


    useEffect(() => {
        getOnTheAirTvShow().then(data => setOnTheAir(data))
        getPopularTvShow().then(data => setPopularTV(data))
        getTopRatedTvShow().then(data => setTopRatedTV(data))

    }, [])


    return (
        <Fragment>
            <DisplayCard data={onTheAir} heading='On The Air' btnVisible={false} name='name' linkName='tv-show' />
            <DisplayCard data={popularTV} heading='Popular TV Shows' btnVisible={false} name='name' linkName='tv-show' />
            <DisplayCard data={topRatedTV} heading='Top Rated TV Shows' btnVisible={false} name='name' linkName='tv-show' />
        </Fragment>
    )
}

export default TVShowsPage