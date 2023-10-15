/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from "react";

const LivroContext = createContext();

export function LivroProvider({ children }) {
  const livrosCadastrado = [
    {
      id: 1,
      titulo: "Sistema de Banco de Dados",
      image: "",
      autor: "Abraham Silberschatz, Henry F. Korth e S. Sudarshan",
      categoria: "Introdutório",
    },
    {
      id: 2,
      titulo: "Sistemas de Banco de Dados",
      image: "",
      autor: "Ramez Elmasri",
      categoria: "Introdutório",
    },
    {
      id: 3,
      titulo: "Projeto de Banco de Dados: Volume 4",
      image: "",
      autor: "Carlos Alberto Heuser",
      categoria: "Importante",
    },
    {
      id: 4,
      titulo: "Banco De Dados - Projetos E Implementação",
      image: "",
      autor: "FELIPE NERY RODRIGUES MACHADO",
      categoria: "Importante",
    },
  ];

  const [livros, setLivros] = useState(livrosCadastrado);

  return (
    <LivroContext.Provider value={{ livros, setLivros }}>
      {children}
    </LivroContext.Provider>
  );
}

export function useLivro() {
  const context = useContext(LivroContext);
  if (!context) {
    throw new Error("useUser deve ser usado dentro de um UserProvider");
  }
  return context;
}
