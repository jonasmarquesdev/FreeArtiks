import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkEstilizado = styled(Link)`
  color: var(--laranja-claro);
  font-weight: 700;
  text-decoration: none;

  &:hover {
    color: var(--laranja);
  }
`;

export default LinkEstilizado;
