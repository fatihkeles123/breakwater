import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import Spinner from '../UI/Spinner/Spinner';
import './Categories.css';

class Categories extends Component {
    componentDidMount () {
        this.props.onFetchCategories();
    }

    onClickHandler = (event) => {
        const value = event.target.innerHTML;
        this.props.onSelectCategory(value);
        this.props.onFetchJokes(value);
    }

    render () {
        let categories = <Spinner />;
        if ( !this.props.loading ) {
            categories = this.props.categories.map( category => <li className={this.props.selected===category ? 'selected' : 'unselected'} onClick={this.onClickHandler} key={category}>{category}</li>);
        }
        return (
          <div className="Categories">
            <h2>Categories</h2>
            <ul>
                {categories}
            </ul>
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories.categories,
        loading: state.categories.loading,
        selected: state.categories.selected
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchCategories: () => dispatch( actions.fetchCategories() ),
        onSelectCategory: query => dispatch ( actions.selectCategory(query) ),
        onFetchJokes: query => dispatch ( actions.fetchJokes(query) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Categories );
