import React from 'react'
import styled from 'styled-components'
import theme from '../../../themes';


const ServicesContainer = styled.div`
display:flex;
align-items:center;
flex-direction:${({isReverse }) => isReverse && "row-reverse" };
margin-bottom:4em;
flex-wrap:wrap-reverse;

@media screen and (max-width:480px){
    justify-content:center;

}

`;

const ServiceImg = styled.img`
width:22em;
height:17em;
border-top-right-radius:30%;
border-bottom-left-radius:30%;

@media screen and (max-width:480px){
    width:18em;
    height:13em;
}

`;

const DescsriptionContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
max-width:60%;

@media screen and (max-width:480px){
   max-width:100%; 
}
`;

const Title = styled.h2`
font-size:28px;
font-weight:700;
margin:5px 0; 
color:${theme.primary};

@media screen and (max-width:480px){
   margin-top:1.5em; 
}


`;

const Details = styled.p`
font-size:21px;
text-align:center;
max-width:55%;

@media screen and (max-width:480px){
    width:100%;
}

`;


export function WhyTecspot(props){
    const { imgUrl, title, description,isReverse } = props;
return<ServicesContainer isReverse={isReverse}>
    <DescsriptionContainer>
        <Title>{ title }</Title>
        <Details>{description}</Details>
    </DescsriptionContainer>
    <ServiceImg src={imgUrl}/>
</ServicesContainer>
}