import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
//import {cats} from './cats';
import './App.css';

import { setSearchField, requestCats } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchCats.searchField,
        cats: state.requestCats.cats,
        isPending: state.requestCats.isPending,
        error: state.requestCats.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestCats: () => requestCats(dispatch)
    };
};

class App extends Component {
    
    componentDidMount() {
        this.props.onRequestCats();
    }
    
    render() {
        const { searchField, onSearchChange, cats, isPending } = this.props;
        const filterCats = cats.filter(cat => {
            return cat.name.toLowerCase().includes(searchField.toLowerCase());
        });
        
        if(isPending) {
            return <h1 className='tc pt7'>LOADING...</h1>;
        } else {
            return(
                <div className='tc'>
                    <h1 className='f1'>Cat Friends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList cats={filterCats}/>
                        </ErrorBoundry>                        
                    </Scroll>
                </div>
            );
        }
    }
 };

export default connect(mapStateToProps, mapDispatchToProps)(App);