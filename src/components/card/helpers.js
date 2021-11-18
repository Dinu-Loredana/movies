import styled from "styled-components";
import {Button, Row} from "antd";



export const CardList = styled(Row)`
  flex-wrap: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
`



export const Wrapper = styled.div`
  background-color:#01294d;
  border: 0.5em solid #01294d;
  border-radius: 0.5em;
  padding: 0.3em;
  margin-bottom: 1em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const Btn =  (props) => {
    return <Button ghost shape='round' size='small' onClick={props.onClick} style={{marginRight:'1em'}}>{props.text}</Button>
}