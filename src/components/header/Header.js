import {useBreakpoints} from 'react-breakpoints-hook';
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";


const Header = () => {
    const {mobile} = useBreakpoints({
        mobile: {min: 0, max: 768}
    });

    return mobile ? <HeaderMobile /> : <HeaderDesktop />
}
export default Header

