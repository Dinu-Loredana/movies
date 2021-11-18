import {MenuStyled} from "./helpers"
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <MenuStyled defaultSelectedKeys={['1']} mode="horizontal">
            <MenuStyled.Item key="1" >
                <NavLink to='/'>Movies</NavLink>
            </MenuStyled.Item>

            <MenuStyled.Item key="2">
                <NavLink to='/tv-shows'>TV Shows</NavLink>
            </MenuStyled.Item>
        </MenuStyled>
    )
}

export default Navbar

// <MenuStyled selectedKeys={['1', '2']} mode="horizontal" >
//     <MenuStyled.Item key="1" >
//     <NavLink to='/'>Movies</NavLink>
// </MenuStyled.Item>
//
// <MenuStyled.Item key="2" style={{color:'white'}}>
//     <NavLink to='/tv-shows'>TV Shows</NavLink>
// </MenuStyled.Item>
// </MenuStyled>



