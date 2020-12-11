import React from 'react'
import styled from 'styled-components'
import { Footer } from '../../components/footer';
import { Marginer } from '../../components/marginer';
import { Whatsapp } from '../../components/whatsapp';
import { MoreAboutSection } from './moreAboutSection';
import { ReviewSection } from './reviewsSection';
import { ServicesSection, WhyTecspotSection } from './whyTecspot';
import { TopSection } from './topSection'
import { WhatWeDoSection } from './whatWeDoSection';

const pageContainer = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
`;

 function Homepage(props){
    return <pageContainer>
          <TopSection/>
            <WhatWeDoSection/>
          <WhyTecspotSection/>
             <Marginer direction="vertical" margin="2em"/>
        <ReviewSection />
        {/* <MoreAboutSection /> */}
        <Marginer direction="vertical" margin="4em"/>
        <Footer/>
        </pageContainer>
}

export default Homepage