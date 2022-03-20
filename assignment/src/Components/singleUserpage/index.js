import Title from "./Title"
import styled from 'styled-components'
import { Navigate } from "react-router-dom"
import {AiOutlineArrowLeft as BackIcon } from 'react-icons/ai';
import { useNavigate } from "react-router";

const UserData = styled.div`
width:90%;
padding-top: 5rem;
margin:auto;
.userHeader{
    display: flex;
    align-items:center;
    h1{
        padding-left:6rem;
    }
}
.userDetail{
    width:80%;
    margin:auto;
    padding: 2rem 0;
}
`

const SingleUser = ({ data }) => {
    const navigate = useNavigate()
    const handleNavigate =()=>{
        navigate('/')
    }
    return (
        <>
            {
                data ?
                    <UserData>
                        <div className='userHeader'>
                            <div onClick={handleNavigate} ><BackIcon size='2.5rem' /></div>
                            <h1>
                                Details: {`${data.first_name} ${data.last_name}`}
                            </h1>
                        </div>
                        <div className='userDetail'>
                            <Title titleName='First Name' titleValue={data.first_name} />
                            <Title titleName='Last Name' titleValue={data.last_name} />
                            <Title titleName='Company Name' titleValue={data.first_name} />
                            <Title titleName='City' titleValue={data.city} />
                            <Title titleName='State' titleValue={data.state} />
                            <Title titleName='Zip' titleValue={data.zip} />
                            <Title titleName='Email' titleValue={data.email} />
                            <Title titleName='Web' titleValue={data.web} />
                            <Title titleName='Age' titleValue={data.age} />
                        </div>
                    </UserData>:
                    <Navigate to= '/users' />
            }
        </>
    )
}
export default SingleUser;