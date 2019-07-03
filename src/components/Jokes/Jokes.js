import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import Spinner from '../UI/Spinner/Spinner';
import './Jokes.css';

class Jokes extends Component {
    componentDidMount () {
        this.props.onFetchJokes();
    }

    onClickHandler = (id, value) => {
        this.props.onAddToFavList(id, value);
    }

    render () {
        let jokes = <Spinner />;
        if ( !this.props.loading ) {
            jokes = this.props.jokes.map( joke => {
              const { id, value } = joke;
              return <li onClick={() => this.onClickHandler(id, value)} key={id}>{value}</li>
            });
        }
        return (
          <div className="Jokes">
            <h2>Jokes</h2>
            <ul>
                {jokes}
            </ul>
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        jokes: state.jokes.jokes,
        loading: state.jokes.loading,
        favs: state.favs.favs
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchJokes: () => dispatch( actions.fetchJokes() ),
        onAddToFavList: (id, joke) => dispatch( actions.addToFavList( id, joke ) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Jokes );
