import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
background-color: white;
padding: 1%;
border-radius: 10px;
border: 2px solid #014687;
width: 80%
font-size: calc(10px + 2vmin);
margin: 2%
`

const typeCard = (props) => {
  return(
    <StyledCard>
      <h2>{props.type}</h2>
    </StyledCard>
  )
}

export default typeCard;