import React from 'react'
import { useParams } from 'react-router-dom'

function StudentDetailPage(){
  
  let params = useParams();
  console.log("params:", params)
  
    const studentId = params.studentId;

  return (
    <div>
        Student Detail Page for {studentId}.
    </div>
  )
}

export default StudentDetailPage