import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import SingleUser from './Components/singleUserpage';
import Users from './Components/TableWrapper';



function App() {
  const [userData,setUserData] = React.useState([]);
  const handleUserData =(data)=>{
    setUserData(data)
  }
  
  return (
    <Router>
      <Routes>
        <Route path='/users/:id' element={<SingleUser data={userData} />} />
        <Route path='/users'element={<Users handleUserData={handleUserData} />} /> 
        <Route exact path ='/' element={<Navigate to ='/users' />} />
      </Routes>
    </Router>
  );
}

export default App;
