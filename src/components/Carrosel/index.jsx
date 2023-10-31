/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Button, Skeleton } from "@mui/material";
import useDataLoading from "../../context/useDataLoading";
import { useLivro } from "../../context/ProductContext";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const BookListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1120px;
`;

const Book = styled.div`
  text-align: center;
  cursor: pointer;
`;

const BookImage = styled.img`
  max-width: 150px;
  height: 185px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px 20px;
  gap: 10px;
`;

const Titulo = styled.h2`
  color: var(--preto);
  font-weight: 600;
  font-size: ${(props) => (
    props.pequeno ? "1.1em" :"1.5em"
  )};
`;

const TituloItem = styled.p`
  max-width: 160px;
  color: var(--preto);

  ${Book}:hover & {
    color: var(--laranja);
  }
`;

const TituloContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const SkeletonBook = styled.div`
  margin-right: 20px;
  text-align: center;
  cursor: pointer;
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

function BookList({ titulo, pequeno, skip = 0, cut = 6 }) {
  const isLoading = useDataLoading(1500);
  const { livros, setLivros, ApiBaseUrl } = useLivro();

  useEffect(() => {
    // Realize a solicitação à API aqui
    axios.get(`${ApiBaseUrl}`)
      .then(response => {
        // Atualize o estado com os dados da API
        setLivros(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar livros da API', error);
      });
  },[])

  return (
    <BookListContainer>
      <TituloContainer>
        <Titulo pequeno={pequeno}>{titulo}</Titulo>
        <Button sx={{ color: "var(--cinza-escuro)" }}>ver mais</Button>
      </TituloContainer>
      <Row>
        {isLoading
          ? livros.slice(0, 6).map((livro, index) => (
              <SkeletonBook key={index}>
                <SkeletonImage variant="rect" width={150} height={185} />
                <SkeletonTitle variant="text" />
              </SkeletonBook>
            ))
          : livros.slice(skip, cut).map((livro, index) => (
              <LinkEstilizado to={`/livros/${livro.id}`} key={index}>
                <Book>
                  <BookImage src={livro.image} alt={livro.titulo} />
                  <TituloItem>{livro.titulo}</TituloItem>
                </Book>
              </LinkEstilizado>
            ))}
      </Row>
    </BookListContainer>
  );
}

export default BookList;
