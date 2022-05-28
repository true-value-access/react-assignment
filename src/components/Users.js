import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Paginate from "./Paginate";
import "../styles/App.css";

function Users({ loading, allUsers, totalUsers }) {
  const [filteredData, setFilteredData] = useState(allUsers);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    setFilteredData(allUsers);
  }, [allUsers]);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const paginatedUsers = filteredData.slice(indexOfFirstUser, indexOfLastUser);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    if (value === "") {
      setFilteredData(allUsers);
    } else {
      let result = [];
      result = allUsers.filter((data) => {
        return (
          data.first_name.toLowerCase().search(value) != -1 ||
          data.last_name.toLowerCase().search(value) != -1
        );
      });
      setFilteredData(result);
    }
  };

  const sortForStrings = (attribute) => {
    let sort = "";
    if (sortType === "") {
      sort = "asce";
      setSortType("asce");
    } else if (sortType === "asce") {
      setSortType("desc");
      sort = "desc";
    } else {
      setSortType("asce");
      sort = "asce";
    }
    let unsorted = [...filteredData];
    const sortedData = unsorted.sort((a, b) => {
      let fa = a[attribute].toLowerCase(),
        fb = b[attribute].toLowerCase();
      if (sort === "asce") {
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
      } else {
        if (fa < fb) {
          return 1;
        }
        if (fa > fb) {
          return -1;
        }
      }

      return 0;
    });
    setFilteredData(sortedData);
  };
  const sortForNumber = (attribute) => {
    let sort = "";
    if (sortType === "") {
      sort = "asce";
      setSortType("asce");
    } else if (sortType === "asce") {
      setSortType("desc");
      sort = "desc";
    } else {
      setSortType("asce");
      sort = "asce";
    }
    let unsorted = [...filteredData];
    const sortedData = unsorted.sort((a, b) => {
      if (sort == "asce") {
        return a[attribute] - b[attribute];
      } else {
        return b[attribute] - a[attribute];
      }
    });
    setFilteredData(sortedData);
  };
  return (
    <>
      <div>
        <h2>Users</h2>
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            onChange={(event) => handleSearch(event)}
            placeholder="Search by First or Last Name"
          />
          <button className="search-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="grey"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
        {!loading ? (
          <div>
            <table className="table table-bordered table-responsive table-hover">
              <thead className="table-header">
                <tr>
                  <th>
                    First Name
                    <i
                      onClick={() => {
                        sortForStrings("first_name");
                      }}
                      className="fa fa-fw fa-sort"
                    ></i>
                  </th>
                  <th>
                    Last Name
                    <i
                      onClick={() => {
                        sortForStrings("last_name");
                      }}
                      className="fa fa-fw fa-sort"
                    ></i>
                  </th>
                  <th>
                    Age
                    <i
                      onClick={() => {
                        sortForNumber("age");
                      }}
                      className="fa fa-fw fa-sort"
                    ></i>
                  </th>
                  <th>
                    Email
                    <i
                      onClick={() => {
                        sortForStrings("email");
                      }}
                      className="fa fa-fw fa-sort"
                    ></i>
                  </th>
                  <th>
                    Website
                    <i
                      onClick={() => {
                        sortForStrings("web");
                      }}
                      className="fa fa-fw fa-sort"
                    ></i>
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedUsers.length > 0
                  ? paginatedUsers?.map((user) => {
                      return (
                        <tr key={user.id}>
                          <td className="user-first-name">
                            <Link to={`/users/${user.id}`}>
                              {user.first_name}
                            </Link>
                          </td>
                          <td>{user.last_name}</td>
                          <td>{user.age}</td>
                          <td>{user.email}</td>
                          <td>
                            <a href={user.web} target="_blank" rel="noreferrer">
                              {user.web}
                            </a>
                          </td>
                        </tr>
                      );
                    })
                  : "No matching results..."}
              </tbody>
            </table>

            <Paginate
              totalUsers={filteredData.length}
              usersPerPage={usersPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </>
  );
}

export default Users;
