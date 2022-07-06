import StudentList from './components/studentList/StudentList';
import './App.scss';

import { Routes, Route } from "react-router-dom";
import StudentDetailPage from './pages/StudentDetailPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/students/:studentId" element={<StudentDetailPage />} />
        <Route path="/" element={<StudentList />} />
      </Routes>
    </div>
  );
}

export default App;