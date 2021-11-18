import {Search} from "./helpers";
import {useState} from "react";
import {useHistory} from "react-router";


const SearchForm = () => {
    const [searchMovie, setSearchMovie] = useState('')
    const history = useHistory();

    const searchInputHandler = (event) => {
        setSearchMovie(event.target.value)
    }

    const setQueryString = () => {
        history.push(`/search?q=${searchMovie}`);
        setSearchMovie('')
    }

    return (
        <Search placeholder='Search...' size="small"  enterButton="Search"
                value={searchMovie} onChange={searchInputHandler} onPressEnter={setQueryString} onSearch={setQueryString}
        />
    )
}

export default SearchForm
