import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    jokes: [],
    loading: false
};

const fetchJokesStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchJokesSuccess = ( state, action ) => {
    return updateObject( state, {
        jokes: action.jokes,
        loading: false
    } );
};

const fetchJokesFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_JOKES_START: return fetchJokesStart( state, action );
        case actionTypes.FETCH_JOKES_SUCCESS: return fetchJokesSuccess( state, action );
        case actionTypes.FETCH_JOKES_FAIL: return fetchJokesFail( state, action );
        default: return state;
    }
};

export default reducer;
