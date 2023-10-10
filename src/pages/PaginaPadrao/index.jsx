import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  height: 75px;
  background-color: #FF8927;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterText = styled.p`
  color: #fff;
`;

function PaginaPadrao() {
  return (
    <>
      <Outlet />
      <Footer>
        <FooterText>© 2023 FreeArtiks. Todos os direitos reservados.</FooterText>
      </Footer>
    </>
  );
}

export default PaginaPadrao;