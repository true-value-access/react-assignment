import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/App.css";
import { Link } from "react-router-dom";

function UserDetails({ users }) {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    let user = users.find((user) => user.id == userId);
    setUser(user);
    console.log(user);
  }, [userId, users]);
  return (
    <>
      {user && (
        <div className="container">
          <div className="row">
            <div className="col-1">
              <h2 className="heading back">
                <Link to="/" className="back-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="black"
                    class="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                </Link>
              </h2>
            </div>
            <div className="col-11">
              <div>
                <h2 className="heading">
                  Details:{user.first_name + " " + user.last_name}
                </h2>
                <p className="detail-row">
                  First Name : <b>{user.first_name}</b>
                </p>
                <p className="detail-row">
                  Last Name : <b>{user.last_name}</b>
                </p>
                <p className="detail-row">
                  Company Name : <b>{user.company_name}</b>
                </p>
                <p className="detail-row">
                  City : <b>{user.city}</b>
                </p>
                <p className="detail-row">
                  State : <b>{user.state}</b>
                </p>
                <p className="detail-row">
                  Zip : <b>{user.zip}</b>
                </p>
                <p className="detail-row">
                  Email : <b>{user.email}</b>
                </p>
                <p className="detail-row">
                  Web : <b>{user.web}</b>
                </p>
                <p className="detail-row">
                  Age : <b>{user.age}</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UserDetails;
