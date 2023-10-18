import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";

const MenuIconStyled = styled(MenuIcon)`
  font-size: 50px;
  color: ${(props) =>
    props.isOpen ? "var(--branco-default)" : "var(--preto)"};
  cursor: pointer;

  &:hover {
    color: var(--branco-default);
  }
`;

const HamburguerMenuContainer = styled.div`
  position: relative;
  padding: 5px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.isOpen ? "var(--laranja)" : "transparent"};
  display: flex;

  &:hover {
    background-color: var(--laranja);
  }
`;

const MenuList = styled.ul`
  z-index: 1;
  list-style: none;
  padding: 0;
  position: absolute;
  top: 50px;
  right: -10;
  background-color: white;
  box-shadow: 0 2px 4px var(--sombra-form);
  border-radius: 4px;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  width: 216px;
  cursor: pointer;
`;

const MenuItem = styled.li`
  padding: 10px 20px;
  display: flex;
  gap: 10px;
  align-items: center;

  &:hover {
    color: var(--branco-default);
    background-color: var(--laranja-claro);
  }
`;

function MenuHamburguer() {
  const [menuAberto, setMenuAberto] = useState(false);
  const { isLoggedIn } = useUser();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const navigateToProfile = () => {
    setMenuAberto(!menuAberto);
    navigate("/dashboard/user/biblioteca");
  };

  const navigateToHome = () => {
    setMenuAberto(!menuAberto);
    navigate("/");
  };

  const navigateToExplorar = () => {
    navigate("/explorar");
  };

  return (
    <HamburguerMenuContainer isOpen={menuAberto}>
      <MenuIconStyled isOpen={menuAberto} onClick={toggleMenu} />
      <MenuList isOpen={menuAberto} onMouseLeave={toggleMenu}>
        <MenuItem onClick={navigateToHome}>
          <HomeOutlinedIcon />
          Inicio
        </MenuItem>
        {isLoggedIn ? (
          <>
            <MenuItem onClick={navigateToProfile}>
              <LibraryBooksOutlinedIcon />
              Minha biblioteca
            </MenuItem>
          </>
        ) : (
          ""
        )}
        <MenuItem onClick={navigateToExplorar}>
          <BookmarksOutlinedIcon />
          Categorias
        </MenuItem>
      </MenuList>
    </HamburguerMenuContainer>
  );
}

export default MenuHamburguer;
