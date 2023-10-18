import { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/logo1.png";
import { useNavigate } from "react-router-dom";
import usePost from "../../usePost";
import { motion } from "framer-motion";
import {
  Icon,
  IconeDeVoltar,
  IconeDeVoltarContainer,
} from "../../components/Icones";
import IlustracaoComponent from "../../components/Ilustracao";
import { Button } from "../../components/Botao";
import {
  Input,
  InputGroup,
  Label,
  Option,
  Select,
} from "../../components/CampoTexto";
import ilustracaoCadastroEtapa1 from "../../assets/ilustracaoCadastroEtapa1.svg";
import ilustracaoCadastroEtapa2 from "../../assets/ilustracaoCadastroEtapa2.svg";
import LinkEstilizado from "../../components/LinkEstilizado";

const CadastroPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--background-default);
  transition: all 0.2s;
`;

const CadastroForm = styled.form`
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-direction: column;
  background-color: var(--fundo-form);
  height: auto;
  width: 500px;
  padding-bottom: 40px;
  padding-top: 40px;
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

const Cadastro = () => {
  const [etapaAtiva, setEtapaAtiva] = useState(0);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nomeInstituicao, setNomeInstituicao] = useState("");
  const [nivelAcademico, setNivelAcademico] = useState("");
  const [ocupacao, setOcupacao] = useState("");

  // eslint-disable-next-line no-unused-vars
  const { cadastrarDados, erro, sucesso } = usePost();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // lógica de cadastro

    const usuario = {
      nome: nome,
      email: email,
      senha: senha,
      ocupacao: ocupacao,
    };

    if (etapaAtiva !== 0) {
      try {
        cadastrarDados({ url: "usuario", dados: usuario });
        navigate("/login");
      } catch (erro) {
        erro && alert("Erro ao cadastrar os dados");
      }
    }
  };

  function voltaEtapa() {
    setEtapaAtiva(etapaAtiva - 1);
  }

  function AvancarEtapa() {
    setEtapaAtiva(etapaAtiva + 1);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CadastroPage>
        {etapaAtiva === 0 ? (
          <>
            <IlustracaoComponent src={ilustracaoCadastroEtapa1} />
            <CadastroForm onSubmit={handleSubmit}>
              <Icon src={logo} alt="logo do freeartiks" />
              <InputGroup>
                <Label htmlFor="nome">Nome</Label>
                <Input
                  type="text"
                  placeholder="joao ribeiro"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
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
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
                <Label htmlFor="ocupacao">Ocupação</Label>
                <Select
                  value={ocupacao}
                  onChange={(e) => setOcupacao(e.target.value)}
                >
                  <Option value="">Selecione o tipo de usuário</Option>
                  <Option value="estudante">Estudante</Option>
                  <Option value="professor">Professor</Option>
                </Select>
              </InputGroup>
              {ocupacao !== "professor" ? (
                <Button type="submit">Cadastrar</Button>
              ) : (
                <Button onClick={AvancarEtapa}>Avançar</Button>
              )}
              <ParagrafoCadastro>
                Já tem uma conta?{" "}
                <LinkEstilizado to="/auth/login">Faça login!</LinkEstilizado>
              </ParagrafoCadastro>
            </CadastroForm>
          </>
        ) : (
          <>
            <IlustracaoComponent src={ilustracaoCadastroEtapa2} />
            <CadastroForm onSubmit={handleSubmit}>
              <IconeDeVoltarContainer onClick={voltaEtapa}>
                <IconeDeVoltar />
                <span>Voltar</span>
              </IconeDeVoltarContainer>
              <Icon src={logo} alt="logo do freeartiks" />
              <InputGroup>
                <Label htmlFor="nome">Nome da Instituição</Label>
                <Input
                  type="text"
                  placeholder="Centro Universitário"
                  value={nomeInstituicao}
                  onChange={(e) => setNomeInstituicao(e.target.value)}
                />
                <Label htmlFor="nivelAcademico">Nível acadêmico</Label>
                <Select
                  value={nivelAcademico}
                  onChange={(e) => setNivelAcademico(e.target.value)}
                >
                  <Option value="">Selecione o nível acadêmico</Option>
                  <Option value="superior">Ensino superior</Option>
                  <Option value="bacharelado">Bacharelado</Option>
                  <Option value="mestrado">Mestrado</Option>
                  <Option value="doutorado">Doutorado</Option>
                </Select>
              </InputGroup>
              <Button type="submit">Cadastrar</Button>
              <ParagrafoCadastro>
                Já tem uma conta?{" "}
                <LinkEstilizado to="/auth/login">Faça login!</LinkEstilizado>
              </ParagrafoCadastro>
            </CadastroForm>
          </>
        )}
      </CadastroPage>
    </motion.div>
  );
};

export default Cadastro;
