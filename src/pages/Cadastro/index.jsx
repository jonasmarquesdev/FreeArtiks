import { useState } from 'react';
import styled from 'styled-components';
import logo from "../../assets/logo.svg";
import ilustracaoCadastro from "../../assets/ilustracaoCadastro.svg";
import { Link } from 'react-router-dom';

const CadastroPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 92.6vh;
  background-color: #FFFBF3;
`;

const CadastroForm = styled.form`
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.60);;
  height: auto;
  width: 500px;
  padding-bottom: 40px;
  padding-top: 40px;
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

const ParagrafoCadastro = styled.p`
  margin-top: .5em;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: rgba(124, 121, 121, 0.65);
`;

const LinkEstilizado = styled(Link)`
  color: #ff882777;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    color: #FF8927;
  }
`;

const Ilustracao = styled.img`
  z-index: 1;
  position: absolute;
  right: 58%;
  top: 30%;
`;

const Cadastro = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ocupacao, setOcupacao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação
  };

  return (
    <CadastroPage>
      <Ilustracao src={ilustracaoCadastro} />
      <CadastroForm onSubmit={handleSubmit}>
        <Icon src={logo} alt="logo do freeartiks" />
        <InputGroup>
          <Label htmlFor="username">Nome</Label>
          <Input
            type="text"
            placeholder="joao ribeiro"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Label htmlFor="email">Email</Label>
          <Input
            type="text"
            placeholder="joao@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label htmlFor="password">Senha</Label>
          <Input
            type="password"
            placeholder="1234"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Label htmlFor="ocupacao">Ocupação</Label>
          <Input
            type="ocupacao"
            placeholder="aluno"
            value={ocupacao}
            onChange={(e) => setOcupacao(e.target.value)}
          />
        </InputGroup>
        <Button type="submit">Avançar</Button>
        <ParagrafoCadastro>
          Já tem uma conta?{" "}
          <LinkEstilizado to="/">Faça login!</LinkEstilizado>
        </ParagrafoCadastro>
      </CadastroForm>
    </CadastroPage>
  );
};

export default Cadastro;
