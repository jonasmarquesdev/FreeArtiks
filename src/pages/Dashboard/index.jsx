import styled from "styled-components";
import Banner from "./Banner";
import BookList from "../../components/Carrosel";
import { useArtigo, useLivro } from "../../context/ProductContext";
import { motion } from "framer-motion";

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
  const { livros } = useLivro();
  const { artigos } = useArtigo();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <DashboardContainer>
        <Banner />
        <BookList titulo="Livros mais acessados" lista={livros} />
        <BookList titulo="Artigos mais acessados" lista={artigos} />
        <Space />
      </DashboardContainer>
    </motion.div>
  );
};

export default Dashboard;
