import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const fetchFavsSuccess = ( favs ) => {
    return {
        type: actionTypes.FETCH_FAVS_SUCCESS,
        favs: favs
    };
};

export const fetchFavsFail = ( error ) => {
    return {
        type: actionTypes.FETCH_FAVS_FAIL,
        error: error
    };
};

export const fetchFavsStart = () => {
    return {
        type: actionTypes.FETCH_FAVS_START
    };
};

export const addToFavList = ( id, joke ) => {
  return {
    type: actionTypes.ADD_TO_FAV_LIST,
    data: {
      id,
      joke
    }
  }
}

export const removeFromFavList = id => {
  return {
    type: actionTypes.REMOVE_FROM_FAV_LIST,
    data: {
      id
    }
  }
}

export const fetchFavs = (query) => {
    return dispatch => {
        dispatch(fetchFavsStart());
        axios.get( '/favs/search?query='+query )
            .then( res => {
                const fetchedFavs = [...res.data.result];
                dispatch(fetchFavsSuccess(fetchedFavs));
            } )
            .catch( err => {
                dispatch(fetchFavsFail(err));
            } );
    };
};
