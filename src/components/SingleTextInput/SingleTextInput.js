import React, { useEffect } from 'react';

import './SingleTextInput.scss';

// modified our SearchBar to add a placeholder prop to be passed in. Default value is "Search by name"
// same for width - adding a style object
function SingleTextInput ({searchTerm, setSearchTerm, collection=[], onSubmit, placeholder="Search by name", width="93%"}) {

    // const updateSearchTerm = (e) => {
    //     setSearchTerm(e.target.value);
    // }

    const styles = {
        "width" : width
    }

    // const finalizeInput = (e) => {
    //     // console.log('you hit enter');
    //     setSearchTerm(e.target.value)

    //     console.log(e);

    //     if (e === "Enter"){
    //         console.log("you pressed enter")
    //     }
    // }


    // => I have no idea how this got here. Copy & pasted off doc from internet?
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
            onChnage={(e) => setSearchTerm(e.target.value)}


            // onChange={(e) => finalizeInput(e)}

            // onChange={updateSearchTerm}
            // onSubmit={(inputText) => finalizeInput(inputText)}

            // onMouseDown={handleOnClick}

            // onMouseDown={(e) => handleFirstClick(e)}
            // onChange={(e) => setSearchTerm(e.target.value)}
        />
    );
}

export default SingleTextInput;