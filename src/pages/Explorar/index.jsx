import styled from "styled-components";
import Catalogo from "../../components/Catalogo";
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

const Explorar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <DashboardContainer>
        <Space />
        <Catalogo titulo="Catálogo" />
        <Space />
      </DashboardContainer>
    </motion.div>
  );
};

export default Explorar;
