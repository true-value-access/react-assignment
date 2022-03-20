
import Table from "../Table.js"
import useFetchUsers from '../../fetchUrl/index'
import styled from 'styled-components';
import Form from "../Input";

const UsersPage = styled.div`
width:90%;
margin:auto;
`
const Users = ({handleUserData}) => {
    const users = useFetchUsers()
    return (
        <UsersPage>
            <h1>Users</h1>
            <Form />
            {users[0].isError && <div>Please check your Internet Connection</div>}
            {users[0].isLoading ? 
            <div>Loading ...</div>:
            <Table users={users} handleUserData={handleUserData}/>
            }
            
        </UsersPage>
    )  
}
export default Users