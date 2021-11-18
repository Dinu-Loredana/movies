import {Link} from "react-router-dom";

const Logo = () => {

    return (
        <Link to='/'>
            <div style={{color:'white', marginLeft:'1em', textTransform:'uppercase'}}>movies
                <span style={{color: '#007bff', textTransform:'lowercase'}}>db</span>
            </div>
        </Link>
    )
}

export default Logo