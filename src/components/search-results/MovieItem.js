import {Col, List} from "antd";
import {setDateFormat}  from "./helpers";
import {Overview, Score, img_url, fallbackImgSrc, Title} from "../common/helpers";


const {Item} = List


const MovieItem = ({movie}) => {

    const {id, title, release_date, poster_path, vote_average, overview} = movie
    const movieImage = <img width={150} height={150} src={img_url + poster_path} alt={title} style={{display: 'block', margin: 'auto'}} />
    const fallbackImage = <img width={150} height={150} src={fallbackImgSrc} alt='fallback' style={{display: 'block', margin: 'auto'}} />
    const photo = poster_path === null ? fallbackImage : movieImage


    return (
        <Item style={{height: 'auto', backgroundColor: 'ivory', borderRadius: '1.5em',  display:'flex', flexDirection:'row', flexWrap:'wrap', marginBottom:'1em'}}>
            <Col lg={20} md={18} sm={24} xs={24} style={{padding: '2em'}}>
                <Title title={title} id={id} to={`/movies/${id}`} />
                <Overview overview={overview} maxLine={2} />
                <div style={{display:'flex', flexDirection:'row'}}>
                    <Score vote_average={vote_average}/>
                    <p>{setDateFormat(release_date)}</p>
                </div>
            </Col>

            <Col lg={4} md={6} sm={24} xs={24} >
                {photo}
            </Col>
        </Item>
    )
}


export default MovieItem





