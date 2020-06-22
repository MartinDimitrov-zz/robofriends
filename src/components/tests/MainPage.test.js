import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import MainPage from '../MainPage';

let wrapper;

beforeEach(() => {
    const mockProps = {
        onRequestCats: jest.fn(),
        cats: [],
        searchField: '',
        isPending: false
    };
    
    wrapper = shallow(<MainPage {...mockProps}/>);
});

it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
});

it('fileters Cats', () => {
    const mockProps = {
        onRequestCats: jest.fn(),
        cats: [],
        searchField: 'a',
        isPending: false
    };
    
    wrapper = shallow(<MainPage {...mockProps}/>);
    expect(wrapper.instance().filterCats()).toEqual([]);
});

it('fileters Cats correctly', () => {
    const filteredCats = [
        {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz'
        }
    ];
    
    const mockProps = {
        onRequestCats: jest.fn(),
        cats: [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz'
            }
        ],
        searchField: 'Leanne',
        isPending: false
    };
    
    wrapper = shallow(<MainPage {...mockProps}/>);
    expect(wrapper.instance().filterCats()).toEqual(filteredCats);
});

it('fileters Cats correctly 2', () => {
    const filteredCats = [
        {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz'
        }
    ];
    
    const mockProps = {
        onRequestCats: jest.fn(),
        cats: [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz'
            }
        ],
        searchField: 'Xavier',
        isPending: false
    };
    
    wrapper = shallow(<MainPage {...mockProps}/>);
    expect(wrapper.instance().filterCats()).toEqual([]);
});