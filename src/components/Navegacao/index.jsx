import styled from "styled-components";
import { Button } from "../Botao";
import { useNavigate } from "react-router-dom";
import SearchInputComponent from "../SearchInputComponent";

// assets
import logo from "../../assets/brand-raw.png";
import { useUser } from "../../context/UserContext";
import DropdownMenu from "../DropdownMenu";
import MenuHamburguer from "../MenuHamburguer";

const NavegacaoContainer = styled.nav`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 40%;
  width: 100%;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const MenuGroup = styled(ButtonGroup)`
  gap: 20px;
  max-width: 400px;
`;

const ButtonCadastrar = styled(Button)`
  background-color: transparent;
  color: var(--preto);
  box-shadow: none;
`;

const ButtonLogin = styled(Button)`
  border-radius: 0px;
  box-shadow: none;
`;

const Logo = styled.img`
  width: 55%;
  cursor: pointer;
`;

const Navegacao = () => {
  const navigate = useNavigate();
  const { userEncontrado, isLoggedIn } = useUser();

  return (
    <>
      <NavegacaoContainer>
        <MenuGroup>
          <MenuHamburguer />
          <Logo src={logo} onClick={() => navigate("/")} />
        </MenuGroup>
        <SearchInputComponent />
        <ButtonGroup>
          {isLoggedIn !== true ? (
            <>
              <ButtonCadastrar onClick={() => navigate("/auth/register")}>
                Cadastrar
              </ButtonCadastrar>
              <ButtonLogin onClick={() => navigate("/auth/login")}>
                Login
              </ButtonLogin>
            </>
          ) : (
            <>
              <DropdownMenu
                nome={userEncontrado.nome}
                src={userEncontrado.image}
              />
            </>
          )}
        </ButtonGroup>
      </NavegacaoContainer>
    </>
  );
};

export default Navegacao;
