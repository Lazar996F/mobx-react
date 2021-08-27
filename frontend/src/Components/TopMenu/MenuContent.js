import styled from 'styled-components';
import Account from './Buttons/Account';
import Portal from './Buttons/Portal';
import Disposuite from './Buttons/Disposuite';

const Content = styled.div`
  display: flex;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: 56px;
  right: 37px;
  justify-content: space-evenly;
  width: 299px;
  padding: 28px 0px;
`;

function MenuContent() {
  return (
    <Content>
      <Account/>
      <Portal/>
      <Disposuite/>
    </Content>
  );
}

export default MenuContent;
