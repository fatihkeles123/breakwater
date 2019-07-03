import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    categories: [],
    selected: '',
    loading: false
};

const fetchCategoriesStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchCategoriesSuccess = ( state, action ) => {
    return updateObject( state, {
        categories: action.categories,
        loading: false
    } );
};

const fetchCategoriesFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const selectCategory = ( state, action ) => {
  return updateObject( state, { selected: action.category });
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_CATEGORIES_START: return fetchCategoriesStart( state, action );
        case actionTypes.FETCH_CATEGORIES_SUCCESS: return fetchCategoriesSuccess( state, action );
        case actionTypes.FETCH_CATEGORIES_FAIL: return fetchCategoriesFail( state, action );
        case actionTypes.SELECT_CATEGORY: return selectCategory( state, action );
        default: return state;
    }
};

export default reducer;
