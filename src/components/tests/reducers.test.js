import * as reducers from '../../reducers'
import * as types from '../../constants'

const initialStateSearch = {
    searchField: ''
};

describe('searchCats reducer', () => {
    it('should return the initial state', () => {
        expect(reducers.searchCats(undefined, {})).toEqual(
            {
                searchField: ""
            }
        );
    });

    it('should handle CHANGE_SEARCH_FIELD', () => {
        expect(reducers.searchCats(
                initialStateSearch, {
                    type: types.CHANGE_SEARCH_FIELD,
                    payload: 'abc'
                }
        )).toEqual({ 
            searchField: "abc" 
        });
    });
});

const initialStateCats = {
    cats: [],
    isPending: true
};

describe('requestCats reducer', () => {
    it('should return the initial state', () => {
        expect(reducers.requestCats(undefined, {})).toEqual(initialStateCats);
    });

    it('should handle REQUEST_CATS_PENDING action', () => {
        expect(reducers.requestCats(initialStateCats, {
            type: types.REQUEST_CATS_PENDING,
            payload: {isPending: true}
        })).toEqual({
            cats: [],
            isPending: true
        });
    });
    
    it('should handle REQUEST_CATS_SUCCESS action', () => {
    expect(
        reducers.requestCats(initialStateCats, {
            type: types.REQUEST_CATS_SUCCESS,
            payload: [
                {
                    id: '123',
                    name: 'test',
                    email: 'j@jmail.com'
                }
            ]
        })).toEqual({
            cats: [{
                id: '123',
                name: 'test',
                email: 'j@jmail.com'
            }],
            isPending: false
        });
    });
    
    it('should handle REQUEST_CATS_FAILED action', () => {
        expect(reducers.requestCats(initialStateCats, {
            type: types.REQUEST_CATS_FAILED,
            payload: 'NOOO'
        })).toEqual({
            error: 'NOOO',
            cats: [],
            isPending: true
        });
    });
});