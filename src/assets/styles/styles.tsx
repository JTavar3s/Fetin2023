/**
 * Developed by: Inatel Competence Center
 * Copyright 2019, Prática
 * Author: Lucas Marciano
 * All rights are reserved. Reproduction in whole or part is
 * prohibited without the written consent of the copyright owner.
 */

import { createGlobalStyle } from 'styled-components';
import 'font-awesome/css/font-awesome.css';
import 'react-toastify/dist/ReactToastify.css';
import { Colors } from './StyleTypes';

/**
 * Global component for the all application.
 */
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    * {
        scrollbar-width: thin;
        scrollbar-color: ${Colors.HIGH_PURE} ${Colors.LOW_LIGHT};
    }
    
    /* Works on Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
        width: 5px;
        border-radius: 5px;
    }
    
    *::-webkit-scrollbar-track {
        background: ${Colors.LOW_LIGHT};
    }
    
    *::-webkit-scrollbar-thumb {
        background-color: ${Colors.HIGH_PURE};
        border-radius: 5px;
        border: 1px solid ${Colors.HIGH_PURE};
    }

    // *::-webkit-scrollbar {
    //     display: none;
    //   }
      
    // /* Hide scrollbar for IE, Edge and Firefox */
    // * {
    // -ms-overflow-style: none;  /* IE and Edge */
    // scrollbar-width: none;  /* Firefox */
    // }

	body {        
        font-family: 'Roboto', sans-serif;
        color: ${props => props.theme.colors.textPrimary};
        font-size: 14px;        
        margin: 0;
        min-height: 100%;
        background-color: ${props => props.theme.colors.background};
    }
`;

export default GlobalStyle;
