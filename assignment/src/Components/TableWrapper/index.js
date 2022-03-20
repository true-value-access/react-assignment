import Input from "../Input"
import Table from "../Table.js"
import useFetchUsers from '../../fetchUrl/index'

const Users = ({handleUserData}) => {
    const users = useFetchUsers()
    return (
        <div className="App">
            <h1>Users</h1>
            <Input />
            <Table users={users} handleUserData={handleUserData}/>
        </div>
    )
}
export default Users