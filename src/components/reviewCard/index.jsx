import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styled from 'styled-components'
import { Marginer } from '../marginer';

const CardContainer = styled.div`
width:300px;
height:450px;
background-color:#fff;
box-shadow:0px 0px 7px  rgba(17, 17, 17, 0.2);
border-radius:3px;
margin:5px 1.5em;
position: relative;
padding:10px 1.2em;
`;

const QuoteIcon = styled.div`
position:absolute;
top:10px;
left:25px;
color:#D1D1D1;
font-size:35px;
`;

const ReviewText = styled.p`
font-size:1rem;
display:flex;
justify-content:center;
`;

const Line = styled.span`
min-width:100%;
min-height:1px;
margin-bottom:6px;
background-color:#cdcdcd;
display:flex;
`;

const UserDetailsContainer = styled.div`
display:flex;
align-items:center;
`
;

const UserName = styled.span`
font-size:15px;
color:#000;
`;

const UserImg = styled.img`
width:45px;
height:45px;
border-radius:50%;
margin-right:12px;

`;

export function ReviewCard(props){
    const {reviewText , username, userimgurl } = props;
return<CardContainer>
    <QuoteIcon>
        <FontAwesomeIcon icon={faQuoteLeft}/>
    </QuoteIcon>
    <Marginer direction="vertical" margin="4em"/>
        <ReviewText>{reviewText}</ReviewText>
        <Marginer direction="vertical" margin="5em"/>
        <Line />
        <UserDetailsContainer>
            <UserImg src={userimgurl}></UserImg>
            <UserName>{username}</UserName>
        </UserDetailsContainer>
</CardContainer>
};