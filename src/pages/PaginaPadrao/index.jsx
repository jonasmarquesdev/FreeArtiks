import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navegacao from "../../components/Navegacao";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: var(--cor-de-fundo);
`;

const Footer = styled.footer`
  width: 100%;
  height: 75px;
  background-color: var(--laranja);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterText = styled.p`
  color: var(--branco-default);
`;

function PaginaPadrao() {
  return (
    <LayoutContainer>
      <Navegacao />
      <Outlet />
      <Footer>
        <FooterText>© 2023 FreeArtiks. Todos os direitos reservados.</FooterText>
      </Footer>
    </LayoutContainer>
  );
}

export default PaginaPadrao;