import React from 'react'

export default function Search({handleSearch}) {
  return (
    <div>
        <input 
            className='input'
            type = "text"
            placeholder = "Search by First or Last Name"
            onChange={(e) => handleSearch(e.target.value)}
        />

    </div>
  )
}
