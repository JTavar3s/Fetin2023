import { useForm } from 'react-hook-form';
import * as Styled from './styled';
import { useNavigate } from 'react-router';
import Header from '../../components/Hader';
import CameraInput from '../../components/CameraInput';
import { FaArrowLeft } from 'react-icons/fa';
import { creatVisitantResident } from '../../services/axios';
import { useState } from 'react';

type FormValues = {
  name: string;
  phone: number;
};

export function CreatVisitant(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<FormValues>();
  const [img, setImg] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleCapture = (imageData: string) => {
    img.push(imageData)
    setImg(img)
  };

  const onSubmit = (data: FormValues) => {
    const user = {
      name: data.name,
      phone: data.phone,
      image: img
    }
    creatVisitantResident(user, 1)
      .then(resp => {
        console.log(resp)
        navigate('/home')
      })
      .catch(error => {
        console.log(error)
      })
    navigate('/home')
  };

  return (
    <>
      <Styled.Page>
        <Styled.Content onSubmit={handleSubmit(onSubmit)}>
          <Styled.Title>CRIAR USUÁRIO</Styled.Title>
          <div>
            <Styled.InputsDiv>
              <Styled.Image>
                <CameraInput onCapture={handleCapture} />
              </Styled.Image>
              <Styled.InfoDiv>
                <Styled.Label>
                  Nome:
                  <Styled.Input
                    type="text"
                    defaultValue={''}
                    {...register('name', { required: true })}
                    disabled={formState.isSubmitting}
                  />
                  {formState.errors.name && <Styled.Error>Nome é obrigatório</Styled.Error>}
                </Styled.Label>
                <Styled.Label>
                  Telefone:
                  <Styled.Input
                    type="phone"
                    {...register('phone', { required: true })}
                    disabled={formState.isSubmitting}
                  />
                  {formState.errors.phone && <Styled.Error>Telefone é obrigatório</Styled.Error>}
                </Styled.Label>
              </Styled.InfoDiv>
            </Styled.InputsDiv>
          </div>
          <div>
            <Styled.ButtonDiv>
              <Styled.Button onClick={() => navigate(-1)} >
                {'voltar'}
              </Styled.Button>
              <Styled.Button type="submit" >
                {'salvar'}
              </Styled.Button>
            </Styled.ButtonDiv>
          </div>
        </Styled.Content>
      </Styled.Page>
    </>
  );
};
