import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {Logo} from '../../Components/Logo';
import {H3} from '../../Components/H3'
// This link items data are for testing view. We need to passing linkItems from smart component to this dumb component.
const linkItems = [
  {
    title: "Dashboard",
    to: '/dashboard'
  },
  {
    title: "Companies",
    to: '/companies'
  },
  {
    title: "Branches",
    to: '/branches'
  },
  {
    title: "Users",
    to: '/users'
  },
  {
    title: "Terms of Service",
    to: '/service'
  },
  {
    title: "Data Privacy",
    to: '/privacy'
  },
  {
    title: "General settings",
    to: '/settings'
  }
]

// Main wrapper for sidebar component
export const SidebarWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 10px 20px 20px;
`;

// Style for each individual link item
export const LinkItem = styled.div`
  padding-top: 20px;
  color: rgb(135, 135, 135);
`;

export const NavigationWrapper = styled.div`
  a {
    text-decoration: none;
  }

  padding-top: 64px;
  padding-left: 10px;
`;

function SidebarContent() {
  return (
    <SidebarWrapper>
      <Logo/>
      <NavigationWrapper>
        { linkItems.map(item => <Link to={ item.to } key={ item.to }><LinkItem><H3>{ item.title }</H3></LinkItem></Link>) }
      </NavigationWrapper>
    </SidebarWrapper>
  );
}

export default SidebarContent;
