import { useForm } from 'react-hook-form';
import * as Styled from './styled';
import { useNavigate } from 'react-router';
import RotateBanner from '../../components/RotateBanner';
import { login } from '../../services/axios';

type FormValues = {
  email: string;
  password: string;
};

export function LoginPage(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<FormValues>();
  const navigate = useNavigate();

  const onSubmit = (data: FormValues) => {
    const user = {
      email: data.email,
      password: data.password,
    }
    login(user)
      .then(resp => {
        console.log(resp)
        if(resp.data.user){
          localStorage.setItem('user', JSON.stringify(resp.data.user));
          localStorage.setItem('resident', JSON.stringify(resp.data.resident));
          navigate('/home')
        }
      })
      .catch(error => {
        console.log(console.error)
        //TODO: escrever mesnagem de erro de login
      })
  };

  return (
    <Styled.Container>
      <Styled.DivInputs>
        <Styled.Title>Login</Styled.Title>
        <Styled.Form onSubmit={handleSubmit(onSubmit)}>
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

          <Styled.Text1 onClick={() => navigate('/RecoverPasswordPage')}>Esqueceu a senha</Styled.Text1>

          <Styled.Button type="submit" disabled={formState.isSubmitting}>
            {formState.isSubmitting ? 'Aguarde...' : 'Login'}
          </Styled.Button>
          <Styled.Text2 onClick={() => navigate(`/createAccount`)}>Cadrastrar</Styled.Text2>
        </Styled.Form>
      </Styled.DivInputs>
      <Styled.DivImage>
        <RotateBanner />
      </Styled.DivImage>

    </Styled.Container>
  );
};
