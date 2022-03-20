import React from 'react';
import styled from 'styled-components';
import {BiSearch as SearchIcon} from 'react-icons/bi'
const FormField = styled.div`
display:flex;
padding: 10px 0 20px 0;
input{
    height: 3rem;
    width: 24rem;
    border: 1px solid skyblue;
}
`
const Form =()=>{
    return(
        <FormField>
            <input placeholder='Search by first or last name' type='text' />
            <button type='submit'><SearchIcon size='1.8rem'/></button>
        </FormField>
    )
}
export default Form;