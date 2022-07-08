import React from 'react';

import './SingleTextInput.scss';

// modified our SearchBar to add a placeholder prop to be passed in. Default value is "Search by name"
function SingleTextInput({searchTerm, setSearchTerm, placeholder="Search by name"}) {


    const updateSearchTerm = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <input 
            className="searchBar" 
            placeholder={placeholder}
            value={searchTerm} 
            onChange={updateSearchTerm}
        />
    );
}

export default SingleTextInput;