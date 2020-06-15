import React from 'react';

const SearchBox = ({ searchChange }) => {
    return(
        <div className='pa2'>
            <label>
                <input 
                    area-label='Search Cats'
                    className='pa3 ba b--green bg-lightest-blue' 
                    type='search' 
                    placeholder='Search cats'
                    onChange={searchChange}
                />
            </label>
        </div>
    );
};

export default SearchBox;