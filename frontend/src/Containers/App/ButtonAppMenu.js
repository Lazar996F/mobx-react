import React from 'react';
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

function ButtonAppMenu() {
  return (
    <AppMenuButton>
      <HiViewGrid size="1.4em"/>
    </AppMenuButton>
  );
}

export default ButtonAppMenu;
