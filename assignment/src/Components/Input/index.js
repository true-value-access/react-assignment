import React from 'react';
import styled from 'styled-components';
import {BiSearch as SearchIcon} from 'react-icons/bi'
const FormField = styled.form`
display:flex;
padding: 10px 0 20px 0;
input{
    height: 3rem;
    width: 24rem;
    border: 1px solid skyblue;
    padding-left:1rem;
    font-size:1.5rem;
}
`
const Form =({handleInputChange, searchInput, handleSearchSubmit})=>{
    return(
        <FormField onSubmit={(e)=>handleSearchSubmit(e)}>
            <input 
                placeholder=' Search by first or last name' 
                type='text' 
                onChange={(event)=>handleInputChange(event)}
                value = {searchInput}
            />
            <button type='submit' onClick={handleSearchSubmit}><SearchIcon size='1.8rem'/></button>
        </FormField>
    )
}
export default Form;