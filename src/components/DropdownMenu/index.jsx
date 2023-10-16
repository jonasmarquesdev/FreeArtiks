/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import { useUser } from "../../context/UserContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { Box, Divider } from "@mui/material";

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

const StyledAvatarDropMenu = styled(Avatar)`
  width: 48px;
  height: 48px;
  border: none;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: var(--preto);
`;

const NameDropMenu = styled(Name)`
  width: 100%;
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
  width: 250px;
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
    color: var(--branco-default);
    background-color: var(--laranja-claro);
  }
`;

const ProfileInfo = styled(DropdownItem)`
  align-items: center;
  justify-content: flex-start;
  cursor: default;

  &:hover {
    background-color: var(--branco-default);
  }
`;

const DropdownLink = styled.a`
  text-decoration: none;
  font-weight: 700;
`;

const OptionContainer = styled.div`
  margin-left: 10px;
  display: flex;
  gap: 12px;
`;

function DropdownMenu({ nome, src }) {
  const [isOpen, setIsOpen] = useState(false);
  const { Logout, userEncontrado } = useUser();

  const navigate = useNavigate();
  
  const NavigateToProfile = () => {
    navigate("/dashboard/user/profile");
  };

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
          <ProfileInfo>
            <StyledAvatarDropMenu onClick={toggleDropdown} alt={nome} src={src} />
            <Box
              sx={{ marginLeft: '5px' }}
            >
              <NameDropMenu>{nome}</NameDropMenu>
              <NameDropMenu>{userEncontrado.email}</NameDropMenu>
            </Box>
          </ProfileInfo>
        </DropdownList>
        
        <Divider />

        <DropdownList>
          <DropdownItem onClick={NavigateToProfile}>
            <OptionContainer>
              <AccountCircleIcon />
              <DropdownLink>Perfil</DropdownLink>
            </OptionContainer>
          </DropdownItem>
          <DropdownItem  onClick={Logout}>
            <OptionContainer>
              <LogoutIcon />
              <DropdownLink>Logout</DropdownLink>
            </OptionContainer>
          </DropdownItem>
        </DropdownList>
      </Dropdown>
    </UserWrapper>
  );
}

export default DropdownMenu;
