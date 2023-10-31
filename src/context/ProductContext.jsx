/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from "react";
import { image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18 } from "./assets";

const LivroContext = createContext();
const ArtigoContext = createContext();

// Livros
export function LivroProvider({ children }) {
  const livrosCadastrados = [];

  const [livros, setLivros] = useState(livrosCadastrados);
  const [ApiBaseUrl, setAPIurl] = useState("https://api-livros-v2.vercel.app/livros");

  return (
    <LivroContext.Provider value={{ livros, setLivros, ApiBaseUrl }}>
      {children}
    </LivroContext.Provider>
  );
}

// Artigos
export function ArtigoProvider({ children }) {
  const artigosCadastrados = [
    {
      id: 1,
      titulo: "Sistema de Banco de Dados",
      image: image1,
      autor: "Abraham Silberschatz, Henry F. Korth e S. Sudarshan",
      categoria: "Introdutório",
    },
    {
      id: 2,
      titulo: "Sistemas de Banco de Dados",
      image: image2,
      autor: "Ramez Elmasri",
      categoria: "Introdutório",
    },
    {
      id: 3,
      titulo: "Projeto de Banco de Dados: Volume 4",
      image: image3,
      autor: "Carlos Alberto Heuser",
      categoria: "Importante",
    },
    {
      id: 4,
      titulo: "Banco De Dados - Projetos E Implementação",
      image: image4,
      autor: "FELIPE NERY RODRIGUES MACHADO",
      categoria: "Importante",
    },
    {
      id: 5,
      titulo: "Fundamentos de bancos de dados: Modelagem, projeto e linguagem SQL",
      image: image5,
      autor: "Célio Cardoso Guimarães",
      categoria: "Recomendado",
    },
    {
      id: 6,
      titulo: "Projeto, Desenvolvimento de Aplicações e Administração de Banco de Dados",
      image: image6,
      autor: "Michael V. Mannino",
      categoria: "Recomendado",
    },
  ];

  const [artigos, setArtigos] = useState(artigosCadastrados);

  return (
    <ArtigoContext.Provider value={{ artigos, setArtigos }}>
      {children}
    </ArtigoContext.Provider>
  );
}

export function useLivro() {
  const context = useContext(LivroContext);
  if (!context) {
    throw new Error("useLivro deve ser usado dentro de um LivroProvider");
  }
  return context;
}

export function useArtigo() {
  const context = useContext(ArtigoContext);
  if (!context) {
    throw new Error("useArtigo deve ser usado dentro de um ArtigoProvider");
  }
  return context;
}