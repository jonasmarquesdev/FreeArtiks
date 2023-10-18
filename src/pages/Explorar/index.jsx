import styled from "styled-components";
import { useLivro } from "../../context/ProductContext";
import Catalogo from "../../components/Catalogo";

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
  const { livros } = useLivro();
  return (
    <DashboardContainer>
      <Space />
      <Catalogo titulo="Catalogo" lista={livros} />
      <Space />
    </DashboardContainer>
  );
};

export default Explorar;
