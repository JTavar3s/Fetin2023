import React from 'react';
import {ThemeProvider} from 'styled-components';
import light from '../../assets/styles/themes/light'

const ProviderWrapper = ({ children }) => {

    return (
        <ThemeProvider theme={light}>
            { children }
        </ThemeProvider>
    );
}

export default ProviderWrapper;
