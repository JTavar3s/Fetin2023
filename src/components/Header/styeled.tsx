import styled from 'styled-components';
import * as color from '../../styles/color';

export const Nav = styled.nav`
width: 100%;
background-color:black;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 40px;
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: yellow;
  font-size: 40px;
  margin-left: 30px;
`;

export const Pages = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: right;
  align-items: center;
  justify-content: center;

  & > a{
    width: 100%;
    color: white;
    font-size: 20px;
    cursor: pointer;
    text-decoration: none;
  }

  & > a:hover{
    transition: 0.3s;
    color: yellow;
  }
`;
