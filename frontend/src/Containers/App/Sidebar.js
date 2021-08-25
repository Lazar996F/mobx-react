import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../Components/Logo';
import {Wrapper} from '../../Components/Sidebar/Wrapper';
import Context from './Context';
import UserInfoBar from '../../Components/UserInfoBar';
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
  const { state } = useContext(Context);

  return (
    <Wrapper>
      <Logo/>
      <NavigationWrapper>
        { state.linkItems.map(item => <Link to={ item.to } key={ item.to }><LinkItem>{ item.title }</LinkItem></Link>) }
      </NavigationWrapper>
      <UserInfoBar username={state.username}/>
    </Wrapper>
  );
}

export default SidebarContent;
