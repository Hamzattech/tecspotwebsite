import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import theme from '../../themes';
import Btn from '../button';
import Logo from '../logo';
import LogoFooter from '../logo/footerlogo';
import { Marginer } from '../marginer';
import { Whatsapp } from '../whatsapp';

const FooterContainer = styled.div`
width:100%;
height:480px;
display:flex;
flex-direction:column;
background-color:${theme.primary};
align-items:center;
padding:50px;
position:relative;

@media screen and (max-width:480px){
          padding:2px;
          height:435px;
     }
`;

const MotivationalText = styled.h1`
margin:0;
font-size:22px;
font-weight:500;
line-height:1.3;
color:${theme.white};
`;


const AccessibiliyContainer = styled.div`
width:80%;
display:flex;
border-top:1px solid #cdcdcd;
padding-top:6px;
padding-right:5px;
padding-left:5px;
color:${theme.white};
justify-content:space-between;


@media screen and (max-width:480px){
          width:90%;
     }

`;

const PrivacyContainer = styled.div`
display:flex;
`;

const SocialContainer = styled.div`
display:flex;


&:hover{
     color:#adadad;

};
`;

const SocialIcon = styled.div`
color:${theme.white};
font-size:28px;
transition:all 200ms ease-in-out;
cursor:pointer;

@media screen and (max-width:480px){
          margin-left:4px;
     }
     @media screen and (max-width:480px){
          font-size:15px;
     }

&:hover{
     color:${theme.secondary};
}
&:not(:last-of-type){
     margin-right:7px;

     @media screen and (max-width:480px){
          margin-right:3px;
     }
};

`;

const SocialIconContainer = styled.a`
color:${theme.white};
&:hover{
     color:${theme.secondary}
};
`

const Linky = styled.a`
color:${theme.white};
transition:all 200ms ease-in-out;
cursor:pointer;
font-size:14px;

@media screen and (max-width:480px){
          margin-left:9px;
     }
     @media screen and (max-width:480px){
          font-size:10px;
     }
&:not(:first-of-type){
     margin-left:10px;

  
};

&:hover{
     color:${theme.secondary};
};

`;

const RightReserved = styled.div`
position:absolute;
bottom:8px;
left:50%;
transform:translateX(-50%);
color:${theme.white};
font-size:12px;

@media screen and (max-width:480px){
          font-size:9px;
     }
    

`;

export function Footer(props){
return<FooterContainer>
                    <Marginer direction="vertical" margin="1em"/>
                    <LogoFooter/>
                    <Marginer direction="vertical" margin="1em"/>
                    <MotivationalText>Just think about the project</MotivationalText>
                    <MotivationalText>We make it a reality</MotivationalText>
                    <Marginer direction="vertical" margin="2em"/>
                    <Btn foot >Start your project</Btn>

     <Marginer direction="vertical" margin="4em"/>
     <AccessibiliyContainer>
          <PrivacyContainer>
               <Linky>Privacy policy</Linky>
               <Linky>Terms of services</Linky>
               <Linky>Contact us</Linky>

          </PrivacyContainer>
          <SocialContainer>
               <SocialIcon>
               <SocialIconContainer href={"https://www.linkedin.com/in/ridwan-hamzat-136439195"}><FontAwesomeIcon  className="fa-1x" icon={faLinkedin}/></SocialIconContainer>
               </SocialIcon>
               <SocialIcon>
               <SocialIconContainer href={"https://www.instagram.com/tecspot2020"}><FontAwesomeIcon  className="fa-1x" icon={faInstagram}/></SocialIconContainer>
               </SocialIcon>
               <SocialIcon>
                         <SocialIconContainer href={"https://web.facebook.com/ridwan.hamzat.501?ref=bookmarks"}><FontAwesomeIcon  className="fa-1x" icon={faFacebook}/></SocialIconContainer>
               </SocialIcon>
             
          </SocialContainer>
          <Whatsapp>
           <a href={"https://wa.me/+2348093167861"}><FontAwesomeIcon className="fa-2x" icon={faWhatsapp}/></a>
     </Whatsapp>
     </AccessibiliyContainer>
     <RightReserved> &copy; 2020 Tecspot All rights reserved </RightReserved>
    
</FooterContainer>
}