import styled from "styled-components";
import Banner from "./Banner";
import { useUser } from "../../context/UserContext";
import { motion } from "framer-motion";

const ProfileContainer = styled.div`
  width: 1200px;
  /* background-color: #aa5050; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Space = styled.div`
  margin-top: 3em;
`;

const Biblioteca = styled.div`
  width: 100%;
  height: 600px;
  /* background-color: green; */
`;

const Titulo = styled.h1`
  color: var(--laranja);
  padding-left: 20px;
`;

const HistoricoContainer = styled.div`
  margin-top: 20px;
  margin-left: 50px;
`;

const Card = styled.div`
  background-color: var(--branco-default);
  box-shadow: 0 0 10px var(--sombra-form);
  border-radius: 20px;
  height: auto;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
  margin-top: 15px;
`;

const SubTitulo = styled.p`
  padding: 12px 20px;
`;

const TituloSecao = styled.h3`
  color: var(--preto);
`;

const CardContainer = styled.div`
  display: flex;
`;

const SecaoContainer = styled.div`
  margin-top: 50px;
`;

const Profile = () => {
  const { userEncontrado } = useUser();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ProfileContainer>
        <Banner />
        <Space />
        <Biblioteca>
          <Titulo>Histórico</Titulo>
          <HistoricoContainer>
            {userEncontrado.ocupacao === "Professor" ? (
              <>
                <SecaoContainer>
                  <TituloSecao>Recomendado</TituloSecao>
                  <CardContainer>
                    {userEncontrado.recomendado.map((livro, index) => (
                      <Card key={index}>
                        <SubTitulo>{livro.titulo}</SubTitulo>
                      </Card>
                    ))}
                  </CardContainer>
                </SecaoContainer>
              </>
            ) : (
              ""
            )}
            <SecaoContainer>
              <TituloSecao>Lendo</TituloSecao>
              <CardContainer>
                {userEncontrado.lendo.map((livro, index) => (
                  <Card key={index}>
                    <SubTitulo>{livro.titulo}</SubTitulo>
                  </Card>
                ))}
              </CardContainer>
            </SecaoContainer>
          </HistoricoContainer>
        </Biblioteca>
        <Space />
      </ProfileContainer>
    </motion.div>
  );
};

export default Profile;
