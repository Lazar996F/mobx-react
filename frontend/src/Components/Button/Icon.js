import styled from 'styled-components';

const Wrapper = styled.button`
  cursor: pointer;
  border: 0;
  padding-top: 5px;
  width: 74px;
  display: flex;
  flex-direction: column;
  align-items: center;

  :hover {
    background-color: #E3E3E3;
    border-radius: 7%;
  }
`;

const LogoLabel = styled.span`
  font-size: 12px;
  text-align: center;
  margin-top: 8px;
`;

function IconButton({ title, src }) {
  return (
    <Wrapper>
      <img src={ process.env.PUBLIC_URL + src } alt={ src }/>
      <LogoLabel>{ title }</LogoLabel>
    </Wrapper>
  );
}

export default IconButton;
