import { useForm } from 'react-hook-form';
import * as Styled from './styled';
import { Navigate, useNavigate } from 'react-router';
import RotateBanner from '../../components/RotateBanner';

type FormValues = {
  email: string;
};

export function RecoverPasswordPage(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<FormValues>();
  const navigate = useNavigate();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <Styled.Container>
      <Styled.DivInputs>
        <Styled.Title>Recuperar senha</Styled.Title>
        <Styled.Form onSubmit={handleSubmit(onSubmit)}>
          <Styled.Label>
            Email para recuperar senha:
            <Styled.Input
              type="email"
              {...register('email', { required: true })}
              disabled={formState.isSubmitting}
            />
            {formState.errors.email && <Styled.Error>Email é obrigatório</Styled.Error>}
          </Styled.Label>
          <Styled.divButton>
            <Styled.Button onClick={() => navigate(`/`)} disabled={formState.isSubmitting}>
              {formState.isSubmitting ? 'Aguarde...' : 'voltar'}
            </Styled.Button>
            <Styled.Button type="submit" disabled={formState.isSubmitting}>
              {formState.isSubmitting ? 'Aguarde...' : 'enviar'}
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
