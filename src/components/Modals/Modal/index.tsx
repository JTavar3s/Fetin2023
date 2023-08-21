import React, { FC, FormEvent } from 'react';
import ReactDOM from 'react-dom';
import Backdrop from '../Backdrop';
import * as Styled from './styles';

type ModalProps = {
  onCancel: () => void;
  onSubmit?: (event: FormEvent) => void;
  children: React.ReactNode;
  footer?: React.ReactElement;
  modalClass?: string;
  headerClass?: string;
  contentClass?: string;
  footerClass?: string;
  top: string;
  title: string;
  width: string;
  showButtonClose?: boolean;
};

const ModalOverlay: FC<ModalProps> = (props) => {
  const content = (
    <Styled.Container className={props.modalClass} width={props.width} top={props.top}>
      <Styled.Header className={props.headerClass}>
        <Styled.Title>{props.title}</Styled.Title>
        {props.showButtonClose ? (
          <Styled.CloseButton onClick={props.onCancel}>X</Styled.CloseButton>
        ) : (
          ''
        )}
      </Styled.Header>
      <Styled.Form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <Styled.Content className={props.contentClass}>
          {props.children}
        </Styled.Content>
        {props.footer ? (
          <Styled.Footer className={props.footerClass}>
            {props.footer}
          </Styled.Footer>
        ) : (
          ''
        )}
      </Styled.Form>
    </Styled.Container>
  );

  return ReactDOM.createPortal(content, document.getElementById('modal')!);
};

const Modal: FC<ModalProps> = (props) => {
  return (
    <>
      <Backdrop />
      <ModalOverlay {...props} />
    </>
  );
};

export default Modal;
