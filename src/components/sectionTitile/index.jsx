import React from 'react'
import styled from 'styled-components'
import theme from '../../themes';

export const SectionTitle = styled.h1`
font-size:34px;
font-weight:bold;
color:${theme.primary};

@media screen and (max-width: 480px){
    text-align:center;
}
`;