/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Label, Option, Select } from "../CampoTexto";
import { useEffect, useState } from "react";
import { Box, Skeleton } from "@mui/material";
import useDataLoading from "../../context/useDataLoading";
import { useLivro } from "../../context/ProductContext";
import axios from "axios";
import { Link } from "react-router-dom";

const BookListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10em;
`;

const Book = styled.div`
  margin-right: 20px;
  text-align: center;
  cursor: pointer;
  padding: 12px 20px;
`;

const BookImage = styled.img`
  max-width: 150px;
  height: 185px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* Define 6 colunas por linha */
  gap: 20px; /* Espaçamento entre os livros */
  padding: 20px 0; /* Espaçamento vertical */
`;

const Titulo = styled.h2`
  color: var(--preto);
`;

const TituloItem = styled.p`
  max-width: 160px;
  color: var(--preto);

  ${Book}:hover & {
    color: var(--laranja);
  }
`;

const AutorItem = styled.p`
  font-size: 12px;
  padding: 4px;
  max-width: 160px;
  color: var(--preto);
`;

const TituloContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const FiltrosContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 40px 20px 0px;
  gap: 60px;
`;

const SelectComSombra = styled(Select)`
  box-shadow: 0 2px 4px var(--sombra-form);
  width: 250px;
`;

const categoriaProps = (props) => {
  if (props.categoria === "Introdutório") {
    return "var(--verde-grama-introdutorio)";
  } else if (props.categoria === "Importante") {
    return "var(--azul-importante)";
  } else {
    return "var(--red-recomendado)";
  }
};

const Categoria = styled.div`
  width: 100%;
  height: 30px;
  background-color: ${(props) => categoriaProps(props)};
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: var(--branco-default);
  }
`;

const SkeletonBook = styled.div`
  margin-right: 20px;
  text-align: center;
  cursor: pointer;
  padding: 12px 20px;
`;

const SkeletonImage = styled(Skeleton)`
  width: 100px;
  height: auto;
`;

const SkeletonTitle = styled(Skeleton)`
  max-width: 160px;
`;

const LinkEstilizado = styled(Link)`
  text-decoration: none;
`;

function Catalogo({ titulo }) {
  // const [filtro, setFiltro] = useState("");
  const [ordenarTag, setOrdenarTag] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("");

  const [livrosOrdenadosCategoria, setLivrosOrdenadosCategoria] = useState([]);

  const { livros, setLivros, ApiBaseUrl } = useLivro();

  const isLoading = useDataLoading(1500);

  useEffect(() => {
    // Realize a solicitação à API aqui
    axios
      .get(`${ApiBaseUrl}`)
      .then((response) => {
        // Atualize o estado com os dados da API
        setLivros(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar livros da API", error);
      });
  }, []);

  useEffect(() => {
    if (ordenarTag) {
      const livrosFiltrados = livros.filter((livro) => livro.tag === ordenarTag);
      setLivrosOrdenadosCategoria(livrosFiltrados);
    } else {
      setLivrosOrdenadosCategoria(livros);
    }
  }, [ordenarTag, livros]);

  return (
    <BookListContainer>
      <TituloContainer>
        <Titulo>{titulo}</Titulo>
      </TituloContainer>

      <FiltrosContainer>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Label htmlFor="ocupacao">Filtrar por:</Label>
          <SelectComSombra
            value={ordenarTag}
            onChange={(e) => setOrdenarTag(e.target.value)}
          >
            <Option value="">Selecione a categoria</Option>
            <Option value="1">Introdutório</Option>
            <Option value="2">Importante</Option>
            <Option value="3">Recomendado</Option>
          </SelectComSombra>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Label htmlFor="ocupacao">Filtrar por:</Label>
          <SelectComSombra
            value={filtroTipo}
            onChange={(e) => setFiltroTipo(e.target.value)}
          >
            <Option value="">Selecione o tipo</Option>
            <Option value="livro">Livro</Option>
            <Option value="artigo">Artigo</Option>
          </SelectComSombra>
        </Box>
      </FiltrosContainer>

      <Row>
        {isLoading
          ? livrosOrdenadosCategoria.map((livro, index) => (
              <SkeletonBook key={index}>
                <SkeletonImage variant="rect" width={150} height={185} />
                <SkeletonTitle variant="text" />
                <SkeletonTitle variant="text" />
              </SkeletonBook>
            ))
          : livrosOrdenadosCategoria.map((livro, index) => (
              <LinkEstilizado to={`/livros/${livro.id}`} key={index}>
                <Book>
                  <Categoria categoria={livro.categoria}>
                    <p>{livro.categoria}</p>
                  </Categoria>
                  <BookImage src={livro.image} alt="Livro 1" />
                  <AutorItem>por {livro.autor}</AutorItem>
                  <TituloItem>{livro.titulo}</TituloItem>
                </Book>
              </LinkEstilizado>
            ))}
      </Row>
    </BookListContainer>
  );
}

export default Catalogo;
