import styled from "styled-components";

const Input = styled.input`
  padding: 1em;
  padding-left: 2em;
  margin: 5px 0;
  border: 1px solid var(--branco-secundario);
  border-radius: 8px;
  width: 300px;
  height: 50px;

  &::placeholder {
    color: var(--cinza);
  }
  &:focus {
    outline: 2px solid var(--laranja);
  }
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

const Select = styled.select`
  padding: 1em;
  padding-left: 2em;
  margin: 5px 0;
  border: 1px solid var(--branco-secundario);
  border-radius: 8px;
  width: 300px;
  height: 50px;

  &:focus {
    outline: 2px solid var(--laranja);
  }
`;

const Option = styled.option``;

export { Input, Label, InputGroup, Select, Option };
