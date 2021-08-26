import { useContext } from 'react';
import { Link } from 'react-router-dom';
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
        { state.linkItems.map(item => <Link to={ item.to } key={ item.to }
                                            className="a-focus-color">{ item.title }</Link>) }
      </NavigationWrapper>
      <UserInfoBar username={ state.username }/>
    </Wrapper>
  );
}

export default SidebarContent;
