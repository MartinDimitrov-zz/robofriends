import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
//import {cats} from './cats';
import './App.css';

class App extends Component {
    
    constructor() {
        super();
        this.state = {
            //cats: cats,
            cats: [],
            searchfield: ''
        };
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({cats: users}));
        //this.setState({ cats: cats });
    }
    
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }
    
    render() {
        const { cats, searchfield } = this.state;
        const filterCats = cats.filter(cat => {
            return cat.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        
        if(!cats.length) {
            return <h1 className='tc pt7'>LOADING...</h1>;
        } else {
            return(
                <div className='tc'>
                    <h1 className='f1'>Cat Friends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList cats={filterCats}/>
                    </Scroll>
                </div>
            );
        }
    }
 };

export default App;