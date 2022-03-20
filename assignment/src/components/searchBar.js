import React from 'react'

export default function Search({handleSearch}) {
  return (
    <div className='input_container'>
        <input 
            className='input'
            type = "text"
            placeholder = "Search by First or Last Name"
            onChange={(e) => handleSearch(e.target.value)}
        />

    </div>
  )
}
