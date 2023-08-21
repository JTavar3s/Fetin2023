import styled from 'styled-components';

export const Nav = styled.nav`
  position: relative;
  height: 100vh;
  width: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  border-radius: 0px 35px 35px 0px;
  transition: all 0.5s ease-in-out;
  padding: 23px 0;
  gap: 60px;
  &:hover {
    box-shadow: inset -40px 0px 30px -20px rgba(255,255,255,0.2);
    & .button-hidden {
    opacity: 1;
    }
  }
  &.back-off {
    width: 100px;
  }

`;

export const ButtonHidden = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;
  background: tranparent;
  border: none;
  padding: 10px 5px;
  top: 0;
  right: 5px;  
  opacity: 0;
  cursor: pointer;
  transition: opacity 0.5s ease-in-out;
  outline: none;
`;


export const LeftArrow = styled.div`
  &.right {
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid white;
  }

  &.left {
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 5px solid white;
  }
`;

export const Image = styled.img`
  height: 80px;
  width: 132px;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
  &.back-off {
    opacity: 0;
  }
`;

export const Text = styled.div`
  color: #8899a6;
  text-align: center;
`;

export const DivIcon = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Icon = styled.div`
  cursor: pointer;

  svg{
   font-size: 30px;
  }

  &:hover {
    color: #F231A5
   }
`;

export const Title = styled.div`
  color: #8899a6;
  font-size: 20px;
  text-align: center;
`;
