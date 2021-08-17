import { MainLogo, LinkItem, NavigationWrapper } from "../Styled/Sidebar";
import { Link } from 'react-router-dom'

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


function SidebarContent() {
  return (
    <>
      <MainLogo/>
      <NavigationWrapper>
        { linkItems.map(item => <Link to={ item.to } key={ item.to }><LinkItem>{ item.title }</LinkItem></Link>) }
      </NavigationWrapper>
    </>
  );
}

export default SidebarContent;
