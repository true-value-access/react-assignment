import React, { useEffect, useState } from "react";
import "../styles/App.css";

function Paginate({ totalUsers, usersPerPage, setCurrentPage, currentPage }) {
  const [startListIndex, setStartListIndex] = useState(1);
  const [totalListElementPerPage] = useState(5);
  useEffect(() => {
    setStartListIndex(1);
    setCurrentPage(1);
  }, [totalUsers]);

  let indexList = [];
  let totalPages = Math.ceil(totalUsers / usersPerPage);
  let endListIndex = startListIndex + totalListElementPerPage;
  let totalIndexes = totalPages;

  for (let i = startListIndex; i < endListIndex && i <= totalIndexes; i++) {
    indexList.push(i);
  }

  return (
    <div>
      <nav>
        <ul className="pagination justify-content-end">
          <li className="page-item page-number-margin">
            <button
              className={currentPage == 1 ? "page-link disabled" : "page-link"}
              onClick={() => {
                if (currentPage != 1) {
                  setCurrentPage((prev) => prev - 1);
                  if (startListIndex != 1) {
                    setStartListIndex((prev) => prev - 1);
                  }
                }
              }}
            >
              {"<"}
            </button>
          </li>
          {indexList.map((index) => {
            return (
              <li key={index} className="page-item page-number-margin">
                <button
                  className={
                    currentPage == index ? "page-link active-page" : "page-link"
                  }
                  onClick={() => {
                    setCurrentPage(index);
                  }}
                >
                  {index}
                </button>
              </li>
            );
          })}
          <li className="page-item">
            <button
              className={
                currentPage == totalPages ? "page-link disabled" : "page-link"
              }
              onClick={() => {
                if (currentPage != totalPages) {
                  setCurrentPage((prev) => prev + 1);
                  if (endListIndex <= totalIndexes) {
                    setStartListIndex((prev) => prev + 1);
                  }
                }
              }}
            >
              {">"}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Paginate;
