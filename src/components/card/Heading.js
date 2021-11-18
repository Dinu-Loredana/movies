import {Btn, Wrapper} from "./helpers";



const Heading = (props) => {
    return (
        <Wrapper>
            <h1 style={{color:'white', fontSize:'1em'}}>{props.heading}</h1>
            {props.btnVisible &&
                <div style={{display:'flex', flexDirection:'row'}}>
                    <Btn text='Today' onClick={props.onClickToday}/>
                    <Btn text='Week' onClick={props.onClickWeek}/>
                </div>
            }
        </Wrapper>
    )
}

export default Heading

//{props.btnVisible && <DisplayBtn onClickToday={props.onClickToday} onClickWeek={props.onClickWeek} />}