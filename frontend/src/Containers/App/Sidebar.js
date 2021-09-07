import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../Components/Logo';
import { Wrapper } from '../../Components/Sidebar/Wrapper';
import Context from './Context';
import UserInfoBar from '../../Components/UserInfoBar';
import NavigationWrapper from '../../Components/Layout/NavigationWrapper';
import { Link } from 'react-router-dom';

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
  const { state } = useContext(Context);
  return (
    <Wrapper>
      <Link to="/privacy"><Logo/></Link>
      <NavigationWrapper>
        { linkItems.map(item =>
          <NavLink
            to={ item.to }
            key={ item.to }
            activeStyle={{
              fontWeight: "bold",
              color: "black"
            }}
        >
          { item.title }
        </NavLink>) }
      </NavigationWrapper>
      <UserInfoBar username={ state.username }/>
    </Wrapper>
  );
}

export default SidebarContent;
