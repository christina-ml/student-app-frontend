import React from 'react';

import './SingleTextInput.scss';

// modified our SearchBar to add a placeholder prop to be passed in. Default value is "Search by name"
// same for width - adding a style object
function SingleTextInput({searchTerm, setSearchTerm, placeholder="Search by name", width="93%"}) {


    const updateSearchTerm = (e) => {
        setSearchTerm(e.target.value);
    }

    const styles = {
        "width" : width
    }

    const handleFirstClick = (e) => {
        console.log('on first click');
        // e.preventDefault();
        // e.stopPropagation();
    }

    return (
        <input 
            style={styles}
            className="searchBar" 
            placeholder={placeholder}
            value={searchTerm} 
            onChange={updateSearchTerm}
            onMouseDown={(e) => handleFirstClick(e)}
        />
    );
}

export default SingleTextInput;