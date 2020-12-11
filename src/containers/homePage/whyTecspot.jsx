import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../components/sectionTitile';
import {Element} from 'react-scroll'
import { Marginer } from '../../components/marginer';
import { OurServices } from './whyTecspot';
import Service1Img from '../../tools/illustrations/quality.jpg'
import Service2Img from '../../tools/illustrations/mobilePO.jpg'
import Service3Img from '../../tools/illustrations/Qualitty.jpg'
import {WhyTecspot} from './ourServices'


const WhyTecspotContainer = styled(Element)`
width:100%;
min-height:1400px;
display:flex;
flex-direction:column;
align-items:center;
padding:10px 0;
margin-top:-100px;
`;

export function WhyTecspotSection(props){
return <WhyTecspotContainer>
         <SectionTitle>Why Tecspot</SectionTitle>
            <Marginer direction="vertical" margin="3em"/>
          <WhyTecspot
        title="Fully integrated services" 
        description="We build and deliver fully integrated websites with customized control panel
    that fits your company's need" imgUrl={ Service1Img}/>
         <WhyTecspot
        title="Mobile Optimized" 
        description="We build and deliver fully responsive websits that fits all screen sizes,giving the best user experineces" imgUrl={ Service2Img} />
     <WhyTecspot
        title="Quality services" 
        description="We have teams of professional developers,designers and managers 
        that delivers the best quality for your company" imgUrl={ Service3Img} />
</WhyTecspotContainer>
}