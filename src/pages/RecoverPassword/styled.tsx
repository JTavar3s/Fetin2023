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
  @media (max-width: 900px) {
    width: 100%;
  }
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

export const Title = styled.h1`
  font-size: 22px;
  margin: 0px 0px 16px 20px;
`;

export const Text1 = styled.div`
  font-size: 16px;
  cursor: pointer;
  &:hover {
    color: #F231A5
  }
`;

export const Text2 = styled.div`
  font-size: 12px;
  cursor: pointer;
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
  @media (max-width: 900px) {
    padding: 2px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-bottom: 8px;
  width: 400px;
  gap:5px;
  transition: 0.5s;
  @media (max-width: 900px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
  &:hover {
    transition: 0.5s;
    color: #F231A5
  }
`;

export const Input = styled.input`
  padding: 8px;
  border: hidden;
  background-color: ${props => props.theme.colors.textPrimary};
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