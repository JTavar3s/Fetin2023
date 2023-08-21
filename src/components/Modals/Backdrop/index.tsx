import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { Div } from './styles'

const Backdrop: FC = () => {
  return ReactDOM.createPortal(
    <Div />,
    document.getElementById('backdrop')!
  );
}

export default Backdrop
