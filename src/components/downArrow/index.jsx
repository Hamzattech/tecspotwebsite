import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import theme from '../../themes'

const ArrowContainer = styled.div`
width:46px;
height: 46px;
border-radius:50px;
background-color:${theme.primary};
display:flex;
justify-content:center;
align-items:center;
transition: all 250ms ease-in-out;



&:hover{
cursor:pointer;
background-color:transparent;
border:1px solid ${theme.primary};
}

`;

const ArrowIcon = styled.div`
margin-top:3px;
color:${theme.white};
font-size:28px;

&:hover{
    color:${theme.primary};

}

`;

export function DownArrow(){
return <ArrowContainer>
    <ArrowIcon>
        <FontAwesomeIcon icon={faAngleDown}/>
    </ArrowIcon>
</ArrowContainer>
}