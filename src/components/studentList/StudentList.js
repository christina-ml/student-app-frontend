import React, { useEffect, useState } from 'react';
import StudentCard from '../studentCard/StudentCard';

import './StudentList.scss';

const StudentList = () => {
    // hooks
    const [students, setStudents] = useState([]);

    // functions

    
    // const url = 'https://student-app-backend-cl.herokuapp.com/students';
    const url = 'https://student-app-backend-june.herokuapp.com/students';
    useEffect(() => {
        // reach out to the backend
        // get our students
        // update our students hook with the new data
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setStudents(data.students);
            })
    }, []); // empty array means run on mount

    // return or JSX
    return (
        <div className="studentList">
            {students.map((student) => {
                return (
                    <div>
                        <StudentCard student={student} />
                    </div>
                )
            })}
        </div>
    )
}

export default StudentList;