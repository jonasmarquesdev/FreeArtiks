import { Outlet } from "react-router-dom";
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #fffbf3;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
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

function PaginaLoginForm() {
  return (
    <LayoutContainer>
      <Outlet />
      <Footer>
        <FooterText>© 2023 FreeArtiks. Todos os direitos reservados.</FooterText>
      </Footer>
    </LayoutContainer>
  );
}

export default PaginaLoginForm;