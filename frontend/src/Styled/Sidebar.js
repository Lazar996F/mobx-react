import styled from "styled-components";
import LogoImage from '../Images/MainLogo.PNG'

// Main wrapper for sidebar component
export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding:20px;
`;

export const MainLogo = styled.div`
  background-image: url(${LogoImage});
  background-repeat: no-repeat;
  padding-left: 70px;
  padding-right: 70px;
  padding-top: 35px;
  padding-bottom: 35px;
`


// Style for each individual link item
export const LinkItem = styled.div`
  padding-top: 20px;
  color:rgb(135,135,135);
  font-size: 14px;
`

export const NavigationBox = styled.div`
  a {
    text-decoration: none;
  }
  padding-top: 80px;
  padding-left:10px;
`