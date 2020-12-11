import React from 'react'
import theme from '../../themes'
import styled from 'styled-components'



const ButtonWrapper = styled.button`
        padding:${({ small }) => small ? "5px 8px" : "7px 15px"};
        border-radius:5px;
        background-color:${({foot}) =>foot ? "#fff":"#000080" };
        color:${({ foot }) =>(foot ? "#000080" : "#fff") };
        font-weight:bold;
        font-size:${({ small }) => small ? "12px" : "16px"};
        transition: all 220ms ease-in-out;
        cursor:pointer;
        border:none;


        &:hover{
            background-color:transparent;
            border:${({ foot })=> foot ? "1px solid #fff" : "1px solid #000080" };
            color:${({ foot }) => foot ? "#fff" : "#000080" };
            
        }
`;

function Btn(props){
return  <ButtonWrapper {...props}>{props.children}</ButtonWrapper>
}

export default Btn