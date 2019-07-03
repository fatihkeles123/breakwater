import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const fetchJokesSuccess = ( jokes ) => {
    return {
        type: actionTypes.FETCH_JOKES_SUCCESS,
        jokes: jokes
    };
};

export const fetchJokesFail = ( error ) => {
    return {
        type: actionTypes.FETCH_JOKES_FAIL,
        error: error
    };
};

export const fetchJokesStart = () => {
    return {
        type: actionTypes.FETCH_JOKES_START
    };
};

export const fetchJokes = (query) => {
    return dispatch => {
        dispatch(fetchJokesStart());
        axios.get( '/jokes/search?query='+query )
            .then( res => {
                const fetchedJokes = [...res.data.result];
                dispatch(fetchJokesSuccess(fetchedJokes));
            } )
            .catch( err => {
                dispatch(fetchJokesFail(err));
            } );
    };
};
