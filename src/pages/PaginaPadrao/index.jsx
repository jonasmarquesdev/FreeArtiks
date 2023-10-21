import { Outlet } from "react-router-dom";
import Navegacao from "../../components/Navegacao";
import { ArtigoProvider, LivroProvider } from "../../context/ProductContext";
import LayoutContainer from "../../components/LayoutContainer";
import FooterPersonalizado from "../../components/Footer";

function PaginaPadrao() {
  return (
    <LayoutContainer>
      <LivroProvider>
        <ArtigoProvider>
          <Navegacao />
          <Outlet />
          <FooterPersonalizado />
        </ArtigoProvider>
      </LivroProvider>
    </LayoutContainer>
  );
}

export default PaginaPadrao;
