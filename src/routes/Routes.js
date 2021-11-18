import {Route, Switch} from "react-router-dom";
import SearchResults from "../components/search-results/SearchResults";
import NotFound from "../pages/NotFound";
import TVShowsPage from "../pages/TVShowsPage";
import TvShowDetails from "../components/details/TvShowDetails";
import MovieDetails from "../components/details/MovieDetails";
import MoviesPage from "../pages/MoviesPage";


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <MoviesPage />
            </Route>

            <Route exact path="/search">
                <SearchResults />
            </Route>

            <Route path="/movies/:movieId">
                <MovieDetails />
            </Route>

            <Route path="/tv-show/:movieId">
                <TvShowDetails />
            </Route>

            <Route exact path="/tv-shows">
                <TVShowsPage />
            </Route>

            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    )
}

export default Routes
