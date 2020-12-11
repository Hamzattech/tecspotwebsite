import React from 'react'
import styled from 'styled-components'
import theme from '../../themes';



const WhatsappContainer = styled.button`
width:40px;
height:40px;
position:fixed;
bottom:100px;
left:30px;
z-index:99;
align-items:center;
cursor:pointer;
box-shadow:0px 0px 15px 0px #312f2f;
border-radius:50%;
color:${theme.primary};

@media screen and (max-width:480px){
    position:fixed;
    bottom:80px;
}
`;

const WhatsappIcon = styled.a`
width:100%;
height:100%;
`;



export function Whatsapp(props){
return <WhatsappContainer> <WhatsappIcon {...props}>{props.children}</WhatsappIcon> </WhatsappContainer>
}
