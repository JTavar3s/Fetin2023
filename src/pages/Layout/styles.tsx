import styled from 'styled-components'
import { Colors } from '../../assets/styles/StyleTypes'
const width = '660px'

export const Section = styled.div`
	text-transform: none;
	width: 100%;
`;

export const Header = styled.div`
	position: absolute;
	top: 0px;
	left: 0px;
	height: 65px;
	width: 100%;
  background-color: ${props => props.theme.colors.header};
`

export const Container = styled.div`
	display: flex;
	height: 100vh;
	width: 100vw;
  overflow-y: auto;
  overflow-x: hidden;
  font-family: Verdana, Geneva, Tahoma, sans-serif ;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.textPrimary};
`;

export const SideMenu = styled.div`
	border: none;
	width: auto;
	height: 100vh;
	// position: absolute;
	top: 0px;
	z-index: 1;
	background: #0a0c21;
	box-shadow: ${props => props.theme.colors.navbarShadow};
	border-radius: 0px 35px 35px 0px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
`;

export const Main = styled.main`
  width: ${width};
  height: 100%;
  position: absolute;
  top: 0px;
  z-index: 1;
  background: ${Colors.PRIMARY_PURE};
  box-shadow: 5px 0px 10px #00000080;
  border-radius: 0px 35px 35px 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow: overlay;
`;

export const Aside = styled.aside`
  width: calc(100vw - ${width} + 40px);
  min-height: 750px;
  height: 100%;
  position: absolute;
  top:0px;
  left: calc(${width} - 40px);
  z-index: 0;
`;

export const DivLang = styled.div`
  position: absolute;
  top: 20px;
  left: calc(100vw - 175px);
  height: 40px;
  width: 175px;
  background: #f2f2f2;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 5px #00000080;
  border-radius: 20px 0px 0px 20px;
  opacity: 1;
`;

export const Settings = styled.img`
  height: 30px;
  padding: 5px;
  border-radius: 30px;
  border: 2px solid #f15b29;
  background-color:#383838;
  margin: 0px 30px;
`

export const Canvas = styled.canvas`
    position: absolute;
    display: none;
    z-index: 100;
`
