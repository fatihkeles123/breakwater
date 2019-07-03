import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import Spinner from '../UI/Spinner/Spinner';
import './Favourites.css';

class Favourites extends Component {

    onClickHandler = (id, value) => {
      this.props.onRemoveFromFavList(id, value);
    }

    render () {
        let favs = <Spinner />;
        if ( !this.props.loading ) {
            favs = this.props.favs.map( fav => {
              const { id, joke } = fav;
              return <li onClick={() => this.onClickHandler(id, joke)} key={id}>{joke}</li>
            });
        }
        return (
          <div className="Favourites">
            <h2>Favourites</h2>
            <ul>
                {favs}
            </ul>
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.favs.loading,
        favs: state.favs.favs
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRemoveFromFavList: (id, joke) => dispatch( actions.removeFromFavList(id, joke) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Favourites );
