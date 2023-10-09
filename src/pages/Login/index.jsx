import { useState } from 'react';
import styled from 'styled-components';
import logo from "../../assets/logo.svg"

const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #FFFBF3;
`;

const LoginForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.60);;
  height: 500px;
  width: 500px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 1em;
  padding-left: 2em;
  margin: 5px 0;
  border: 1px solid #F2F2F2;
  border-radius: 8px;
  width: 300px;
  height: 50px;

  &::placeholder {
    color: rgba(124, 121, 121, 0.65);
  }
`;

const Button = styled.button`
  background-color: #FF8927;
  color: #fff;
  padding: 10px;
  border: none;
  font-size: 1em;
  font-weight: bold;
  border-radius: 8px;
  width: 120px;
  height: 45;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    background-color: #ff882777;
  }
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  margin-left: 15px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação
  };

  return (
    <LoginPage>
      <LoginForm onSubmit={handleSubmit}>
        <Icon src={logo} alt="logo do freeartiks" />
        <InputGroup>
          <Label htmlFor="username">Email</Label>
          <Input
            type="text"
            placeholder="joao@email.com"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Label htmlFor="password">Senha</Label>
          <Input
            type="password"
            placeholder="1234"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>
        <Button type="submit">Entrar</Button>
      </LoginForm>
    </LoginPage>
  );
};

export default Login;
