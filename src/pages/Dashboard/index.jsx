import styled from "styled-components";
import Banner from "./Banner";

const DashboardContainer = styled.div`
  width: 1200px;
  /* background-color: #aa5050; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Banner />
    </DashboardContainer>
  );
};

export default Dashboard;
