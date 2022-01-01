import styled from 'styled-components';

export const Button = styled.button`
// scss syntax
color:${(props) => (props.theme === "light"? "#EF2F88" : "#F9D371")};
background-color:${(props) => (props.theme === "light"? "#F9D371" : "#EF2F88")};
width:200px;
height: 50px;
border: none;
&:hover{
    box-shadow: 1px 3px 3px #8843F2 ;
}
`;

export const Div = styled.div`
color: #F47340;
background-color: #F9D371;
& > p:hover{
    color: #8843F2;
}
`;