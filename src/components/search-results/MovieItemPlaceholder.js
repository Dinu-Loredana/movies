import {Col, Skeleton, List} from "antd";

const {Item} = List

const MovieItemPlaceholder = ({movie}) => {

    return (
        <Item  key={movie.id} style={{height: 'auto', backgroundColor: 'ivory', borderRadius: '1.5em',  display:'flex', flexDirection:'row', flexWrap:'wrap', marginBottom:'1em'}}>
            <Col lg={20} md={18} sm={24} xs={24} style={{padding: '2em'}}>
                <Skeleton active paragraph={{rows: 2}} />
            </Col>

            <Col lg={4} md={6} sm={24} xs={24} >
                <Skeleton.Image width={150} height={150} style={{display:'block', margin: 'auto'}}/>
            </Col>
        </Item>
    )
}

export default MovieItemPlaceholder


// <Row  key={movie.id} wrap style={{width: '90%', height: 'auto', margin: '1.5em auto', backgroundColor: 'ivory', borderRadius: '1.5em'}}>