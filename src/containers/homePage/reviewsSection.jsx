import React from 'react';
import { SectionTitle } from '../../components/sectionTitile';
import {Element} from 'react-scroll';
import styled from 'styled-components';
import { Marginer } from '../../components/marginer';
import { CarouselProvider, DotGroup, Slide, Slider } from 'pure-react-carousel';
import { ReviewCard } from '../../components/reviewCard';
import 'pure-react-carousel/dist/react-carousel.es.css';
import User1Img from '../../tools/pictures/top-developers.jpg'
import User2Img from '../../tools/pictures/top-developers.jpg'
import {useMediaQuery} from 'react-responsive'


const ReviewsContainer = styled(Element)`
margin-top:-100px;
height:700px;
display:flex;
flex-direction:column;
align-items:center;
`;

const StyledCarouselProvider = styled(CarouselProvider)`
width:50%;

@media screen and (max-width:480px){
   width:100%; 
}
`;

const StyleSlide = styled(Slide)`
.carousel__inner-slide{
    display:flex;
    justify-content:center;
}`
;

const StyledDotGroup = styled(DotGroup)`
justify-content:center;
align-items:center;
display:flex;
margin-top:5rem;
button{
width:11px;
height:11px;
border-radius:50%;
background-color:#E4E4E4;
border:none;
outline:none;
&:not(:last-of-type){
    margin-right:10px;
    }
}
.carousel__dot--selected {
    background-color:#c4c4c4;
   
}
`;



export function ReviewSection(props){

    const isMobile = useMediaQuery({query: "(max-width:480px)"});

return ( 
<ReviewsContainer>
    <SectionTitle>What others are saying about us</SectionTitle>
    <Marginer direction="vertical" margin="2em" />
    <StyledCarouselProvider 
            naturalSlideWidth={200}
            naturalSlideHeight={250} 
            totalSlides={4}     
            visibleSlides={isMobile ? 1 : 2}
            dragEnabled={false}>
    <Slider>
        <StyleSlide index={0}><ReviewCard
         reviewText ="They helped me handled my website effectively without no delay" 
         username="Jonathan" 
         userimgurl={User1Img}/></StyleSlide>
        <StyleSlide index={1}><ReviewCard
         reviewText ="Tecspot is an awesome platform for your graphics designs."
          username="Ridwan" 
         userimgurl={User2Img}/></StyleSlide>
        <StyleSlide index={2}><ReviewCard reviewText ="They keep to their words by delivering in no time" 
         username="Toyin" 
         userimgurl={User1Img}/></StyleSlide>
        <StyleSlide index={3}><ReviewCard reviewText ="" 
         username="Johnee" 
         userimgurl={User1Img}/></StyleSlide>

    </Slider>
    <StyledDotGroup/>
    </StyledCarouselProvider>
</ReviewsContainer>
)
}