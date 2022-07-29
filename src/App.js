
import React from 'react';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from './layout/navbar/Navbar';

import StudentList from './components/studentList/StudentList';
import StudentDetailPage from './pages/StudentDetailPage';
import About from './pages/About';
import Contact from './pages/Contact';

import './App.scss';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="pageContainer">
            <Routes>
                <Route path="/students/:studentId" element={<StudentDetailPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<StudentList />} /> 
            </Routes>
          </div>
        </BrowserRouter>
      </div>
  );
}

export default App;