import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'


import StudentCard from '../components/studentCard/StudentCard';

function StudentDetailPage(){
  
  let params = useParams();
  const location = useLocation();
  // console.log("params:", params)
  // console.log("location:", location);

  // how to get the student data from location
  const [student, setStudent] = useState({});

  const studentId = params.studentId;

let singleStudentURL = `https://student-app-backend-cl.herokuapp.com/students/students/${studentId}` ;

  // if we have the data from clicking on the card. Or if we don't click on the link (typing in URL) we fetch the data
  useEffect(()=>{
    if (location.state?.student){
      setStudent(location.state?.student);
    } else {
      fetch(singleStudentURL)
        .then(response => response.json())
        .then(data => {
          setStudent(data);
        })
    }
  }, []);


  // with the student Id, we can fetch student info
  // from our API

  return (
    <div className="studentDetailPage">
      { Object.keys(student).length > 0 && <StudentCard student={student} /> }
        {/* Student Detail Page for {student.firstName}. */}
    </div>
  )
}

export default StudentDetailPage