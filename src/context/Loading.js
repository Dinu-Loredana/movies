import {createContext} from "react";

const defaultValue = {
    loading: false,
    setLoading: () => {}
}

const LoadingContext = createContext(defaultValue);

export default LoadingContext