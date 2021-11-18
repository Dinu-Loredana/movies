import {ClockCircleOutlined} from "@ant-design/icons/lib/icons";
import {IconText} from "../../common/helpers";
import {Fragment} from "react";


const runTimeFormat = (min) => {
    const hour = Math.floor(min / 60);
    const minutes = min % 60;
    return `${hour}h ${minutes}min`
}


export const Heading = (props) => {
    return (
        <Fragment>
            <h1 style={{color: 'white', display:'inline' }}>{props.title}</h1>
            <span style={{fontSize:'1em', color: '#817070',  marginLeft:'0.5em', display:'inline'}}>({new Date(props.release_date).getFullYear()})</span>
        </Fragment>
    )
}

export const Runtime = (props) => {
    return <IconText icon={<ClockCircleOutlined />} text={runTimeFormat(props.runtime)}/>
}

export const Genres = (props) => {
    const genreList = props.genres?.map(gen => gen.name)
    const noGenre = 'Genre unknown'
    if (genreList?.length > 0) {
        return genreList.slice(0, 3)?.join(', ')
    }
    return noGenre
}

export const Tagline = ({...props}) => {
    return <h4 style={{color: '#817070', fontStyle: 'italic'}}>{props.text}</h4>
}

export const opts = {
    desktop: {
        height: '360',
        width: '100%'
    },
    mobile: {
        height: '300',
        width: '100%',
    }
}