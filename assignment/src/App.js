import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './styles/styles.scss';
import User from './pages/user';
import UserList from './pages/userList';



function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/users" element = {<UserList />} />
          <Route exact path="/user/:userId" element = {<User />} />
      </Routes>
    </Router>
  );
}

export default App;
