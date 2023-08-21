
import { useNavigate } from 'react-router';
import * as Styled from './styled';
import { RiLogoutBoxRLine } from 'react-icons/ri'

const Header = () => {
    const navigate = useNavigate();

    return (
        <Styled.Hader>

            <Styled.LogoutButton onClick={() => navigate(`/`)}>
                Sair
                <RiLogoutBoxRLine />
            </Styled.LogoutButton>
        </Styled.Hader>
    );
};

export default Header;
