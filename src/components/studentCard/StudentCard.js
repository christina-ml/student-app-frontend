import React, {useState} from 'react';
import { Link } from "react-router-dom";

import SingleTextInput from '../SingleTextInput/SingleTextInput';

import { FaPlus, FaMinus } from 'react-icons/fa';

import './StudentCard.scss';

const StudentCard = ({student}) => {

    // props deconstructed
    const {pic, firstName, lastName, email, company, skill, grades} = student;

    // hooks
    const [showGrades, setShowGrades] = useState(false);

    // functions 
    const calculateAverage = (grades) => {

        let sum = 0;

        grades.map(grade => {
            sum += Number(grade);
        });

        return sum / grades.length;

        // ---- OR you can do this: -----
        // const sum = grades.reduce((sum, val) => sum + Number(val), 0);
        // return sum / grades.length;
    }

    const toggleGrades = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setShowGrades(!showGrades);
    }

    // passing in our student data in the Link to /students/:studentId
    return (
        <div className="studentCard">
            <Link to={`/students/${student.id}`} state={{ student: student }}>
            <div className="studentCard__profilePic">
                <img src={pic} />
            </div>
            
            <div className="studentCard__info">
                <div className="studentCard__name">
                    {`${firstName}  ${lastName}`}
                </div>
                <div className="studentCard__infoLine">
                    Email: {email}
                </div>
                <div className="studentCard__infoLine">
                    Company: {company}
                </div>
                <div className="studentCard__infoLine">
                    Skill: {skill}
                </div>
                <div className="studentCard__infoLine">
                    Average: {calculateAverage(grades)}%
                </div>
                <div className="studentCard__gradesList" style={{"display": showGrades ? "block" : "none"}}>
                    {grades.map((grade, index) => {
                        return (
                            <div key={index}><span>Test {index+1}:</span><span>{grade}%</span></div>
                        )
                    })}
                </div>

           
            </div>
            
            <div className="studentCard__toggleIcons">

                {!showGrades && <FaPlus className="studentCard__toggleIcon" onClick={(e) => toggleGrades(e)} size="1.8em"/>}
                {showGrades && <FaMinus className="studentCard__toggleIcon" onClick={(e) => toggleGrades(e)} size="1.8em" />}
            </div>
            
            </Link>

            <div className="studentCard__tagCollection">
                    <div className="studentCard__tags">
                        <span className="studentCard__tag">new tag</span>
                        <span className="studentCard__tag">a tag with longer name</span>
                        <span className="studentCard__tag">new tag</span>
                        <span className="studentCard__tag">a tag with longer name</span>
                    </div>
                    <div className="studentCard__tagInput">
                        <SingleTextInput width="26%" placeholder="Add a tag" />
                    </div>
                </div>

        </div>
    )
}

export default StudentCard;