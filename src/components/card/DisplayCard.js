import CardSection from "./CardSection";
import CardPlaceholder from "./CardPlaceholder";
import Card from "./Card";
import {useEffect, useState} from "react";





const DisplayCard = ({data, heading,btnVisible,onClickToday,onClickWeek, name, linkName}) => {

    const [loading, setLoading] = useState(true)

     useEffect(() => {
        let timer = setTimeout(() => setLoading(false), 3000)

         return () => clearTimeout(timer);

     }, [])


    return (
        <CardSection heading={heading} btnVisible={btnVisible} onClickToday={onClickToday} onClickWeek={onClickWeek}>
            {loading && data?.map(item =>
                <CardPlaceholder key={item.id}/>)
            }

            {data?.map(item =>
                <Card key={item.id} id={item.id} text={item[name]} title={item.title} imgSrc={item.poster_path}
                  vote_average={item.vote_average}  moviesComp={true} linkName={linkName}/>)
            }

        </CardSection>
    )
}


export default DisplayCard
