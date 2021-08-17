import styled from "styled-components";

// Main wrapper for sidebar component
export const SidebarWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 10px 20px 20px;
`;

export const MainLogo = styled.div`
  background-image: url(${ process.env.PUBLIC_URL + '/images/MainLogo.PNG' });
  background-repeat: no-repeat;
  padding: 35px 70px;
`;

// Style for each individual link item
export const LinkItem = styled.div`
  padding-top: 20px;
  color:rgb(135,135,135);
  font-size: 14px;
`;

export const NavigationWrapper = styled.div`
  a {
    text-decoration: none;
  }
  padding-top: 64px;
  padding-left:10px;
`;
