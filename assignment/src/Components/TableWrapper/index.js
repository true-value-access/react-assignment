import React from 'react';
import Table from "../Table.js"
import useFetchUsers from '../../fetchUrl/index'
import styled from 'styled-components';
import Form from "../Input";

const UsersPage = styled.div`
width:90%;
margin:auto;
`
const Users = ({handleUserData}) => {
    const users = useFetchUsers();

    const [searchInput,setSearchInput] = React.useState('');
    const [filterData,setFilterData] = React.useState([]);

    React.useEffect(()=>{
        if(searchInput.length === 0){
            setFilterData(users[0].payload)
        } 
    },[searchInput])

    const handleInputChange = (event)=> setSearchInput(event.target.value);
    const handleSearchSubmit = (event) =>{
        event.preventDefault();
        let userlist = users[0].payload;
        let filterArray = userlist.filter((itm)=> itm.first_name.toLowerCase() === searchInput.toLowerCase() || itm.last_name.toLowerCase() === searchInput.toLowerCase())
        setFilterData(filterArray);
    }
    
    return (
        <UsersPage>
            <h1>Users</h1>
            <Form 
                handleInputChange={handleInputChange}
                searchInput={searchInput}
                handleSearchSubmit={handleSearchSubmit}
            />
            {users[0].isError && <div>Please check your Internet Connection</div>}
            {users[0].isLoading ? 
            <div>Loading ...</div>:
            <Table data={filterData.length ? filterData : users[0].payload} handleUserData={handleUserData}/>
            }
            
        </UsersPage>
    )  
}
export default Users;