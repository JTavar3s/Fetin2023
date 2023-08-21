import styled from 'styled-components';

export const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  
  background: transparent;
  backdrop-filter: blur(5px);
  @-moz-document url-prefix() {
    & {
      background: rgba(0, 0, 0, 0.75);
    }
  }
  z-index: 10;
`; 