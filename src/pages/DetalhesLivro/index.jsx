import styled from "styled-components";
import BookList from "../../components/Carrosel";
import { Button } from "../../components/Botao";
import { useParams } from "react-router-dom";
import { useLivro } from "../../context/ProductContext";
import { useEffect, useState } from "react";
import axios from "axios";
import StarIcon from "@mui/icons-material/Star";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { useUser } from "../../context/UserContext";

const Container = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0px 20px 0px;
  padding: 40px;
`;

const DetalhesContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const LivroImg = styled.img`
  height: auto;
  width: 300px;
`;

const Space = styled.div`
  margin-top: 5em;
`;

const ColunaCentralizada = styled.div`
  width: 100%;
  margin-left: 50px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: var(--preto);

  p {
    font-size: 14px;
  }
`;

const AcoesContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
`;

const ButtonFlex = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
`;

const ButtonFlexSecund = styled(ButtonFlex)`
  gap: 5px;
  width: auto;
  padding-right: 15px;
`;

const DetalhesLivro = () => {
  const { ApiBaseUrl } = useLivro();
  const { userEncontrado, setUserEncontrado } = useUser();

  const { id } = useParams(); // Obtém o parâmetro id da URL
  const livroId = parseInt(id, 10); // Certifique-se de que seja um número inteiro

  const [livro, setLivro] = useState(null);

  useEffect(() => {
    // Realize a solicitação à API aqui
    axios
      .get(`${ApiBaseUrl}/${livroId}`)
      .then((response) => {
        // Atualize o estado com os dados da API
        setLivro(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar livros da API", error);
      });
  }, [ApiBaseUrl, livroId]);

  useEffect(() => {
    const storedUserEncontrado = localStorage.getItem("userEncontrado");
    setUserEncontrado(JSON.parse(storedUserEncontrado));
  }, [])

  return (
    <>
      <Container>
        <DetalhesContainer>
          {livro ? (
            <>
              <div>
                <LivroImg src={livro.image} />
              </div>
              <ColunaCentralizada>
                <h2>{livro.titulo}</h2>
                <h4>por {livro.autor}</h4>
                <h4>Categoria: {livro.categoria}</h4>
                <p>{livro.descricao}</p>
                <AcoesContainer>
                  <ButtonFlex>
                    <AutoStoriesIcon />
                    <div>Ler</div>
                  </ButtonFlex>

                  {userEncontrado.ocupacao === "Professor" ? (
                    <>
                      <ButtonFlexSecund>
                        <StarIcon />
                        <div>Recomendar</div>
                      </ButtonFlexSecund>
                    </>
                  ) : (
                    ""
                  )}
                </AcoesContainer>
              </ColunaCentralizada>
            </>
          ) : (
            <div>Carregando...</div>
          )}
        </DetalhesContainer>
        <Space />
        <BookList
          titulo="Usuários que visualizaram este item também visualizaram"
          pequeno
          skip={4}
          cut={10}
        />
      </Container>
      <Space />
    </>
  );
};

export default DetalhesLivro;
