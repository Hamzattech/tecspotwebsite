import React from 'react'
import styled from 'styled-components'
import theme from '../../themes';
import FooterLogoUrl from '../../tools/logo/tecspotLogoFooterSmallScreen.png'

const LogoContainer = styled.div`
display:flex;
flex-direction:column;
`;

const LogoImg = styled.img`
width:100%;
height:100%;
`;




function LogoFooter(props){
return <LogoContainer>
    <LogoImg src={FooterLogoUrl}></LogoImg>
</LogoContainer>
}
export default LogoFooter