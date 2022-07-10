import React, { useEffect } from 'react';

import './SingleTextInput.scss';

// modified our SearchBar to add a placeholder prop to be passed in. Default value is "Search by name"
// same for width - adding a style object
function SingleTextInput ({searchTerm, setSearchTerm, collection=[], onSubmit, placeholder="Search by name", width="93%"}) {

    const styles = {
        "width" : width
    }

    useEffect(() => {
        const keyDownHandler = event => {
            console.log('User pressed: ', event.key);

            if (event.key === 'Enter') {
                event.preventDefault();

                // call submit function here
                handleSubmit();
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        }
    }, []);

    const handleSubmit = () => {
        onSubmit([...collection, searchTerm])
    }

    return (
        <input 
            style={styles}
            className="searchBar" 
            placeholder={placeholder}
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    );
}

export default SingleTextInput;