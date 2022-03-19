import React from 'react';
import { Link } from 'react-router-dom';


const TableRow = ({user}) => {
    
    return (
        <tr>
            <td><Link to = '/u' state = {{'user' : user}}>{user.first_name}</Link></td>
            <td>{user.last_name}</td>
            <td>{user.age}</td>
            <td>{user.email}</td>
            <td>{user.web}</td>
        </tr>
    )
}

export default function UserTable({data,loading}) {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Website</th>
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
