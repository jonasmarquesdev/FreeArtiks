/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Label, Option, Select } from "../CampoTexto";
import { useState } from "react";
import { Box, Skeleton } from "@mui/material";
import useDataLoading from "../../context/useDataLoading";
import { useLivro } from "../../context/ProductContext";

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

function Catalogo({ titulo }) {
  const [filtro, setFiltro] = useState("");
  const [ordenar, setOrdenar] = useState("");

  const { livros } = useLivro();

  const isLoading = useDataLoading(1500);

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
          <Label htmlFor="ocupacao">Ordenar por:</Label>
          <SelectComSombra
            value={ordenar}
            onChange={(e) => setOrdenar(e.target.value)}
          >
            <Option value="">Selecione a ordem</Option>
            <Option value="introdutorio">Introdutório</Option>
            <Option value="importante">Importante</Option>
            <Option value="recomendado">Recomendado</Option>
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
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          >
            <Option value="">Selecione o tipo de item</Option>
            <Option value="livro">Livro</Option>
            <Option value="artigo">Artigo</Option>
          </SelectComSombra>
        </Box>
      </FiltrosContainer>

      <Row>
        {isLoading
          ? livros.map((livro, index) => (
              <SkeletonBook key={index}>
                <SkeletonImage variant="rect" width={150} height={185} />
                <SkeletonTitle variant="text" />
                <SkeletonTitle variant="text" />
              </SkeletonBook>
            ))
          : livros.map((livro, index) => (
              <Book key={index}>
                <Categoria categoria={livro.categoria}>
                  <p>{livro.categoria}</p>
                </Categoria>
                <BookImage src={livro.image} alt="Livro 1" />
                <AutorItem>por {livro.autor}</AutorItem>
                <TituloItem>{livro.titulo}</TituloItem>
              </Book>
            ))}
      </Row>
    </BookListContainer>
  );
}

export default Catalogo;
