import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './StudentUpdateForm.scss';

function StudentUpdateForm({student}) {

    // hooks
    const [firstname, setFirstname] = useState(student.firstname);
    const [lastname, setLastname] = useState(student.lastname);
    const [company, setCompany] = useState(student.company);
    const [city, setCity] = useState(student.firstnacityme);
    const [skill, setSkill] = useState(student.skill);
    const [pic, setPic] = useState(student.pic);
    const [anyChanges, setAnyChanges] = useState(false); // by default - no changes

    const handleChange = (e) => {
        setAnyChanges(true);

        const field = e.target.name;

        switch (field){
            case 'firstname':
                setFirstname(e.target.value);
                break;
            case 'lastname':
                setLastname(e.target.value);
                break;
            case 'company':
                setCompany(e.target.value);
                break;
            case 'city':
                setCity(e.target.value);
                break;
            case 'skill':
                setSkill(e.target.value);
                break;
            case 'pic':
                setPic(e.target.value);
                break;
        }
    }

    return (
        <div className="studentUpdateForm">
            <div className="studentUpdateForm__title">Update Student</div>
            <div className="studentUpdateForm__inputs">
                <TextField 
                    id="outlined-basic" 
                    label="First Name" 
                    variant="outlined" 
                    value={firstname}
                    name='firstname'
                    onChange={(e) => handleChange(e)}
                />
                <TextField 
                    id="outlined-basic" 
                    label="Last Name" 
                    variant="outlined"
                    value={lastname}
                    name='lastname'
                    onChange={(e) => handleChange(e)}
                />
                <TextField 
                    id="outlined-basic" 
                    label="Company" 
                    variant="outlined"
                    value={company}
                    name='company'
                    onChange={(e) => handleChange(e)}
                />
                <TextField 
                    id="outlined-basic" 
                    label="City" 
                    variant="outlined"
                    value={city}
                    name='city'
                    onChange={(e) => handleChange(e)}
                />
                <TextField 
                    id="outlined-basic" 
                    label="Skill" 
                    variant="outlined"
                    value={skill}
                    name='skill'
                    onChange={(e) => handleChange(e)}
                />
                <TextField 
                    id="outlined-basic" 
                    label="Pic Url" 
                    variant="outlined"
                    value={pic}
                    name='pic'
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div className="studentUpdateForm__submit">
                <Button variant="contained" size="large" disabled={!anyChanges} >Update</Button>
            </div>
        </div>
    );
}

export default StudentUpdateForm;