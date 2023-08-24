import * as Styled from './styled';
import { useNavigate } from 'react-router';
import AnimateWhenVisible from '../../components/AnimateWhenVisible';
import { MdGroupAdd } from 'react-icons/md';
import { MdAccountCircle } from 'react-icons/md'
import { RiContactsFill } from 'react-icons/ri'
import TeamCard from '../../components/Equip';
import Header from '../../components/Hader';
import image1 from '../../assets/image/joao-ryan.png'
import image2 from '../../assets/image/matheus.png'
import image3 from '../../assets/image/joao.png'
import image4 from '../../assets/image/gustavo.png'

export function chamandoReconhecimento(){
  const navigate = useNavigate();
}

export function Home(): JSX.Element {
  const navigate = useNavigate();

  return (
    <><Styled.Container>
      <Styled.backgroundGif>
        <Header />
        <Styled.CardDiv>
          <Styled.CardButtonDiv onClick={() => navigate(`/profile`)}>
            <Styled.CardButton>
              <MdAccountCircle />
              <Styled.Title>
                Perfil
              </Styled.Title>
            </Styled.CardButton>
          </Styled.CardButtonDiv>
          <Styled.CardButtonDiv onClick={() => navigate(`/user/:id/visitant/creat`)}>
            <Styled.CardButton>
              <MdGroupAdd />
              <Styled.Title>
                Adicionar visitante
              </Styled.Title>
            </Styled.CardButton>
          </Styled.CardButtonDiv>
          <Styled.CardButtonDiv onClick={() => navigate(`/visitant`)}>
            <Styled.CardButton>
              <RiContactsFill />
              <Styled.Title>
                Visitantes
              </Styled.Title>
            </Styled.CardButton>
          </Styled.CardButtonDiv>
        </Styled.CardDiv>
      </Styled.backgroundGif>
      <Styled.infoDiv>
        <Styled.Title>Conheça a SafeFace</Styled.Title>
        <Styled.Text1>Um sistema de reconhecimento facial pode oferecer uma maneira conveniente de desbloquear portas ou acessar áreas restritas sem a necessidade
          de chaves ou senhas. Isso pode ser particularmente útil em eventos ou reuniões, onde muitas pessoas precisam acessar
          áreas restritas.pode ser particularmente útil em eventos ou reuniões, onde muitas pessoas precisam acessar áreas restritas
        </Styled.Text1>
        <Styled.info2Div>
          <AnimateWhenVisible icon={'FaSearch'} text={`Um sistema de reconhecimento facial pode oferecer uma maneira conveniente de desbloquear portas ou acessar áreas restritas sem
            a necessidadede chaves ou senhas Isso pode ser particularmente útil em eventos ou reuniões, onde muitas pessoas precisam acessar áreas restritas.`} />

          <AnimateWhenVisible icon={'FaSearch'} text={`Um sistema de reconhecimento facial pode oferecer uma maneira conveniente de desbloquear portas ou acessar áreas restritas sem
            a necessidadede chaves ou senhas Isso pode ser particularmente útil em eventos ou reuniões, onde muitas pessoas precisam acessar áreas restritas.`} />

          <AnimateWhenVisible icon={'FaSearch'} text={`Um sistema de reconhecimento facial pode oferecer uma maneira conveniente de desbloquear portas ou acessar áreas restritas sem
            a necessidadede chaves ou senhas Isso pode ser particularmente útil em eventos ou reuniões, onde muitas pessoas precisam acessar áreas restritas.`} />

          <AnimateWhenVisible icon={'FaSearch'} text={`Um sistema de reconhecimento facial pode oferecer uma maneira conveniente de desbloquear portas ou acessar áreas restritas sem
            a necessidadede chaves ou senhas Isso pode ser particularmente útil em eventos ou reuniões, onde muitas pessoas precisam acessar áreas restritas.`} />
        </Styled.info2Div>
      </Styled.infoDiv>
      <Styled.TeamDiv>
        <Styled.Title>Nosso time</Styled.Title>
        <Styled.Text1>Somos um grupo dinâmico de indivíduos apaixonados pelo que fazemos e dedicados a oferecer os melhores resultados para nossos clientes.</Styled.Text1>
        <Styled.TeamCardDiv>
          <TeamCard img={image1} name={'João Ryan'} work={'develop'} timeAnimate={1} />
          <TeamCard img={image2} name={'Matheus'} work={'develop'} timeAnimate={1.5} />
          <TeamCard img={image3} name={'João Victor'} work={'develop'} timeAnimate={2} />
          <TeamCard img={image4} name={'Gustavo'} work={'develop'} timeAnimate={2.5} />
        </Styled.TeamCardDiv>
      </Styled.TeamDiv>
    </Styled.Container>
      <Styled.Baseboard>
        Logo
      </Styled.Baseboard>
    </>
  );
};
