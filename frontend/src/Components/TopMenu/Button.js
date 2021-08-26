import styled from 'styled-components';

export const Wrapper = styled.button`
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

function Button() {
  return (
    <Wrapper>
      <img src={process.env.PUBLIC_URL + '/Icons/apps_menu_icon.svg'} alt="app_menu_icon"/>
    </Wrapper>
  );
}

export default Button;
