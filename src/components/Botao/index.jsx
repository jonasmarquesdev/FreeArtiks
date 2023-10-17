import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--laranja);
  color: var(--branco-default);
  padding: 10px;
  border: none;
  font-size: 1em;
  font-weight: bold;
  border-radius: 8px;
  width: 120px;
  height: 45;
  box-shadow: 0px 4px 4px 0px var(--sombra-media);
  cursor: pointer;

  &:hover {
    background-color: var(--laranja-claro);
  }
`;