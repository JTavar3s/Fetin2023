import { useForm } from 'react-hook-form';
import * as Styled from './styled';
import { Navigate, useNavigate } from 'react-router';
import RotateBanner from '../../components/RotateBanner';
import { useInView } from "react-intersection-observer";
import { useState } from 'react';
import AnimateWhenVisible from '../../components/AnimateWhenVisible';
import { MdGroupAdd } from 'react-icons/md';
import { MdAccountCircle } from 'react-icons/md'
import { RiContactsFill } from 'react-icons/ri'
import { FaArrowLeft } from 'react-icons/fa'
import TeamCard from '../../components/Equip';
import Header from '../../components/Hader';
import image from '../../assets/image/joao-ryan.png';
import CardVisitant from '../../components/CardVisitant';
import ModalDeleteVisitant from '../../components/Modals/ModalDeleteVisitant';
//RiContactsFill

export function Visitant(): JSX.Element {
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  const navigate = useNavigate();
  const visitant = [
    { name: 'joao ryan', img: image, phone: '(35) 9 99372979' },
    { name: 'joao ryan', img: image, phone: '(35) 9 99372979' },
    { name: 'joao ryan', img: image, phone: '(35) 9 99372979' },
    { name: 'joao ryan', img: image, phone: '(35) 9 99372979' },
    { name: 'joao ryan', img: image, phone: '(35) 9 99372979' },
    { name: 'joao ryan', img: image, phone: '(35) 9 99372979' },
    { name: 'joao ryan', img: image, phone: '(35) 9 99372979' },
    { name: 'joao ryan', img: image, phone: '(35) 9 99372979' },
  ]

  return (
    <>

      {showModalDeleteUser && (
        <ModalDeleteVisitant
          id={1}
          onCancel={() => setShowModalDeleteUser(false)}
        />
      )}
      <Styled.Container>
        <Header />
        <Styled.RegressDiv>
          <Styled.Regress onClick={() => navigate(`/home`)}>
            <FaArrowLeft />
            voltar
          </Styled.Regress>
        </Styled.RegressDiv>

        <Styled.BodyDiv>
          {visitant.map((item, index) =>
            <CardVisitant visitant={item} timeAnimate={index / 4} modalDelete={() => setShowModalDeleteUser(true)} />
          )}

        </Styled.BodyDiv>
      </Styled.Container>
    </>
  );
};
