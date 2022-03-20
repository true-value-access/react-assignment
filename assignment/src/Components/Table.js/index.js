import React from 'react';
import { Link } from 'react-router-dom';


const Table = ({ users, handleUserData }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Website</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users[0].payload && users[0].payload.map((itm) => {
                    return (
                        <tr key={itm.id}>
                            <td>
                                <Link to={`/users/${itm.id}`} >
                                    <div onClick={()=>handleUserData(itm)}>
                                        {itm.first_name}
                                    </div>
                                </Link>
                            </td>
                            <td>{itm.last_name}</td>
                            <td>{itm.age}</td>
                            <td>
                                <a href={itm.web} target='_blank' >{itm.web}</a>
                            </td>
                            <td>{itm.email}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
export default Table;