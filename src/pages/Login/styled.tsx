import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const DivInputs = styled.div`
  width: 48%;
  padding: 40px;
`;

export const DivImage = styled.div`
  width: 90%;
  height: 100%;
  @media (max-width: 900px) {
    width: 0%;
    height: 0%;
  }
`;

export const divButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
`;

export const Title = styled.h3`
  font-size: 22px;
  text-align: center;
  margin: center;
`;

export const Text1 = styled.div`
  font-size: 13px;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.hoverColor}
  }
`;

export const Text2 = styled.div`
  font-size: 12px;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.hoverColor}
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
  font-size: 14px;
  margin-bottom: 8px;
  width: 300px;
  gap:5px;
  transition: 0.5s;
  &:hover {
    transition: 0.5s;
    color: #F231A5
  }
`;

export const Input = styled.input`
  padding: 8px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  background-color: ${props => props.theme.colors.textPrimary};
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

export const Error = styled.p`
  color: #ff0000;
`;