import React from 'react'
import styled from 'styled-components'
import theme from '../../themes';
import TecspotLogo from '../../tools/logo/tecspotLogoLandingPageSmallScreen.png'

const LogoContainer = styled.div`
display:flex;
flex-direction:column;
`;

const LogoImg = styled.img`
width:100%;
height:100%;
`;




function Logo(props){
return <LogoContainer>
    <LogoImg src={TecspotLogo}></LogoImg>
</LogoContainer>
}
export default Logo