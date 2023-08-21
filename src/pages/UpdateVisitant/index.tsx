import { useForm } from 'react-hook-form';
import * as Styled from './styled';
import { useNavigate } from 'react-router';
import CameraInput from '../../components/CameraInput';
import image from '../../assets/image/joao-ryan.png';
import { updateVisitant } from '../../services/axios';
import { useState } from 'react';

const user =
{
  id: 1,
  name: 'joao ryan',
  img: image,
  phone: '(35) 9 99372979',
}

type FormValues = {
  name: string;
  phone: number;
};

export function UpdateVisitant(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<FormValues>();
  const [img, setImg] = useState<string[]>([]);
  const navigate = useNavigate();

  const onSubmit = (data: FormValues) => {
    const user = {
      name: data.name,
      phone: data.phone,
      image: img
    }
    updateVisitant(user, 1)
      .then(resp => {
        console.log(resp)
        navigate(-1)
      })
      .catch(error => {
        console.log(error)
      })
    navigate(-1)
  };

  const handleCapture = (imageData: string) => {
    img.push(imageData)
    setImg(img)
  };

  return (
    <>
      <Styled.Page>
        <Styled.Content onSubmit={handleSubmit(onSubmit)}>
          <Styled.Title>EDITAR USUÁRIO</Styled.Title>
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
                    defaultValue={user.name}
                    {...register('name', { required: true })}
                    disabled={formState.isSubmitting}
                  />
                  {formState.errors.name && <Styled.Error>Nome é obrigatório</Styled.Error>}
                </Styled.Label>
                <Styled.Label>
                  Telefone:
                  <Styled.Input
                    type="phone"
                    defaultValue={user.phone}
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
              <Styled.Button >
                {'salvar'}
              </Styled.Button>
            </Styled.ButtonDiv>
          </div>
        </Styled.Content>
      </Styled.Page>
    </>
  );
};
