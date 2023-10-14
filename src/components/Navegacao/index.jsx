import styled from "styled-components";
import { Button } from "../Botao";
import { useNavigate } from "react-router-dom";
import SearchInputComponent from "../SearchInputComponent";

// assets
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.png";
import { useUser } from "../../context/UserContext";
import DropdownMenu from "../DropdownMenu";

const NavegacaoContainer = styled.nav`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
  width: 100%;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const MenuGroup = styled(ButtonGroup)`
  gap: 20px;
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
  width: 60%;
`;

const Navegacao = () => {
  const navigate = useNavigate();
  const { user, isLoggedIn } = useUser();

  return (
    <>
      <NavegacaoContainer>
        <MenuGroup>
          <MenuIcon sx={{ fontSize: 50, color: "var(--preto)" }} />
          <Logo src={logo} />
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
              {/* <AvatarMenu 
                src={user.image}
                nome={user.nome}
              /> */}
              <DropdownMenu
                nome={user.nome}
                src={user.image}
              />
            </>
          )}
        </ButtonGroup>
      </NavegacaoContainer>
    </>
  );
};

export default Navegacao;
