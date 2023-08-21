import { useForm } from 'react-hook-form';
import * as Styled from './styled';
import { useNavigate } from 'react-router';
import RotateBanner from '../../components/RotateBanner';
import image from '../../assets/image/cat2.jpg';
import { FaImages } from 'react-icons/fa';
import CameraInput from '../../components/CameraInput';
import { signup } from '../../services/axios';
import { useState } from 'react';

type FormValues = {
  name: string;
  email: string;
  phone: number;
  password: string;
  codeAdm: string;
};

export function CreateAccount(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<FormValues>();
  const [img, setImg] = useState<string[]>([]);
  const navigate = useNavigate();

  const onSubmit = (data: FormValues) => {
    const user = {
      email: data.email,
      phone: data.phone,
      password: data.password,
      codeAdm: data.codeAdm,
      image: img
    }
    signup(user)
      .then(resp => {
        console.log(resp)
        navigate('/')
      })
      .catch(error => {
        console.log(error)
      })
  };

  const handleCapture = (imageData: string) => {
    img.push(imageData)
    setImg(img)
  };

  return (
    <Styled.Container>
      <Styled.DivInputs>
        <Styled.Title>Crie sua conta</Styled.Title>
        <Styled.Form onSubmit={handleSubmit(onSubmit)}>
          <Styled.Image>
            <CameraInput onCapture={handleCapture} />
          </Styled.Image>

          <Styled.Label>
            Nome:
            <Styled.Input
              type="name"
              {...register('name', { required: true })}
              disabled={formState.isSubmitting}
            />
            {formState.errors.name && <Styled.Error>Nome é obrigatório</Styled.Error>}
          </Styled.Label>

          <Styled.Label>
            Email:
            <Styled.Input
              type="email"
              {...register('email', { required: true })}
              disabled={formState.isSubmitting}
            />
            {formState.errors.email && <Styled.Error>Email é obrigatório</Styled.Error>}
          </Styled.Label>

          <Styled.Label>
            Senha:
            <Styled.Input
              type="password"
              minLength={8}
              {...register('password', { required: true })}
              disabled={formState.isSubmitting}
            />
            {formState.errors.password && <Styled.Error>Senha é obrigatória</Styled.Error>}
          </Styled.Label>

          <Styled.Label>
            Telefone:
            <Styled.Input
              type="phone"
              {...register('phone', { required: true })}
              disabled={formState.isSubmitting}
            />
            {formState.errors.email && <Styled.Error>Email é obrigatório</Styled.Error>}
          </Styled.Label>

          <Styled.Label>
            Codigo administrador:
            <Styled.Input
              type="text"
              minLength={8}
              {...register('codeAdm', { required: true })}
              disabled={formState.isSubmitting}
            />
            {formState.errors.codeAdm && <Styled.Error>Codigo do administrador é obrigatória</Styled.Error>}
          </Styled.Label>
          <Styled.divButton>
            <Styled.Button onClick={() => navigate(`/`)} disabled={formState.isSubmitting}>
              {formState.isSubmitting ? 'Aguarde...' : 'voltar'}
            </Styled.Button>
            <Styled.Button type="submit" disabled={formState.isSubmitting}>
              {formState.isSubmitting ? 'Aguarde...' : 'entrar'}
            </Styled.Button>
          </Styled.divButton>
        </Styled.Form>
      </Styled.DivInputs>
      <Styled.DivImage>
        <RotateBanner />
      </Styled.DivImage>
    </Styled.Container>
  );
};
