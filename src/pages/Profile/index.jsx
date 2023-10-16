import styled from "styled-components";
import Banner from "./Banner";
// import BookList from "../../components/Carrosel";
// import { useArtigo, useLivro } from "../../context/ProductContext";

const DashboardContainer = styled.div`
  width: 1200px;
  /* background-color: #aa5050; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Space = styled.div`
  margin-top: 3em;
`;

const Profile = () => {
  // const { livros } = useLivro();
  // const { artigos } = useArtigo();
  return (
    <DashboardContainer>
      <Banner />
      <Space />
    </DashboardContainer>
  );
};

export default Profile;
