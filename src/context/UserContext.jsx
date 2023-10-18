/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useState } from "react";
import { image1, image2, image3, image4, image5, image6 } from "./assets";

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
        },
        {
          id: 2,
          titulo: "Projeto de Banco de Dados: Volume 4",
        },
      ],
      recomendado: [
        {
          id: 1,
          titulo: "Projeto de Banco de Dados: Volume 4",
        },
      ],
      lido: [
        {
          id: 1,
          titulo:
            "Fundamentos de bancos de dados: Modelagem, projeto e linguagem SQL",
        },
        {
          id: 6,
          titulo:
            "Projeto, Desenvolvimento de Aplicações e Administração de Banco de Dados",
        },
      ],
    },
    {
      nome: "Ana Beatriz de Oliveira Santos",
      email: "anna@gmail.com",
      senha: "123",
      image:
        "https://firebasestorage.googleapis.com/v0/b/storage-1cbb2.appspot.com/o/pexels-mert-coşkun-17871654.jpg?alt=media&token=a5dca7e4-41d6-4bdb-84ee-9247dc02a818&_gl=1*1njo4nu*_ga*NzMyNjc1Nzg3LjE2OTAxNjYxNDA.*_ga_CW55HF8NVT*MTY5NzQ1NzEyOS42LjEuMTY5NzQ1NzE2Ny4yMi4wLjA.",
      sobre:
        "Ana Beatriz, uma estudante dedicada de tecnologia que se transformou em uma engenheira de software excepcional, trilhou seu caminho desde sua infância curiosa e apaixonada por tecnologia até a graduação em Engenharia de Software. Durante seus anos de faculdade, Ana se destacou como uma aluna dedicada e inovadora, adquirindo habilidades sólidas em desenvolvimento de software, resolução de problemas e pensamento criativo. Após sua formatura, Ana continuou a brilhar na indústria de tecnologia, contribuindo para projetos de grande escala e tornando-se uma referência em sua área de atuação.",
      nomeinstituicao: "Centro Universitário Unibra",
      nivelacademico: "Graduada",
      ocupacao: "Estudante",
      lendo: [
        {
          id: 1,
          titulo: "Sistema de Banco de Dados",
        },
        {
          id: 2,
          titulo: "Projeto de Banco de Dados: Volume 4",
        },
      ],
      lido: [
        {
          id: 1,
          titulo:
            "Fundamentos de bancos de dados: Modelagem, projeto e linguagem SQL",
        },
        {
          id: 6,
          titulo:
            "Projeto, Desenvolvimento de Aplicações e Administração de Banco de Dados",
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
