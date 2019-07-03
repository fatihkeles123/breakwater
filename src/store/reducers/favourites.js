import * as actionTypes from '../actions/actionTypes';

const initialState = {
    favs: [],
    loading: false
};

const addToFavList = ( state, action ) => {
  let favs = [];
  const { id, joke } = action.data;
  if(state.favs.length===0){
    favs = [{ id, joke}];
  }
  else{
    favs = [...state.favs];
    const duplicate = favs.some(fav => fav.id === id);
    if(duplicate) return state;
    favs.push({ id, joke })
    favs.sort((a, b) => a.joke.localeCompare(b.joke));
  }
  return {
      favs,
      loading: false
    }
}

const removeFromFavList = ( state, action) => {
  if(state.favs.length === 0) return state;
  if(state.favs.length === 1) return { favs: [], loading: false };
  const favs = [...state.favs];
  const index = favs.findIndex(fav => fav.id === action.data.id);
  if(index+1){
    return {
      favs: [...favs.slice(0,index),...favs.slice(index+1)],
      loading: false
    }
  }
  return state;
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_TO_FAV_LIST: return addToFavList( state, action );
        case actionTypes.REMOVE_FROM_FAV_LIST: return removeFromFavList( state, action );
        default: return state;
    }
};

export default reducer;
