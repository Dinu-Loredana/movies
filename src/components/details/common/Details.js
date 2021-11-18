import {Fragment, useEffect, useState} from "react";
import YouTube from "react-youtube";
import {Col, Divider, Row} from "antd";
import DetailsPlaceholder from "./DetailsPlaceholder";
import {Genres, Heading, opts, Runtime, Tagline} from "./helpers";
import {Overview, Score} from "../../common/helpers";




const Details = ({info, trailer, video, img, desktop, mobile}) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let timer = setTimeout(() => setLoading(false), 3000)

        return () => clearTimeout(timer);

    }, [])


    return (
        <Fragment>
            {loading && <DetailsPlaceholder desktop={desktop} mobile={mobile} />}
            {!loading &&
                <Row gutter={[24, 24]} justify="space-between" style={{height: 'auto', width: 'auto', color: 'white', marginBottom: '3em'}}>
                    <Col lg={12} md={12} sm={24} xs={24}>
                        <Heading title={info.title || info.name} release_date={info.release_date || info.first_air_date}/>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', flexWrap: 'wrap'}}>
                            <Score vote_average={info.vote_average}/>
                            <Runtime runtime={info.runtime || info.episode_run_time?.[0]}/>
                            <Genres genres={info.genres}/>
                        </div>
                        <Divider style={{margin: '10px'}}/>
                        <Tagline text={info.tagline}/>
                        <Overview overview={info.overview} maxLine={4}/>
                    </Col>

                    <Col lg={12} md={12} sm={24} xs={24}>
                        {trailer && desktop && <YouTube videoId={video} opts={opts.desktop}/>}
                        {trailer && mobile && <YouTube videoId={video} opts={opts.mobile}/>}
                        {!trailer && img}
                    </Col>
                </Row>
            }
        </Fragment>
    )
}

export default Details