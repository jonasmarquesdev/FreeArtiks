/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from "react";
import { image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12 } from "./assets";

const LivroContext = createContext();
const ArtigoContext = createContext();

// Livros
export function LivroProvider({ children }) {
  const livrosCadastrados = [
    {
      titulo: "Sistema de Banco de Dados",
      image: image1,
      autor: "Abraham Silberschatz, Henry F. Korth e S. Sudarshan",
      categoria: "Introdutório",
    },
    {
      titulo: "Sistemas de Banco de Dados",
      image: image2,
      autor: "Ramez Elmasri",
      categoria: "Introdutório",
    },
    {
      titulo: "Introdução à Inteligência Artificial",
      image: image8,
      autor: "Tom Taulli",
      categoria: "Introdutório",
    },
    {
      titulo: "Smashing HTML5",
      image: image12,
      autor: "Bill Sanders",
      categoria: "Introdutório",
    },
    {
      titulo: "Projeto de Banco de Dados: Volume 4",
      image: image3,
      autor: "Carlos Alberto Heuser",
      categoria: "Importante",
    },
    {
      titulo: "Banco De Dados - Projetos E Implementação",
      image: image4,
      autor: "FELIPE NERY RODRIGUES MACHADO",
      categoria: "Importante",
    },
    {
      titulo: "Comunicação de Dados e Redes de Computadores",
      image: image7,
      autor: "Behrouz A. Forouzan",
      categoria: "Importante",
    },
    {
      titulo: "Redes de Computadores",
      image: image9,
      autor: "Tanenbaum e Wetherall",
      categoria: "Importante",
    },
    {
      titulo: "Algoritmos teoria e prática",
      image: image10,
      autor: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
      categoria: "Importante",
    },
    {
      titulo: "Programação em C++ Algoritmos, Estrutura de Dados e Objetos",
      image: image11,
      autor: "Luiz Joyanes Aguilar",
      categoria: "Importante",
    },
    {
      titulo: "Fundamentos de bancos de dados: Modelagem, projeto e linguagem SQL",
      image: image5,
      autor: "Célio Cardoso Guimarães",
      categoria: "Recomendado",
    },
    {
      titulo: "Projeto, Desenvolvimento de Aplicações e Administração de Banco de Dados",
      image: image6,
      autor: "Michael V. Mannino",
      categoria: "Recomendado",
    },
  ];

  const [livros, setLivros] = useState(livrosCadastrados);

  return (
    <LivroContext.Provider value={{ livros, setLivros }}>
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