import styled from 'styled-components';
import { Colors } from '../../assets/styles/StyleTypes'
import imageLogin1 from '../../assets/image/cat1.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
  padding: 0px 0px 30px 0px;
`;

export const LogoutButton = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
  cursor: pointer;
  :hover{
    color: ${props => props.theme.colors.hoverColor};
  }
`;

export const Hader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
  margin: 0px 20px;
  border-bottom: #bbbbbb 1px solid;
`;

export const Baseboard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 26px;
  margin: 89px 20px 0px 30px;
  border-top: #bbbbbb 1px solid;
`;

export const CardDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 100px;
  @media (max-width: 540px) {
    flex-direction: column;
    align-items: center;
    gap: 10px
  }
`;

export const CardButton = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
`;

export const CardButtonDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 312px;
  height: 312px; 
  transition: 0.5s;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.textPrimary};
  color: ${props => props.theme.colors.background};
  cursor: pointer;
  svg{
    color: ${props => props.theme.colors.background};;
    font-size: 80px;
  }
  :hover{
    width: 318px;
    height: 318px;
    transition: 0.5s;
    background-color: ${props => props.theme.colors.hoverColor};
  }
  @media (max-width: 1040px) {
    width: 212px;
    height: 212px;
    :hover{
      width: 218px;
      height: 218px;
    } 
    svg{
      font-size: 60px;
    }
  } 
  @media (max-width: 740px) {
    width: 162px;
    height: 162px;
    :hover{
      width: 168px;
      height: 168px;
    }  
    svg{
      font-size: 40px;
    }
  } 
`;

export const backgroundGif = styled.div`
  width: 100%;
  padding-bottom: 20px;
  //height: 500px;
  background-image: url('https://media.giphy.com/media/3WuagBkXjI2SHfgDsU/giphy.gif');
  background-size: contain;
`;

export const infoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 140px 180px 0px 180px;
  @media (max-width: 1000px) {
    margin: 140px 40px 0px 40px;
  }
  @media (max-width: 600px) {
    margin: 140px 20px 0px 20px;
  }
`;

export const TeamDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  margin: 100px 160px 0px 160px;
   @media (max-width: 1000px) {
    margin: 140px 40px 0px 40px;
  }
  @media (max-width: 600px) {
    margin: 140px 20px 0px 20px;
  }
`;

export const TeamCardDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 42px;
  @media (max-width: 1150px) {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-around;
    gap: 20px;
  }
`;

export const info2Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  margin: 110px 100px 0px 100px;
   @media (max-width: 1000px) {
    margin: 140px 40px 0px 40px;
  }
  @media (max-width: 600px) {
    margin: 140px 20px 0px 20px;
  }
`;


export const DivImage = styled.div`
  width: 90%;
  height: 100%;
`;

export const divButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
`;

export const Title = styled.h1`
  font-size: 34px;
  cursor: default;
  @media (max-width: 1040px) {
    font-size: 24px;
  } 
  @media (max-width: 740px) {
    font-size: 18px;
  }
`;

export const Text1 = styled.div`
  font-size: 20px;
  cursor: default;
  @media (max-width: 740px) {
    font-size: 16px;
  } 
  &:hover {
    color: #F231A5
  }
`;

export const Text2 = styled.div`
  cursor: default;
  font-size: 16px;
  animation-direction: right;
  transition: all 0.5s ease-out;
  transform: translatex(-1000px);
 // opacity: 0;
 // transform: translateY(20px);
  &.show {
  opacity: 1;
  transform: translatex(150px);
  }
  
  &:hover {
   
    color: #F231A5
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  gap: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  width: 300px;
  gap:5px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: ${props => props.theme.colors.textPrimary};;
  color: #000000;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 16px;
  width: 148px;
  &:hover {
    background-color: #F231A5
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const Error = styled.p`
  color: #ff0000;
`;