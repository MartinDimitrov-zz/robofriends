import React from 'react';
import { shallow } from 'enzyme';
import CardList from '../CardList';

it('expect to render Card component', () => {
    const mockCats = [
        {
            id: 1,
            name: 'John Smith',
            username: 'johny',
            email: 'some@email.com'
        }
    ];
    
    expect(shallow(<CardList cats={mockCats}/>).debug()).toMatchSnapshot();
});