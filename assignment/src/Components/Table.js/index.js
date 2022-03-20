import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TableData = styled.table`
border:1px solid black;
thead{    
    font-weight: 700;
    background: lightgrey;
    tr{
        th{
            padding:1rem;
            text-align:left;
        }
    }
}
tbody{
    tr{
        td{
            padding:1rem;
            border-bottom: 1px solid lightgrey;
        }
    }
    .username{
        text-decoration:none;
        color:black;
    }
}
`

const Table = ({ users, handleUserData }) => {
    return (
        <TableData >
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
                {users[0].payload && users[0].payload.map((itm) => {
                    return (
                        <tr key={itm.id}>
                            <td>
                                <Link to={`/users/${itm.id}`} className='username' >
                                    <div onClick={()=>handleUserData(itm)}>
                                        {itm.first_name}
                                    </div>
                                </Link>
                            </td>
                            <td>{itm.last_name}</td>
                            <td>{itm.age}</td>
                            <td>{itm.email}</td>
                            <td>
                                <a href={itm.web} target='_blank' >{itm.web}</a>
                            </td>
                            
                        </tr>
                    )
                })}
            </tbody>
        </TableData >
    )
}
export default Table;