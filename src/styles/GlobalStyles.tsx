import styled, { createGlobalStyle } from 'styled-components';
import * as color from './color';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;

}
body{
font-family: 'Times New Roman';
background:white;
color: ${color.primaryDarkColor};
max-width: 100%;
width: 100%;
max-height: 100%;
height: 100%;


}

html, border, #root{
    height: 100%;

}


button{
    cursor: pointer;
    background: ${color.primaryBlueColor};
    border: none;
    color: #fff;
    padding:10px 20px ;
    border-radius: 4px;
    font-weight: 700;
}
a{
    text-decoration: none;
    color: ${color.primaryBlueColor};
}
ul{
    list-style: none;
}

body .Toastify .Toastify_toast-container .Toastify_toast--success {
background: ${color.successColor}
}
body .Toastify .Toastify_toast-container .Toastify_toast--error {
background: ${color.errorColor}
}

`;

export const Container = styled.section`
  max-width: 100%;
  width: 89%;
  height: 100%;
  float: right;
  padding: 32px 114px;
  overflow: scroll;
`;
