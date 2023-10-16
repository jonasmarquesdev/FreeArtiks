import styled from "styled-components";
import Banner from "./Banner";
import { useUser } from "../../context/UserContext";

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
  background-color: var(--laranja);
  border-radius: 20px;
  height: 50px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
  margin-top: 15px;
`;

const SubTitulo = styled.p`
  padding: 12px;
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
    <DashboardContainer>
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
                      {console.log(userEncontrado.lendo)}
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
                  {console.log(userEncontrado.lendo)}
                </Card>
              ))}
            </CardContainer>
          </SecaoContainer>
        </HistoricoContainer>
      </Biblioteca>
      <Space />
    </DashboardContainer>
  );
};

export default Profile;
