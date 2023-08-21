import styled from 'styled-components';

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
