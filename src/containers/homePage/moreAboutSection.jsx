import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../components/sectionTitile';
import { Element } from 'react-scroll'
import AboutImage from '../../tools/illustrations/moreAboutus.jpg'



const MoreAboutContainer = styled(Element)`
min-height:500px;
display:flex;
flex-direction:column;
align-items:center;
flex-wrap:wrap-reverse;
padding:0 1em;

@media screen and (max-width: 480px){
  text-align:left;
}

`;

const AboutText = styled.p`
font-size:21px;
color:#2f2f2f;
font-weight:normal;
line-height:1.4;
`;

const AboutContainer = styled.div`
display:flex;
max-width:900px;
align-items:center;
justify-content:center;


@media screen and (max-width: 480px){
  max-width:100%;
  flex-wrap:wrap-reverse;
}

`;

const AboutImg = styled.img`
width:500px;
height:400px;
border-radius:20px;


@media screen and (max-width: 480px){
    width:340px;
    height:240px;
    border-radius:20px;
}
`;

export function MoreAboutSection(props){
return<MoreAboutContainer>
    <SectionTitle>More About Tecspot</SectionTitle>
    <AboutContainer>
        <AboutText>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Modi voluptatem distinctio qui nam odit inventore laudantium est adipisci natus harum. {<br/>}{<br/>}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Impedit totam obcaecati alias rerum recusandae quia voluptatem veritatis illo ipsa corrupti.{<br/>}{<br/>}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Labore omnis dolores ex alias magnam harum adipisci nihil quisquam praesentium molestias!{<br/>}
        </AboutText>
        <AboutImg src={AboutImage}/>
    </AboutContainer>
    </MoreAboutContainer>
}