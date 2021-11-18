import Heading from "./Heading";
import {CardList} from "./helpers";


const CardSection = (props) => {
    return (
         <div style={{marginBottom: '3em'}}>
             <Heading heading={props.heading} btnVisible={props.btnVisible} onClickToday={props.onClickToday} onClickWeek={props.onClickWeek}/>
             <CardList gutter={16}>
                {props.children}
            </CardList>
         </div>
    )
}

export default CardSection

