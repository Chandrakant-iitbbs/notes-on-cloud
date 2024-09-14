import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AddNote from './components/AddNote';
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Routes>
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
