import styled from 'styled-components';


export const Content = styled.div`
  width: 100%;
 // min-height: 100px;
  display: flex;
  align-items: center;
`;

export const Webcam = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: ${props => props.theme.colors.textPrimary};
  color: #000000;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 16px;
  width: 178px;
  &:hover {
    background-color: ${props => props.theme.colors.hoverColor}
  }

  &:disabled {
    background-color: #bdbdbd;
    cursor: not-allowed;
  }
`;
