/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import { useUser } from "../../context/UserContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledAvatar = styled(Avatar)`
  width: 48px;
  height: 48px;
  margin-left: 16px;
  border: 3px solid var(--laranja);
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: var(--preto);
`;

const UserWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Dropdown = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  top: 100%;
  right: -20px;
  background-color: var(--branco-default);
  border: 1px solid var(--border-cinza);
  list-style: none;
  padding: 0;
`;

const DropdownList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const DropdownItem = styled.li`
  padding: 13px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--preto);
  cursor: pointer;

  &:hover {
    color: var(--laranja);
  }
`;

const DropdownLink = styled.a`
  text-decoration: none;
  color: var(--preto);
`;

function DropdownMenu({ nome, src }) {
  const [isOpen, setIsOpen] = useState(false);
  const { Logout } = useUser();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <UserWrapper>
      <Wrapper>
        <Name onClick={toggleDropdown}>{nome}</Name>
        <StyledAvatar onClick={toggleDropdown} alt={nome} src={src} />
      </Wrapper>
      <Dropdown isOpen={isOpen} onMouseLeave={toggleDropdown}>
        <DropdownList>
          <DropdownItem>
            <AccountCircleIcon />
            <DropdownLink>Perfil</DropdownLink>
          </DropdownItem>
          <DropdownItem>
            <LogoutIcon />
            <DropdownLink onClick={Logout}>Logout</DropdownLink>
          </DropdownItem>
        </DropdownList>
      </Dropdown>
    </UserWrapper>
  );
}

export default DropdownMenu;
