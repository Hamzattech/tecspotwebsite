import React from 'react'
import styled from 'styled-components'
import BackgroundImg from '../../tools/pictures/top-developers.jpg';
import Logo from '../../components/logo';
import { Marginer } from '../../components/marginer';
import theme from '../../themes';
import Btn from '../../components/button';
import { DownArrow } from '../../components/downArrow';
import { Navbar } from '../../components/navbar';
import { Element, scroller } from 'react-scroll'




const TopContainer = styled.div`
width: 100%;
height: 100vh;
padding:0;
background-image: url(${BackgroundImg});
background-repeat:no-repeat;
background-size:cover;

`;

const BackgroundFilter = styled.div`
width:100%;
height:100vh;
background-color:${theme.white};
opacity:0.8;
display:flex;
flex-direction:column;
align-items:center;
`;

const MotivationalText = styled.h1`
margin:0;
font-size:33px;
font-weight:500;
line-height:1.3;
color:${theme.primary};
text-align:center;
`;

const DownArrowContainer = styled.div` 

`;

export function TopSection(){

  const scrollToNextSection = () =>{
    scroller.scrollTo("whatwedo", {smooth: true, duration:"1000"})
  }

return (
<Element name="topSection">
<TopContainer>
 <BackgroundFilter>
     <Navbar></Navbar>
       <Marginer direction="vertical" margin="8rem"></Marginer>
       <Logo />
         <Marginer direction="vertical" margin="3rem"></Marginer>
         <MotivationalText>Web Development</MotivationalText>
         <MotivationalText>From the Best in the Industry</MotivationalText>
       <Marginer direction="vertical" margin="2.5rem"></Marginer>
    <Btn>Let's start your project</Btn>  
    <Marginer direction="vertical" margin="10rem" ></Marginer>
    <DownArrowContainer onClick={scrollToNextSection}>
        <DownArrow></DownArrow>
    </DownArrowContainer>
    <Marginer direction="vertical" margin="5rem" ></Marginer>

 </BackgroundFilter>
</TopContainer>
</Element>
)
}