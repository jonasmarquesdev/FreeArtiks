import styled from "styled-components";
import { Button } from "../../../components/Botao";

// assets
import blob from "../../../assets/blob.svg";
import ilustracao from "../../../assets/ilustracaoBanner.svg";
import { useUser } from "../../../context/UserContext";
import { useEffect, useState } from "react";

const BannerContainer = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px 0px 20px 0px;
  border-radius: 30px;
`;

const Words = styled.div`
  position: relative;
  bottom: -30%;
  left: -15%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 20px;
  position: relative;
  color: var(--preto);
  font-weight: 700;
`;

const TitleMargin = styled(Title)`
  margin-left: 1em;
  margin-top: 0.5em;
`;

const TitleComNome = styled(TitleMargin)`
  position: absolute;
  margin-left: -2em;
  margin-top: -2em;
  color: var(--cor-de-fundo);
`;

const Blob = styled.img`
  width: 30%;
  position: relative;
  left: 0%;
  bottom: 15%;
`;

const ButtonBanner = styled(Button)`
  margin-top: 5em;
  align-self: center;
`;

const Ilustracao = styled.img``;

const Banner = () => {
  const { userEncontrado } = useUser();
  const [userNomeSplice, setUserNomeSplice] = useState("");
  
  useEffect(() => {
    if (userEncontrado && userEncontrado.nome) {
      setUserNomeSplice(userEncontrado.nome.split(" ")[0]);
    } else {
      setUserNomeSplice("Visitante")
    }
  }, [userEncontrado]);

  return (
    <BannerContainer>
      <Blob src={blob} />
      <Words>
        <TitleComNome>
          Olá,{" "}
          {userNomeSplice}!
        </TitleComNome>
        <Title>Com o FreeArtiks você pode!</Title>
        <TitleMargin>
          Explore o Conhecimento: Artigos e Livros à Distância de um Clique!
        </TitleMargin>
        <ButtonBanner>Explorar</ButtonBanner>
      </Words>
      <Ilustracao src={ilustracao} />
    </BannerContainer>
  );
};

export default Banner;
