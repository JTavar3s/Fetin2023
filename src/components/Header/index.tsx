import React from 'react';
import { Link } from 'react-router-dom';

import * as Styled from './styeled';

export function Lateral(): JSX.Element {
  return (
    <Styled.Nav>
      <Styled.Content>
        <Styled.Title>CodeBusters</Styled.Title>
        <Styled.Pages>

          <Styled.page>
            <Link to='/' >
              Home
            </Link>
          </Styled.page>

          <Styled.page>
            <Link to="/configuracoes">
              Sobre mim
            </Link>
          </Styled.page>

          <Styled.page>
            <Link to="/Cookbook">
              Estudos
            </Link>
          </Styled.page>

          <Styled.page>
            <Link to="/Equipamentos" >
              Projetos
            </Link>
          </Styled.page>

          <Styled.page>
            <Link to="/Logout" >
              <div>
                Contato
              </div>

            </Link>
          </Styled.page>

        </Styled.Pages>
      </Styled.Content>
    </Styled.Nav>
  );
}
