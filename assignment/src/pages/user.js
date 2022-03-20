import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa'

export default function User(props) {
    const location = useLocation();
    const {user,from} = location.state;
    console.log(user,from)
  return (
    <div className='user_container'>
        <h1 className='user_name'>
            <Link style={{'color' : 'black', marginRight: '5px'}} to = {`/${from}`}><FaArrowLeft /></Link>
            Details: {user.first_name + " " + user.last_name}
        </h1>
        <ul className='user_details'>
            {Object.keys(user).map(el =>
                 el!== 'id' && 
                 <li>
                   <span style={{'textTransform' : 'capitalize'}}>{el}</span>: 
                   &nbsp;<b>{user[el]}</b>
                 </li>
              )}
        </ul>
    </div>
  )
}
