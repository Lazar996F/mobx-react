import styled from 'styled-components';

export const Wrapper = styled.button`
  border: none;
  background-color: inherit;
  padding-left: 16px;
  :hover {
    background-color: #aaadab;
    border-radius: 50%;
  }
`;

function Button() {
  return (
    <Wrapper>
      <img src={process.env.PUBLIC_URL + '/Icons/apps_menu_icon.svg'} alt="app_menu_icon"/>
    </Wrapper>
  );
}

export default Button;
