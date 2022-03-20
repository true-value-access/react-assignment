import styled from "styled-components";
const TitleStyle = styled.div`
padding: 1.5rem;
border-bottom: 1px solid grey;
.titlevalue{
    font-weight:700
}
`
const Title = ({ titleName, titleValue }) => {
    return (
        <TitleStyle>
            <span>{titleName}:</span> <span className='titlevalue'>{titleValue}</span>
        </TitleStyle>
    )
}
export default Title;