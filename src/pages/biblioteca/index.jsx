import styled from "styled-components";
import { useUser } from "../../context/UserContext";
import { useEffect } from "react";
import { motion } from "framer-motion";

import ClearIcon from "@mui/icons-material/Clear";
import { Button } from "../../components/Botao";
import { Box } from "@mui/material";

const Container = styled.div`
  width: 1200px;
  /* background-color: #aa5050; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20em;
`;

const Space = styled.div`
  margin-top: 3em;
  margin-bottom: 3.5em;
`;

const BibliotecaContainer = styled.div`
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
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Card = styled.div`
  background-color: ${(props) =>
    props.lido ? "var(--verde-lido)" : "var(--branco-default)"};
  box-shadow: 0 0 10px var(--sombra-form);
  border-radius: 20px;
  height: auto;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
  margin-top: 15px;
  padding-bottom: 12px;
`;

const SubTitulo = styled.p`
  color: ${(props) => (props.lido ? "var(--branco-terceiro)" : "var(--preto)")};
  padding: 12px 12px 12px 20px;
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

const Biblioteca = () => {
  const { userEncontrado } = useUser();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "F5") {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Space />
        <BibliotecaContainer>
          <Titulo>Minha biblioteca</Titulo>
          <HistoricoContainer>
            {userEncontrado.ocupacao === "Professor" ? (
              <>
                <SecaoContainer>
                  <TituloSecao>Recomendado</TituloSecao>
                  <CardContainer>
                    {userEncontrado.recomendado.map((livro, index) => (
                      <Card key={index}>
                        <Box
                          sx={{
                            display: "flex",
                          }}
                        >
                          <SubTitulo>{livro.titulo}</SubTitulo>
                          <ClearIcon
                            sx={{
                              backgroundColor: "red",
                              color: "white",
                              borderRadius: "12px",
                              display: "flex",
                              alignSelf: "flex-start",
                              justifyContent: "center",
                            }}
                          />
                        </Box>
                        <Button>Acessar</Button>
                      </Card>
                    ))}
                  </CardContainer>
                </SecaoContainer>
              </>
            ) : (
              ""
            )}

            {userEncontrado.lendo ? (
              <SecaoContainer>
                <TituloSecao>Lendo</TituloSecao>
                <CardContainer>
                  {userEncontrado.lendo.map((livro, index) => (
                    <Card key={index}>
                      <Box
                        sx={{
                          display: "flex",
                        }}
                      >
                        <SubTitulo>{livro.titulo}</SubTitulo>
                        <ClearIcon
                          sx={{
                            backgroundColor: "red",
                            color: "white",
                            borderRadius: "12px",
                            display: "flex",
                            alignSelf: "flex-start",
                            justifyContent: "center",
                          }}
                        />
                      </Box>
                      <Button>Acessar</Button>
                    </Card>
                  ))}
                </CardContainer>
              </SecaoContainer>
            ) : (
              ""
            )}

            {userEncontrado.lido ? (
              <>
                <SecaoContainer>
                  <TituloSecao>Lido</TituloSecao>
                  <CardContainer>
                    {userEncontrado.lido.map((livro, index) => (
                      <Card lido key={index}>
                        <Box
                          sx={{
                            display: "flex",
                          }}
                        >
                          <SubTitulo lido>{livro.titulo}</SubTitulo>
                        </Box>
                        <Button>Acessar</Button>
                      </Card>
                    ))}
                  </CardContainer>
                </SecaoContainer>
              </>
            ) : (
              ""
            )}
          </HistoricoContainer>
          <Space />
        </BibliotecaContainer>
        <Space />
      </Container>
      <Space />
    </motion.div>
  );
};

export default Biblioteca;
