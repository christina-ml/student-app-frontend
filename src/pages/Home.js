import React from 'react';
import StudentList from '../components/studentList/StudentList';
import NavigationButton from '../components/navigationButton/NavigationButton'; 

function Home() {

    return (
        <div className="home">
            <NavigationButton buttonText={'Add New Student'} />
            <StudentList />
        </div>
    );
}

export default Home;