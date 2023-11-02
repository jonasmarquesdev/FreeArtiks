/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useState } from "react";
import { image1, image2, image3, image4, image5, image6 } from "./assets";
import axios from "axios";

const UserContext = createContext();

export function UserProvider({ children }) {

  const [user, setUser] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEncontrado, setUserEncontrado] = useState(null);
  const [ApiBaseUrl, setAPIurl] = useState("https://api-livros-v3.vercel.app/usuarios");

  useEffect(() => {
    axios.get(ApiBaseUrl)
      .then(response => {
        const usuarios = response.data;
        setUser(usuarios)
      })
      .catch(error => {
        console.error('Erro ao buscar usuários:', error);
      });

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
    const encontraUser = user.find(
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
        setUserEncontrado
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
