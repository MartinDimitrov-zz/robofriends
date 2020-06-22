import React, { Component } from 'react';

import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';
import Header from './Header';

export class MainPage extends Component {
    
    componentDidMount() {
        this.props.onRequestCats();
    }

    filterCats = () => {
        const { cats, searchField } = this.props;
        return cats.filter(cat => {
            return cat.name.toLowerCase().includes(searchField.toLowerCase());
        });
    }

    render() {
        const { onSearchChange, isPending } = this.props;

        return (
            <div className='tc'>
                <Header />
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    { isPending ? <h1>Loading</h1> :
                        <ErrorBoundry>
                            <CardList cats={this.filterCats()} />
                        </ErrorBoundry>
                    }
                </Scroll>
            </div>
            );
    }
};

export default MainPage