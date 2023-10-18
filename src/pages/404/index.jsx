import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ilustracaoNotFound from "../../assets/notfound404.gif";
import { Button } from "../../components/Botao";
import { Box } from "@mui/system";
import { motion } from "framer-motion";

const NotFoundPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--background-default);
`;

const Code = styled.h1`
  text-shadow: 2px 2px 4px var(--laranja);
  font-size: 5em;
`;

const Ilustracao = styled.img``;

const Botao = styled(Button)`
  margin-top: 20px;
`;

const NotFound404 = () => {
  const navigate = useNavigate();

  const backToDashboard = () => {
    navigate("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NotFoundPage>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          <Ilustracao src={ilustracaoNotFound} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Code>404</Code>
            <h1>PAGE NOT FOUND</h1>
            <Botao onClick={backToDashboard}>Voltar</Botao>
          </Box>
        </Box>
      </NotFoundPage>
    </motion.div>
  );
};

export default NotFound404;
