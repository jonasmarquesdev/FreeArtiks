/* eslint-disable react/prop-types */
import styled from "styled-components";

const Ilustracao = styled.img`
  z-index: 1;
  position: absolute;
  right: 58%;
  top: 30%;
`;

const IlustracaoComponent = ({src}) => {
  return (
    <Ilustracao src={src} />
  );
}

export default IlustracaoComponent;