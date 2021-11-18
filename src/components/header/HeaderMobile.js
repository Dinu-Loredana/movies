import {Fragment, useState} from "react";
import {Dropdown} from "antd";
import Navbar from "./common/Navbar";
import {CloseIcon, MenuHamburger, SearchIcon, Wrapper} from "./common/helpers";
import Logo from "./common/Logo";
import SearchForm from "./common/SearchForm";



const menu = (<Navbar />)

const HeaderMobile = () => {
    const [searchBarVisible, setSearchBarVisible] = useState(false)

    const searchIconHandler = () => {
        setSearchBarVisible(prevSearchBarState => !prevSearchBarState)
    }
    const searchBarHandler = () => {
        setSearchBarVisible(prevSearchBarState => !prevSearchBarState)
    }


    return (
        <Wrapper>
            {!searchBarVisible &&
                <Fragment>
                    <div style={{display: 'flex'}}>
                        <Dropdown overlay={menu} placement="bottomCenter"><MenuHamburger/></Dropdown>
                        <Logo/>
                    </div>
                    <SearchIcon onClick={searchIconHandler}/>
                </Fragment>
            }

            {searchBarVisible &&
                <Fragment>
                    <div style={{display:'flex', flexDirection:'row', alignItems: 'center', margin: 'auto'}}>
                        <SearchForm enterButton style={{width: '70%', margin: '0'}}/>
                        <CloseIcon onClick={searchBarHandler} />
                    </div>
                </Fragment>
            }
        </Wrapper>
    )
}

export default HeaderMobile


