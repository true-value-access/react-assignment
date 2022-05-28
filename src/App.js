import "./styles/App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Users from "./components/Users";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import UserDetails from "./components/UserDetails";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json"
      )
      .then((response) => {
        if (response.status === 200) {
          setUsers(response.data);
          setTotalUsers(response.data.length);
        } else {
          return new Error("Error occured at server...");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <div className="container details-container">
        {console.log(users)}
        <Routes>
          <Route
            path="/"
            exact
            element={<Link to="/users">Users</Link>}
          ></Route>
          <Route
            path="/users"
            exact
            element={
              <Users
                allUsers={users}
                loading={loading}
                totalUsers={totalUsers}
              />
            }
          ></Route>
          <Route
            path="/users/:userId"
            element={<UserDetails users={users} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
