import { HiViewGrid } from 'react-icons/hi';
import styled from 'styled-components';
import {H3} from '../../Components/H3';

export const AppMenuButton = styled.button`
  border: none;
  background-color: inherit;

  :hover {
    background-color: #aaadab;
    border-radius: 50%;
  }
`;

 export const AppMenuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TextWrapper = styled.div`
  display: inline;
  padding-right: 9px;
`;

function AppMenu() {
  return (
    <AppMenuWrapper>
      <TextWrapper><H3>Lorem Management Portal - Super Admin</H3></TextWrapper>
    <AppMenuButton>
      <HiViewGrid size="1.4em"/>
    </AppMenuButton>
    </AppMenuWrapper>
  );
}

export default AppMenu;
