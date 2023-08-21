import styled from 'styled-components';
import * as DesignSystem from '../../../assets/styles/StyleTypes';

type ContainerProps = {
  width: string;
  top: string;
};

export const Container = styled.div<ContainerProps>`
  z-index: 10;
  position: fixed;
  top:  ${(props) => props.top};
  left: 10%;
  width: 80%;
  min-width: 260px;
  max-height: 80vh;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 5px;
  color: ${(props) => props.theme.colors.textSecondary};
  background-color: rgb(25, 29, 63);
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    left: calc(50% - (${(props) => props.width} / 2));
    width: ${(props) => props.width};
  }
`;

export const Header = styled.div`
  position: relative;
  flex-basis: 50px;
  min-height: 50px;
  background-color: rgb(25, 29, 63);
  //background: ${(props) => props.theme.colors.backgroundHeaderModal};
  color: ${(props) => props.theme.colors.textSecondary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 0px;
`;

export const Title = styled.h2`

`;

export const CloseButton = styled.button`
  cursor: pointer;
  background-color: ${DesignSystem.Colors.HIGH_PURE};
  color: ${(props) => props.theme.colors.header};
  height: 20px;
  width: 20px;
  font-weight: 600;
  border-color: transparent;
  outline: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 95%;
  top: 20%;
`;

export const Content = styled.div`
  padding: ${DesignSystem.Padding.SM};
  //max-height: calc(80vh - 130px);
  overflow-y: none;
  color: ${(props) => props.theme.colors.textPrimary};
`;

export const Footer = styled.div`
  padding: ${DesignSystem.Padding.SM};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  gap: 20px;
`;

export const Form = styled.form`
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
