import Card from '../../card/Card'
import CardSection from "../../card/CardSection";
import {fallbackImgSrc} from "../../common/helpers";
import {Fragment, useEffect, useState} from "react";
import CardPlaceholder from "../../card/CardPlaceholder";
import {Card as CardTemplate} from "antd";

const Characters = ({data}) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let timer = setTimeout(() => setLoading(false), 3000)

        return () => clearTimeout(timer);

    }, [])


    return (
        <CardSection heading='Cast & Crew' btnVisible={false}>
            {loading &&
                <Fragment>
                    {data?.length > 0 && data?.map(item => <CardPlaceholder key={item.id}/>)}
                    {data.length <= 0 && <CardPlaceholder key={1}/>}
                </Fragment>
            }

            {!loading &&
                <Fragment>
                    {data?.length > 0 && data.map(item => <Card key={item.id} id={item.id} title={item.title} text={item.name} imgSrc={item.profile_path} character={item.character}  charactersComp={true} />)}
                    {data.length <= 0 &&
                        <CardTemplate style={{borderRadius: '0.5em', borderColor: '#001a33', marginBottom: '0.5em', height:'20em', overflow:'hidden'}} cover={<img src={fallbackImgSrc} alt='fallback' width='100%' height='150px'/>}>
                            <p>No cast available</p>
                        </CardTemplate>
                    }
                </Fragment>
            }

        </CardSection>

    )
}

export default Characters


//                    {data.length <= 0 && <Card key={1} cover={<img src={fallbackImgSrc} alt='error' width='100%' height='150px'/>} title='No cast available' />}
