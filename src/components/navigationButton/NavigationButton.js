import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';

import './NavigationButton.scss';

function NavigationButton({buttonText}) {
    return (
        <div className="navigationButton">
            <Link to="/students/new">
                <Button
                    variant="contained" 
                    size="large" 
                >
                    {buttonText}
                </Button>
            </Link>
        </div>
    );
}

export default NavigationButton;