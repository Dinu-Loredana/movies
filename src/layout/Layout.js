import styled from "styled-components"
import {Layout as AntLayout} from "antd"
import Header from "../components/header/Header"
import Logo from "../components/header/common/Logo"

const {Content: AntContent, Footer} = AntLayout

const Content = styled(AntContent)`
  background-color: #001a33;
  margin-top: 4em;
  padding: 3em;
  min-height: 100vh;
`

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <Content>
                {children}
            </Content>
            <Footer style={{backgroundColor: '#001529'}}>
                <Logo/>
            </Footer>
        </>
    )
}

export default Layout
