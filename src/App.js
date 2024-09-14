import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AddNote from './components/AddNote';
import NoteState from './context/notes/NoteState';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <>
      <NoteState>
        <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signUp" element={<SignUp />} />
            <Route exact path="/addnote" element={<AddNote />} />
            
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
