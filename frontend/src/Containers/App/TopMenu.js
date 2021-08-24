import styled from 'styled-components';
import H3 from '../../Components/H3';
import ButtonAppMenu from './ButtonAppMenu';

export const AppMenuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TextWrapper = styled.div`
  display: inline;
  padding-right: 9px;
`;

function TopMenu() {
  return (
    <AppMenuWrapper>
      <TextWrapper>
        <H3>Lorem Management Portal - Super Admin</H3>
      </TextWrapper>
      <ButtonAppMenu/>
    </AppMenuWrapper>
  );
}

export default TopMenu;
