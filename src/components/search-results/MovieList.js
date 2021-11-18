import {List, Spin} from "antd"
import MovieItem from "./MovieItem";
import MovieItemPlaceholder from "./MovieItemPlaceholder";
import {Pagination, ResultsTitle} from "./helpers";


const DEFAULT_PAGE_SIZE = 20

const MovieList = ({data, searchTerm, current, onChange, total, loading}) => {

    if(loading) {
        return (
            <>
                <Spin tip="Loading..." size="middle" style={{display:'block', margin:'1em auto'}}/>
                <List itemLayout="vertical" dataSource={data} renderItem={data => <MovieItemPlaceholder movie={data}/>}/>
            </>
        )
    }
    return (
        <>
            <ResultsTitle searchTerm={searchTerm} />
            <List itemLayout="vertical" dataSource={data} renderItem={data => <MovieItem movie={data} />}/>

            <Pagination
                current={current}
                defaultPageSize={DEFAULT_PAGE_SIZE}
                onChange={onChange}
                total={total}
                hideOnSinglePage
                showSizeChanger={false}
                showQuickJumper
                size='small' />

        </>
    )
}


export default MovieList

// TODO: investigate pagination
