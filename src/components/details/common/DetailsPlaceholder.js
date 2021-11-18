import {Col, Row, Skeleton} from "antd";


const DetailsPlaceholder = ({desktop, mobile}) => {

    return (
        <Row gutter={[24, 24]} justify="space-between" style={{height: 'auto', width: 'auto', color: 'white', marginBottom: '3em'}}>
            <Col lg={12} md={12} sm={24} xs={24}>
                <Skeleton active paragraph={{rows: 6}} />
            </Col>

            <Col lg={12} md={12} sm={24} xs={24}>
                {desktop && <Skeleton.Image style={{height: 360, width: 600 }}/>}
                {mobile && <Skeleton.Image style={{height: 300, width: 300, margin: '0 auto', display:'block'}}/>}
            </Col>
        </Row>
    )
}

export default DetailsPlaceholder