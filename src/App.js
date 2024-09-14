import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signUp" element={<SignUp />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
