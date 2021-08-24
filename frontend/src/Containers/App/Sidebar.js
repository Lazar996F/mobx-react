import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../Components/Logo';
import H3 from '../../Components/H3';
import {Wrapper} from '../../Components/Sidebar/Wrapper';
import {COLOR_SECONDARY} from '../../Utils/styles';
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

// Style for each individual link item
export const LinkItem = styled.div`
  padding-top: 20px;
  color: #959595;
  font-size: 0.8em;
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
    <Wrapper>
      <Logo/>
      <NavigationWrapper>
        { linkItems.map(item => <Link to={ item.to } key={ item.to }><LinkItem>{ item.title }</LinkItem></Link>) }
      </NavigationWrapper>
    </Wrapper>
  );
}

export default SidebarContent;
