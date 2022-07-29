import React, {useEffect, useState} from 'react';
import { useLocation } from "react-router-dom";



import SingleTextInput from '../singleTextInput/SingleTextInput';
import StudentCard from '../studentCard/StudentCard';
import EmptyView from '../emptyView/EmptyView';

import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import './StudentList.scss';

const StudentList = (props) => {

    let location = useLocation();

    
    // hooks
    const [students, setStudents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [showSnackbar, setShowSnackbar] = useState(false);
    
    
    // functions

    useEffect(() => {

        setLoading(true);

        if(location?.state?.studentName){
            setShowSnackbar(true);
         }

        // const url = 'https://student-app-backend-june.herokuapp.com/students';
        const url = 'https://student-app-backend-cl.herokuapp.com/students';
        // reach out to the backend
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setStudents(data);
            setLoading(false);
        })
        // get our students
        // update our students hook with the new data

    }, []); // empty array means run on mount


    // when search term is updated, this component will rerender 
    // what to do on a re-render? 
    let filteredStudents = students;

    if(searchTerm){
        filteredStudents = students.filter(student => {
            const fullName = `${student.firstName} ${student.lastName}`;
            
            const fullNameToLowerCase = fullName.toLowerCase();

            const searchTermToLowerCase = searchTerm.toLowerCase();

            return fullNameToLowerCase.includes(searchTermToLowerCase);
        });
    }


    // return or JSX
    return (
        <div className="studentList">
            <Snackbar 
                open={showSnackbar} 
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                autoHideDuration={1500}
                onClose={() => setShowSnackbar(false)}>
                <Alert>{location?.state?.studentName} was successfully deleted.</Alert>
            </Snackbar>
          <SingleTextInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
           {filteredStudents.map((student) => {
            return (
                <StudentCard student={student} key={student.id} />
            )
           })}
           
           {loading && <EmptyView center text="Loading..." />}

           {!loading && filteredStudents.length === 0 && <EmptyView center />}
        </div>
    )


}

export default StudentList;