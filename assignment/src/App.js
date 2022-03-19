import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import User from './pages/user';
import UserList from './pages/userList';



function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/users" element = {<UserList />} />
          <Route exact path="/users/:userId" element = {<User />} />
      </Routes>
    </Router>
  );
}

export default App;
