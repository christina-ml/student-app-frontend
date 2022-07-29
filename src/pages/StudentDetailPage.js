

import React, {useEffect, useState} from 'react';
import {useParams, useLocation} from "react-router-dom";

import StudentCard from '../components/studentCard/StudentCard';
import StudentUpdateForm from '../components/studentUpdateForm/StudentUpdateForm';

function StudentDetailPage(props) {

    let params = useParams();
    const location = useLocation();
    const [student, setStudent] = useState({});


    useEffect(() => {
        // if(location.state?.student){
        //     setStudent(location.state?.student)
        //     // location.state.student = null;
        // } else {
            
            // const singleStudentURL =`https://student-app-backend-june.herokuapp.com/students/${studentId}`; <= Jordan's backend url
            const singleStudentURL =`https://student-app-backend-cl.herokuapp.com/students/${studentId}`;

              fetch(singleStudentURL)
                .then(response => response.json())
                .then(data => {
                    setStudent(data);
                })
        // }

    }, []);
    
    const studentId = params.studentId;

    return (
        <div className="studentDetailPage">
           {Object.keys(student).length > 0 && <StudentCard student={student} showDelete />}
           {Object.keys(student).length > 0 && <StudentUpdateForm student={student} setStudent={setStudent} /> }
        </div>
    );
}

export default StudentDetailPage;