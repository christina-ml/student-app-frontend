import React, { useEffect, useState } from 'react';
import StudentCard from '../studentCard/StudentCard';

import './StudentList.scss';

const StudentList = () => {
    // hooks
    const [students, setStudents] = useState([]);
    const [studentList, setStudentList] = useState([]);

    // functions
    
    useEffect(() => {
        // const url = 'https://student-app-backend-june.herokuapp.com/students'; // => Jordan's backend url
        const url = 'https://student-app-backend-cl.herokuapp.com/students';

        // reach out to the backend
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setStudents(data.students);
        })
        // get our students
        // update our students hook with the new data
        
    }, []); // empty array means run on mount

    // return or JSX
    return (
        <div className="studentList">
            <input className="studentList__search" placeholder="Search by name"/>
            {students.map((student) => {
                return (
                    <StudentCard student={student} />
                )
            })}
        </div>
    )
}

export default StudentList;