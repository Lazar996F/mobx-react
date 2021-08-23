import { HiViewGrid } from 'react-icons/hi';
import styled from 'styled-components';

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

export const Text = styled.h3`
  font-size: 0.8em;
  display: inline;
  margin-top: 8px;
  padding-right: 9px;
  font-weight: 500;
`;

function AppMenu() {
  return (
    <AppMenuWrapper>
      <Text>Lorem Management Portal - Super Admin</Text>
    <AppMenuButton>
      <HiViewGrid size="1.4em"/>
    </AppMenuButton>
    </AppMenuWrapper>
  );
}

export default AppMenu;
