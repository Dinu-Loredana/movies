import {Card as CardTemplate, Col, Skeleton} from "antd";


const CardPlaceholder = (props) => {

    return (
        <Col key={props.id} xl={3} lg={3} md={6} sm={6} xs={12}>
            <CardTemplate style={{borderRadius: '0.5em', borderColor: '#001a33', marginBottom: '0.5em', height:'20em', overflow:'hidden'}}>
                <Skeleton.Image size='large'  />
                <Skeleton active paragraph={{rows: 1}} />
            </CardTemplate>
        </Col>
    )
}

export default CardPlaceholder

