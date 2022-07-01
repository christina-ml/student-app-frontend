import React, { useState } from "react";
import './StudentCard.scss';

import { FaPlus, FaMinus } from 'react-icons/fa';

const StudentCard = ({student}) => {

    const {pic, firstName, lastName, email, company, skill, grades} = student;

    //  hooks
    let [showGrades, setShowGrades] = useState(false);


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

    return (
        <div className="studentCard">
            
            <div className="studentCard__profilePic">
                <img src={pic} />
            </div>
            <div className="studentCard__info">
                <div className="studentCard__name">
                    {`${firstName} ${lastName}`}
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
                <div className="studentCard__gradesList">
                    {grades.map((grade, index) => {
                            return (
                            <div>
                                <span>Test {index + 1}:</span>
                                <span>{grade[index]}%</span></div>
                            )
                        })
                    }
                </div>
                <div className="studentCard__toggleIcons">
                    {!showGrades && <FaPlus className="studentCard__toggleIcon" onClick={() => setShowGrades(true)} size="1.8em" />}
                    {showGrades && <FaMinus className="studentCard__toggleIcon" onClick={() => setShowGrades(true)} size="1.8em" />}
                </div>
            </div>
        </div>
    )
}

export default StudentCard;