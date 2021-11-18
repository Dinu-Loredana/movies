import {Empty} from "antd";

const NotFound = () => {
    return (
        <div style={{marginTop: '5em'}}>
            <h1 style={{color: 'white', textAlign:'center'}}>Sorry, page not found.</h1>
            <h4 style={{color: 'white', textAlign:'center'}}>You tried to request a page that doesn't exist.</h4>
            <Empty description='NOT FOUND' />
        </div>
    )
}

export default NotFound