/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Button, Skeleton } from "@mui/material";
import useDataLoading from "../../context/useDataLoading";

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
  max-width: 200px;
  height: auto;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px 20px;
  gap: 10px;
`;

const Titulo = styled.h2`
  color: var(--preto);
`;

const TituloItem = styled.p`
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

function BookList({ titulo, lista }) {
  const isLoading = useDataLoading(2000);

  return (
    <BookListContainer>
      <TituloContainer>
        <Titulo>{titulo}</Titulo>
        <Button sx={{ color: "var(--cinza-escuro)" }}>ver mais</Button>
      </TituloContainer>
      <Row>
        {isLoading
          ? lista.map((livro) => (
              <SkeletonBook key={livro.id}>
                <SkeletonImage variant="rect" width={150} height={185} />
                <SkeletonTitle variant="text" />
              </SkeletonBook>
            ))
          : lista.map((livro) => (
              <Book key={livro.id}>
                <BookImage src={livro.image} alt="Livro 1" />
                <TituloItem>{livro.titulo}</TituloItem>
              </Book>
            ))}
      </Row>
    </BookListContainer>
  );
}

export default BookList;
