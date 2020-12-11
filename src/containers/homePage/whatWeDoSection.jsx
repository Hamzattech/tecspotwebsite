import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../components/sectionTitile';
import {Element} from 'react-scroll'
import { Marginer } from '../../components/marginer';
import Service1Img from '../../tools/illustrations/—Pngtree—modern flat design concept of_5331513.png'
import Service2Img from '../../tools/illustrations/web development illustration.jpg'
import Service3Img from '../../tools/illustrations/—Pngtree—modern flat design concept of_5332875.png'
import { WhatWeDo } from './whatWedo';


const WhatWDoContainer = styled(Element)`
width:100%;
min-height:1400px;
display:flex;
flex-direction:column;
align-items:center;
padding:10px 0;


@media screen and (max-wdith:480px){
    

}
`;

export function WhatWeDoSection(props){
return <WhatWDoContainer name="whatwedo">
         <SectionTitle>What We do</SectionTitle>
            <Marginer direction="vertical" margin="3em"/>
          <WhatWeDo 
        title="Web Design" 
        description="We design beautiful websites that is cool and awesome to keep your business growing" imgUrl={ Service2Img}/>
         <WhatWeDo
        title="Web Development" 
        description="We help you build the website to expose you to potential customers and give you an edge over your competitors" imgUrl={ Service1Img} isReverse/>
     <WhatWeDo
        title="Graphics Design" 
        description="We design awesome graphics taking cognizance of all the graphics design principles.We leverage the best available design tools"
         imgUrl={ Service3Img} />
</WhatWDoContainer>
}