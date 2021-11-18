import styled from "styled-components";
import {SearchIcon} from "../header/common/helpers";
import {Pagination as PaginationAntd} from "antd";


export const setDateFormat = (date) => {
    return new Date(date).toLocaleDateString('default', {day:'numeric', month:'numeric', year:'numeric'})
}



export const ResultsMessage = styled.h1`
  color:white;
  text-align:center;
  font-style: italic;
  margin: 1em 0.5em\
`

export const ResultsTitle = (props) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <SearchIcon style={{width: '1.2em', pointerEvents: 'none'}} />
            <ResultsMessage>Results for: "{props.searchTerm}"</ResultsMessage>
        </div>
    )
}

export const Pagination = styled(PaginationAntd)`
    &&& a, span {
      color:white
    }
  
  &&& .ant-pagination-item-ellipsis {
    color: white;
  }
  
  &&& .ant-pagination-options-quick-jumper {
    color: white;
  }
  
  &&& .ant-pagination-item-active {
    background-color: #001a33;
  }
  
 
`
