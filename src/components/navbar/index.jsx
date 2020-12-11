import React from 'react'
import Btn from '../../components/button';
import styled from 'styled-components'
import TecspotLogo2 from '../../tools/logo/tecspotLogoHorizontal.png'
import { Marginer } from '../marginer';
import theme from '../../themes';

const NavbarContainer = styled.div`
width:100%;
height:65px;
padding:1rem 1rem;
display:flex;
justify-content:space-between;
`;

const LogoContainer = styled.div`

`;

const NavBarLogoImage = styled.img`

`;

const AccessibilityContainer = styled.div`
display:flex;
justify-content:space-between;
`;

const LoginButton = styled(Btn)`
background-color:transparent;
color:${theme.primary};
border:1px solid ${theme.primary};

&:hover{
background-color:${theme.primary};
border:1px solid ${theme.primary};
color:${theme.white};
}

`;

export function Navbar(props){
return  <NavbarContainer>
<LogoContainer>
    <NavBarLogoImage src={TecspotLogo2}/>
</LogoContainer>
<AccessibilityContainer>
    <Btn small>Get Started</Btn>
    <Marginer direction="horizontal" margin="1rem"  />
    <LoginButton small>Login</LoginButton>
</AccessibilityContainer>
</NavbarContainer>
}