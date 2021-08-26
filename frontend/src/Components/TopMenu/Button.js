import styled from 'styled-components';

export const WrapperButton = styled.button`
  border: none;
  background-color: inherit;
  :hover {
    background-color: #E3E3E3;
    border-radius: 50%;
  }
  width: 32px;
  height: 32px;
  padding: 0;
  cursor: pointer;
  margin-bottom: -2px;
  margin-left: 10px;
`;

function Button({onClick}) {
  return (
    <WrapperButton onClick={onClick}>
      <img src={process.env.PUBLIC_URL + '/icons/apps_menu_icon.svg'} alt="app_menu_icon"/>
    </WrapperButton>
  );
}

export default Button;
