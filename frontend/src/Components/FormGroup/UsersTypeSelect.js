import styled from 'styled-components';

const Input = styled.input`

`;

const Wrapper = styled.div`

`;

function UsersTypeSelect() {
  return (
    <Wrapper>
      <Input type="checkbox" name="Professional Users"/>
      <Input type="checkbox" name="End Users"/>
    </Wrapper>
  );
}

export default UsersTypeSelect;
