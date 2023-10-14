import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import styled from "styled-components";

const Icon = styled.img`
  width: 60px;
  height: 60px;
`;

const IconeDeVoltarContainer = styled.div`
  display: flex;
  align-self: flex-start;
  justify-self: center;
  margin-left: 40px;
  color: var(--cinza);
  cursor: pointer;

  &:hover {
    color: var(--laranja);
  }
`;

const IconeDeVoltar = styled(ArrowBackIosIcon)`
  font-size: 50px;
`;

export { Icon, IconeDeVoltarContainer, IconeDeVoltar };
