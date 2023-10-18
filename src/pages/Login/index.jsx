import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ilustracaoLogin from "../../assets/ilustracaoLogin.svg";
import IlustracaoComponent from "../../components/Ilustracao";
import { Input, InputGroup, Label } from "../../components/CampoTexto";
import { Icon } from "../../components/Icones";
import logo from "../../assets/logo1.png";
import { Button } from "../../components/Botao";
import LinkEstilizado from "../../components/LinkEstilizado";
import { useUser } from "../../context/UserContext";

const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--background-default);
`;

const LoginForm = styled.form`
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-direction: column;
  background-color: var(--fundo-form);
  height: 500px;
  width: 500px;
  padding: 20px;
  margin-bottom: 50px;
  border-radius: 8px;
  box-shadow: 0 0 10px var(--sombra-form);
`;

const ParagrafoCadastro = styled.p`
  margin-top: 0.5em;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: var(--cinza);
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { Login, isLoggedIn } = useUser();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await Login(email, senha);
  };

  useEffect(() => {
    isLoggedIn === true ? navigate("/") : "";
  }, [isLoggedIn, navigate]);

  return (
    <LoginPage>
      <IlustracaoComponent src={ilustracaoLogin} />
      <LoginForm onSubmit={handleSubmit}>
        <Icon src={logo} alt="logo do freeartiks" />
        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="text"
            placeholder="joao@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Label htmlFor="password">Senha</Label>
          <Input
            type="password"
            placeholder="1234"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </InputGroup>
        <Button type="submit">Entrar</Button>
        <ParagrafoCadastro>
          Ainda não tem conta?{" "}
          <LinkEstilizado to="/auth/register">
            Faça seu cadastro!
          </LinkEstilizado>
        </ParagrafoCadastro>
      </LoginForm>
    </LoginPage>
  );
};

export default Login;
