import { useForm } from 'react-hook-form';
import * as Styled from './styled';
import { Navigate, useNavigate } from 'react-router';
import RotateBanner from '../../components/RotateBanner';
import { useInView } from "react-intersection-observer";
import { useState } from 'react';
import AnimateWhenVisible from '../../components/AnimateWhenVisible';
import { FaArrowLeft } from 'react-icons/fa'
import TeamCard from '../../components/Equip';
import Header from '../../components/Hader';
import image from '../../assets/image/joao-ryan.png';
import ModalDeleteUser from '../../components/Modals/ModalDeleteUser';

//RiContactsFill

type FormValues = {
  email: string;
  password: string;
};

export function Profile(): JSX.Element {
  const navigate = useNavigate();
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);

  const user =
  {
    id: 1,
    name: 'joao ryan',
    email: 'test@gmail.com',
    img: image,
    phone: '(35) 9 99372979',
    cpf: '111.111.111-11',
    endereço: 'Rua em algum lugar'
  }


  return (
    <>
      {showModalDeleteUser && (
        <ModalDeleteUser
          id={user.id}
          onCancel={() => setShowModalDeleteUser(false)}
        />
      )}
      <Styled.Container>
        {/*
       <Styled.backgroundGif>
       </Styled.backgroundGif>
       */}
        <Header />
        <Styled.RegressDiv>
          <Styled.Regress onClick={() => navigate(`/home`)}>
            <FaArrowLeft />
            voltar
          </Styled.Regress>
        </Styled.RegressDiv>

        <Styled.BodyDiv>
          <Styled.Image>
            <img src={user.img} />
          </Styled.Image>

          <Styled.InfoDiv>
            <Styled.Title>Minhas informações</Styled.Title>
            <Styled.Info>
              <div>
                <Styled.Subtitle>Nome</Styled.Subtitle>
                <Styled.Text>{user.name}</Styled.Text>
              </div>
              <div>
                <Styled.Subtitle>CPF</Styled.Subtitle>
                <Styled.Text>{user.cpf}</Styled.Text>
              </div>
              <div>
                <Styled.Subtitle>Endereço</Styled.Subtitle>
                <Styled.Text>{user.endereço}</Styled.Text>
              </div>
              <div>
                <Styled.Subtitle>Telefone</Styled.Subtitle>
                <Styled.Text>{user.phone}</Styled.Text>
              </div>
            </Styled.Info>
            <Styled.DivButton>
              <Styled.Button onClick={() => setShowModalDeleteUser(true)}>
                deletar
              </Styled.Button>
              <Styled.Button onClick={() => navigate('update')} >
                editar
              </Styled.Button>
            </Styled.DivButton>

          </Styled.InfoDiv>
        </Styled.BodyDiv>
      </Styled.Container>
    </>
  );
};
