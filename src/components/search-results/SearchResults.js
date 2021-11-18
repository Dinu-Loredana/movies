import { useHistory, useLocation} from "react-router";
import MovieList from "./MovieList";
import {BackTop} from "antd";
import useGetMoviesList from "../../api/useGetMoviesList";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}



const SearchResults = () => {
    const query = useQuery()
    const page = query.get('page') || 1
    const searchTerm = query.get('q')
    const history = useHistory();
    const path = window.location.pathname;


    const {data, loading, error} = useGetMoviesList({searchTerm, page})

    const handleChange = (page) => {
        history.push(`${path}?q=${searchTerm}&page=${page}`)
    }


    return (
        <>
            <MovieList
                data={data?.results || []}
                searchTerm={searchTerm}
                errQuery={error}
                current={page}
                onChange={handleChange}
                total={data?.total_results || 0} loading={loading} />
            <BackTop/>
       </>
)
}

export default SearchResults
