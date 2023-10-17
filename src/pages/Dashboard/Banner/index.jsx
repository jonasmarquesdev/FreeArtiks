/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import { Button } from "../../../components/Botao";

// assets
import blob from "../../../assets/blob.svg";
import ilustracao from "../../../assets/ilustracaoBanner.svg";
import mascote from "../../../assets/mascote.png";
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
  color: var(--background-default);
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

const MascoteContainer = styled.div`
  position: fixed;
`;

const Mascote = styled.img`
  z-index: 3;
  position: fixed;
  width: 10%;
  left: 0%;
  transition: all 0.2s;
  bottom: -6%;

  &:hover {
    bottom: -2%;
  }
`;

const Balloon = styled.div`
  z-index: 2;
  position: fixed;
  display: ${(props) => (props.showBalloonProp ? "block" : "none")};
  left: 7%;
  bottom: 15%;
  width: 200px;
  height: 115px;
  background-color: var(--laranja);
  color: var(--branco-default);
  padding: 1em;
  text-align: center;
  border-radius: 20px 20px 20px 0px;
`;

const Ilustracao = styled.img``;

const Banner = () => {
  const { userEncontrado } = useUser();
  const [userNomeSplice, setUserNomeSplice] = useState("");
  const [showBalloonProp, setShowBalloonProp] = useState(false);
  
  useEffect(() => {
    if (userEncontrado && userEncontrado.nome) {
      setUserNomeSplice(userEncontrado.nome.split(" ")[0]);
    } else {
      setUserNomeSplice("Visitante")
    }
  }, [userEncontrado]);

  const ShowBalloon = () => {
    setShowBalloonProp(!showBalloonProp)
  }

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
        <MascoteContainer>
          <Mascote src={mascote} onMouseEnter={ShowBalloon} onMouseLeave={ShowBalloon} />
          <Balloon showBalloonProp={showBalloonProp}>"A boa educação é moeda de ouro. Em toda a parte tem valor." — Pe. António Vieira</Balloon>
        </MascoteContainer>
        <ButtonBanner>Explorar</ButtonBanner>
      </Words>
      <Ilustracao src={ilustracao} />
    </BannerContainer>
  );
};

export default Banner;
