/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import { Button } from "../../../components/Botao";

// assets
import ilustracao from "../../../assets/profile.svg";
import { useUser } from "../../../context/UserContext";
import { useEffect, useState } from "react";
import { Avatar, Box } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const BannerContainer = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px 0px 20px 0px;
  border-radius: 30px;
`;

const Words = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 4em;
  height: 100%;
`;

const Title = styled.h2`
  font-size: 20px;
  color: var(--preto);
  font-weight: 700;
  padding: 2px;
`;

const Nome = styled(Title)`
  text-align: center;
`;

const Email = styled(Title)`
  color: var(--cinza);
  font-size: 16px;
  text-align: center;
`;

const Instituicao = styled(Title)`
  font-size: 16px;
  text-align: center;
`;

const ButtonBanner = styled(Button)`
  margin-top: 2em;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const TituloSecao = styled.h2`
  color: var(--laranja);
  font-size: 28px;
`;

const Paragrafo = styled.p`
  color: var(--preto);
`;

const Ocupacao = styled.p`
  color: var(--cinza);
  font-weight: 400;
`;

const Ilustracao = styled.img`
  width: 30%;
  align-self: flex-end;
`;

const Profile = () => {
  const { userEncontrado, Logout } = useUser();
  const navigate = useNavigate();

  // Credentials
  const [foto, setFoto] = useState(null);
  const [ocupacao, setOcupacao] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [nomeInstituicao, setNomeInstituicao] = useState("");
  const [sobre, setSobre] = useState("");

  useEffect(() => {
    if (userEncontrado && userEncontrado.nome) {
      setFoto(userEncontrado.image);
      setOcupacao(userEncontrado.ocupacao);
      setNome(userEncontrado.nome);
      setEmail(userEncontrado.email);
      setNomeInstituicao(userEncontrado.nomeinstituicao);
      setSobre(userEncontrado.sobre);
    } else {
      navigate("/");
    }
  }, [userEncontrado]);

  const EncerrarSesao = () => {
    Logout();
    navigate("/");
  };

  return (
    <BannerContainer>
      <Words>
        <Box
          sx={{
            height: "220px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "",
          }}
        >
          <Box
            sx={{
              zIndex: "2",
              position: "absolute",
              top: "340px",
              backgroundColor: "var(--laranja)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
            }}
          >
            <SettingsIcon
              sx={{
                color: "var(--branco-default)",
              }}
            />
          </Box>
          <Avatar
            src={foto}
            sx={{
              width: "200px",
              height: "200px",
              marginBottom: "16px",
            }}
          />
        </Box>
        <Nome>{nome}</Nome>
        <Email>{email}</Email>
        <Instituicao>{nomeInstituicao}</Instituicao>
        <ButtonBanner onClick={EncerrarSesao}>
          <LogoutIcon /> Logout
        </ButtonBanner>
      </Words>
      <Box
        sx={{
          padding: "30px",
          position: "relative",
          left: "40px",
          top: "-40px",
          width: "650px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <TituloSecao>Sobre</TituloSecao>
        <Ocupacao>{ocupacao}</Ocupacao>
        <Paragrafo>{sobre}</Paragrafo>
      </Box>
      <Ilustracao src={ilustracao} />
    </BannerContainer>
  );
};

export default Profile;
