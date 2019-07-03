import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const fetchCategoriesSuccess = ( categories ) => {
    return {
        type: actionTypes.FETCH_CATEGORIES_SUCCESS,
        categories: categories
    };
};

export const fetchCategoriesFail = ( error ) => {
    return {
        type: actionTypes.FETCH_CATEGORIES_FAIL,
        error: error
    };
};

export const fetchCategoriesStart = () => {
    return {
        type: actionTypes.FETCH_CATEGORIES_START
    };
};

export const fetchCategories = () => {
    return dispatch => {
        dispatch(fetchCategoriesStart());
        axios.get( '/jokes/categories' )
            .then( res => {
                const fetchedCategories = [...res.data];
                dispatch(fetchCategoriesSuccess(fetchedCategories));
            } )
            .catch( err => {
                dispatch(fetchCategoriesFail(err));
            } );
    };
};

export const selectCategory = category => {
  return {
    type: actionTypes.SELECT_CATEGORY,
    category
  }
}
