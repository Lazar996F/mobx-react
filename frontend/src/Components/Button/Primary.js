import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const Button = styled.button`
  background-color: black;
  display: inline-block;
  cursor: pointer;
  color: #ffff;
  font-family: Arial, sans-serif;
  font-size: 16px;
  width: 224px;
  height: 40px;
  text-decoration: none;
  border: 0;
`;

function Primary() {
  return (
    <ButtonWrapper>
      <Button>Add new Data Privacy</Button>
    </ButtonWrapper>
  );
}

export default Primary;
