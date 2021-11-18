import {Fragment} from "react";
import {Card as CardTemplate, Col} from "antd";
import LinesEllipsis from "react-lines-ellipsis";
import {fallbackImgSrc, img_url, Score, Title} from "../common/helpers";


const Card = (props) => {

    return (
        <Col key={props.id} xl={3} lg={3} md={6} sm={6} xs={12}>
            <CardTemplate style={{borderRadius: '0.5em', borderColor: '#001a33', marginBottom: '0.5em', height:'20em', overflow:'hidden'}}
                          cover={props.imgSrc === null ?
                            <img src={fallbackImgSrc} alt={props.title} width='100%' height='150px'/> :
                            <img src={img_url + props.imgSrc} alt={props.title} width='100%' height='150px' style={{borderTopLeftRadius: '0.5em', borderTopRightRadius: '0.5em'}}/>
                          }>
                {props.moviesComp && <Fragment>
                    <Title id={props.id} title={<LinesEllipsis text={props.text} maxLine={4} ellipsis='...' style={{fontSize:'0.9em'}}/>} to={`/${props.linkName}/${props.id}`}/>
                    <Score vote_average={Math.floor(props.vote_average)} /></Fragment>
                }
                {props.charactersComp && <Fragment>
                    <LinesEllipsis text={props.text} maxLine={1} ellipsis='...' style={{fontSize: '0.8em', fontWeight:'bold'}}/>
                    <LinesEllipsis text={props.character} maxLine={1} ellipsis='...'  style={{fontSize: '0.7em'}} />
                </Fragment>
                }
            </CardTemplate>
        </Col>
    )
}

export default Card
