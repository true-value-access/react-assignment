import React from 'react';
import cx from 'classnames';


export default function Pagination({currPage, totalUsers, handleControl, pageLimit, perPage}) {

    const getPaginationGroup = () => {
        let start = Math.floor((currPage-1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };

    if(totalUsers < pageLimit) return null;

  return (
    <div className='pagination_container'>
        <div className='pagination_list'>
             <button 
                onClick={() => handleControl("prev")}
                className = {cx('btn',{disabled: currPage === 0})}
            > 
                {"<"}
             </button>
            {getPaginationGroup().map(el => <button className= {cx({active: currPage === el})}>{el}</button>)}
            <button 
                onClick={() => handleControl("next")}
            > 
                {">"} 
            </button>
        </div>
    </div>
  )
}
