import styled from "styled-components";
import Banner from "./Banner";
import BookList from "../../components/Carrosel";
import { motion } from "framer-motion";
import useDataLoading from "../../context/useDataLoading";
import { ArtigoProvider, LivroProvider } from "../../context/ProductContext";
import FooterPersonalizado from "../../components/Footer";
import Loading from "../LoadingPage";
import LayoutContainer from "../../components/LayoutContainer";
import Navegacao from "../../components/Navegacao";

const DashboardContainer = styled.div`
  width: 1200px;
  /* background-color: #aa5050; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Space = styled.div`
  margin-top: 3em;
`;

const Dashboard = () => {
  const isLoading = useDataLoading(3000);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <LivroProvider>
          <ArtigoProvider>
            <Navegacao />
            <LayoutContainer>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <DashboardContainer>
                  <Banner />
                  <BookList titulo="Livros mais acessados" />
                  <BookList titulo="Artigos mais acessados" />
                  <Space />
                </DashboardContainer>
              </motion.div>
            </LayoutContainer>
            <FooterPersonalizado />
          </ArtigoProvider>
        </LivroProvider>
      )}
    </>
  );
};

export default Dashboard;
