import React from 'react';
import { Link } from 'react-router-dom';
import {FaSortDown, FaSortUp} from 'react-icons/fa';


const TableRow = ({user}) => {
    
    return (
        <tr>
            <td>
                <Link 
                    to = {`/user/${user.id}`} 
                    style={{'textDecoration' : 'none', color: 'black'}} 
                    state = {{'user' : user, 'from' : "users"}}
                >
                    {user.first_name}
                </Link>
                </td>
            <td>{user.last_name}</td>
            <td>{user.age}</td>
            <td>{user.email}</td>
            <td><a href={user.web}>{user.web}</a></td>
        </tr>
    )
}

const TableHead = ({name,sort,sortData}) => {
    return (
        <th>
            <div className='thead'>
                <span>{name}</span>
                <div className= 'icons'>
                    <span className='icon icon_up'>
                    <FaSortUp 
                        onClick={() => sortData('incease',{sort})}
                        // className='icon icon_up' 
                    />
                    </span>
                    <span className='icon icon_down'>
                    <FaSortDown 
                        onClick={() => sortData('decrease', {sort})}
                        // className='icon icon_down' 
                    />
                    </span>
                </div>
            </div>
        </th>
    )
}

export default function UserTable({data,loading,sortData}) {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <TableHead name = "First Name" sort = "first_name" sortData = {sortData} />
                    <TableHead name = "Last Name" sort = "last_name" sortData = {sortData} />
                    <TableHead name = "Age" sort = "age" sortData = {sortData} />
                    <TableHead name = "Email" sort = "email" sortData = {sortData} />
                    <TableHead name = "Website" sort = "web" sortData = {sortData} />
                </tr>
            </thead>
            <tbody>
            {
                data.map(el => 
                    <TableRow user = {el}/>
                )
            }
            </tbody>
        </table>
    </div>
  )
}
