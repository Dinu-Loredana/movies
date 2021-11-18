import styled from "styled-components";
import {Layout, Menu, Input} from "antd";
import {MenuOutlined, SearchOutlined, CloseSquareOutlined} from '@ant-design/icons'

const {Search: SearchAntd} = Input;
const {Header: HeaderAntd} = Layout

export const Wrapper = styled(HeaderAntd)`
  background-color: #001529;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  width: 100%;
`


export const MenuStyled = styled(Menu)`
  background-color: #001529;
  border-bottom: 0;
  
  &&&  a {
    color:white
  }
`

export const MenuHamburger = styled(MenuOutlined)`
  align-self: center;
  
  &&& svg {
    height: 1.2em;
    width: 1.2em;
    color: white;
    
    :hover {
      color: #007bff;
    }
  }
`


export const Search = styled(SearchAntd)`
    align-self: center;

    &&& .ant-btn-primary {
      background-color: #007bff;
      border-color: #007bff;
    }
`



export const SearchIcon = styled(SearchOutlined)`
  &&& {
    display: flex;
    align-items: center;
  }
  
  &&& svg {
    height: 1.5em;
    width: 1.5em;
    color: #007bff;

    :hover {
      cursor: pointer;
    }
  }
`

export const CloseIcon = styled(CloseSquareOutlined)`
  &&& svg {
    color: #7b8083;
    margin-left: 10px;

    :hover {
      cursor: pointer;
    }
  }
`

