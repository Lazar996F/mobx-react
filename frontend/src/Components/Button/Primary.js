import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const Button = styled.a`
  background-color: black;
  display: inline-block;
  cursor: pointer;
  color: #ffff;
  font-family: Arial, sans-serif;
  font-size: 16px;
  width: 224px;
  padding: 13px 0px;
  text-decoration: none;
  border: 0;
  text-align: center;
`;

function Primary({linkTo,label}) {
  return (
    <ButtonWrapper>
      <Button href={linkTo}>{label}</Button>
    </ButtonWrapper>
  );
}

export default Primary;
