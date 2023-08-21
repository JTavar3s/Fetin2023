import styled from 'styled-components';

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

export const RegressDiv = styled.div`
  font-size: 20px;
  padding: 20px 0px 0px 60px;
`;

export const Regress = styled.div`
  gap: 10px;
  width: auto;
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover{
    color: ${props => props.theme.colors.hoverColor};
  }
`;

export const Content = styled.div`
  //width: 80%;
  min-height: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding: 60px;
  background-color: rgb(25, 29, 63);
  gap: 40px;

  @media (max-width: 700px) {
    width: auto;
    padding: 30px;
  }
  @media (max-width: 500px) {
    padding: 30px 10px;
  }
`;

export const InputsDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  @media (max-width: 1150px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  gap: 20px;
`;

export const Paragraph = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: 10px;
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
  transition: 0.5s;
  @media (max-width: 700px) {
    width: 120px;
  }
  &:hover {
    transition: 0.5s;
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

export const BodyDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  //height: 100%;
`;

export const Image = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  svg{
    font-size: 248px;
    cursor: pointer;
    &:hover {
    transition: 0.5s;
    color: #F231A5;
  }
  }
  img{
    width: 229px;
    height: 171px;
    border-radius: 10%;
    @media (max-width: 700px) {
      width: 250px;
      height: 110px;
    }
  }
`

export const ImageDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.5s;
  &:hover {
    transition: 0.5s;
    color: #F231A5;
  }
`

export const InfoDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  width: 382px;
  height: 100%;
  background-color: rgb(25, 29, 63);
  border-radius: 4%;
  gap: 3px;
  @media (max-width: 1150px) {
    width: auto;
  }
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-bottom: 8px;
  width: 300px;
  gap:5px;
  border: none;
  transition: 0.5s;
  @media (max-width: 700px) {
    width: 250px;
  }
  &:hover {
    transition: 0.5s;
    color: #F231A5;
  }
`;

export const Input = styled.input`
  padding: 8px;
  border: none;
  background-color: ${props => props.theme.colors.textPrimary};
  border-radius: 4px;
  font-size: 16px;
`;

export const Title = styled.div`
  font-size: 25px;

`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  width: 100%;
  gap: 40px;
`
export const Subtitle = styled.div`
  font-size: 20px;

`
export const Text = styled.div`
  font-size: 20px;

`

export const DivButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`
