import styled from "styled-components";

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

const FooterPersonalizado = () => {
  return (
    <Footer>
      <FooterText>© 2023 FreeArtiks. Todos os direitos reservados.</FooterText>
    </Footer>
  );
};

export default FooterPersonalizado;
