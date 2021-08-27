import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../Components/Logo';
import { Wrapper } from '../../Components/Sidebar/Wrapper';
import Context from './Context';
import UserInfoBar from '../../Components/UserInfoBar';
import NavigationWrapper from '../../Components/Layout/NavigationWrapper';

function SidebarContent() {
  const { state } = useContext(Context);

  return (
    <Wrapper>
      <Logo/>
      <NavigationWrapper>
        { state.linkItems.map(item =>
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
