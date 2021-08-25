import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../Components/Logo';
import {Wrapper} from '../../Components/Sidebar/Wrapper';
import Context from './Context';
import UserInfoBar from '../../Components/UserInfoBar';

export const NavigationWrapper = styled.div`
  padding-top: 74px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    padding-top: 20px;
    color: #959595;
    font-size: 0.78em;
  }
  a:focus{
    color: black;
    font-weight: bold;
  }
`;

function SidebarContent() {
  const { state } = useContext(Context);

  return (
    <Wrapper>
      <Logo/>
      <NavigationWrapper>
        { state.linkItems.map(item => <Link to={ item.to } key={ item.to } className="a-focus-color">{ item.title }</Link>) }
      </NavigationWrapper>
      <UserInfoBar username={state.username}/>
    </Wrapper>
  );
}

export default SidebarContent;
