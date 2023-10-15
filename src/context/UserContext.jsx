/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const usuarioCadastrado = [
    {
      nome: "Jonas Marques",
      email: "jonas@gmail.com",
      senha: "123",
      image:
        "https://firebasestorage.googleapis.com/v0/b/storage-1cbb2.appspot.com/o/free-photo-of-estudio-portarit.jpeg?alt=media&token=7caead11-f0f8-4162-90c8-cca341b08ea7",
      sobre:
        "Jonas, um entusiasta da tecnologia desde a infância, trilhou seu caminho como professor de Análise e Desenvolvimento de Sistemas após concluir sua graduação. Sua paixão pela programação e seu dom para ensinar transformaram-no em um educador excepcional, destacando-se não apenas por transmitir conhecimento técnico, mas também por cultivar habilidades de comunicação e resolução de problemas em seus alunos. Sua influência se estendeu além da sala de aula, tornando-o uma figura de destaque no campo da tecnologia e um modelo inspirador para aqueles que buscam uma carreira semelhante.",
      nomeinstituicao: "Centro Universitário Unibra",
      nivelacademico: "Doutorado",
      ocupacao: "Professor",
      lendo: [
        {
          id: 1,
          titulo: "Sistema de Banco de Dados",
          autor: "Abraham Silberschatz, Henry F. Korth e S. Sudarshan",
          categoria: "Introdutório",
        },
      ],
    },
  ];

  const [user, setUser] = useState(usuarioCadastrado);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEncontrado, setUserEncontrado] = useState(null);

  useEffect(() => {
    // Verifica o localStorage para definir o estado de isLoggedIn e userEncontrado
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    const storedUserEncontrado = localStorage.getItem("userEncontrado");

    if (storedIsLoggedIn === "true" && storedUserEncontrado) {
      setIsLoggedIn(true);
      setUserEncontrado(JSON.parse(storedUserEncontrado));
    }
  }, []);

  useEffect(() => {
    // Salva o estado no localStorage sempre que isLoggedIn ou userEncontrado mudam
    localStorage.setItem("isLoggedIn", isLoggedIn ? "true" : "false");
    localStorage.setItem("userEncontrado", JSON.stringify(userEncontrado));
  }, [isLoggedIn, userEncontrado]);

  function Logout() {
    setIsLoggedIn(false);
    setUserEncontrado(null);
  }

  function Login(emailFornecido, senhaFornecida) {
    const encontraUser = usuarioCadastrado.find(
      (user) => user.email === emailFornecido
    );

    if (!encontraUser) {
      alert("Dados incorretos: Email");
    } else if (encontraUser) {
      if (senhaFornecida !== encontraUser.senha) {
        alert("Dados incorretos: Senha");
      }
      setUserEncontrado(encontraUser);
      setIsLoggedIn(true);
      
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
        Logout,
        Login,
        userEncontrado,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deve ser usado dentro de um UserProvider");
  }
  return context;
}
