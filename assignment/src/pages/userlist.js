import { useEffect, useState, useMemo } from 'react'
import Search from '../components/searchBar';
import UserTable from '../components/userTable';
import Pagination from '../components/pagination';

let PageSize = 10;

export default function UserList() {
    const[originalData, setOriginalData] = useState([]); // unchanged fetch data 
    const [users,setUsers] = useState([]); // all users
    const [loading,setLoading] = useState(false); // waiting for fetch
    const [query, setQuery] = useState(''); // search input
    const [msg, setMsg] = useState(null); // any error or msg
    const [currPage, setCurrPage] = useState(-1);


    useEffect(() => {
        setLoading(true);
        fetch(`https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json`)
        .then(res => res.json())
        .then(data =>{
            setUsers(data);
            setOriginalData(data);
            setCurrPage(1);
            setLoading(false);        
        })
        .catch(e => {
            // do something
        })
    },[])

    const currentTableData = useMemo(() => {
        console.log('MEMO');
      const firstPageIndex = (currPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return users.slice(firstPageIndex, lastPageIndex);
    }, [currPage,query])

    const handleSearch = (searchInput) => {
        setQuery(searchInput);
        console.log(searchInput)
        const queryResult = originalData.filter(el => 
            el.first_name.toLowerCase().includes(query.toLowerCase().trim()) ||
            el.last_name.toLowerCase().includes(query.toLowerCase())
        );
        setUsers(queryResult);
    }

    const handleControl = (type) => {
        if(type === 'next')
            setCurrPage((curr) => curr+1);
        else if(type === 'prev') {
            if(currPage === 1) return;
            setCurrPage((curr) => curr-1)
        }
    }

    

   

  return (
    <div>
       {loading ? <p>loading...</p> : 
        <div>
            <h1>Users</h1>
            <Search handleSearch={handleSearch}  />
            <UserTable data = {currentTableData} />
            <Pagination 
                currPage = {currPage}
                handleControl = {handleControl} 
                totalUsers = {users.length} 
                perPage = {10} 
                pageLimit = {5} 
            />
        </div>
       }
    </div>
  )
}
