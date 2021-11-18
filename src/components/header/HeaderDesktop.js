import Logo from "./common/Logo";
import Navbar from "./common/Navbar";
import SearchForm from "./common/SearchForm";
import {Wrapper} from "./common/helpers";




const HeaderDesktop = () => {
    return (
        <Wrapper>
            <Logo />
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Navbar style={{width:'40%'}} />
                <SearchForm style={{width:'30%'}} />
            </div>
        </Wrapper>
    )
}

export default HeaderDesktop

