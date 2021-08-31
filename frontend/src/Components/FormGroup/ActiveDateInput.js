import styled from 'styled-components';
import { COLOR_SECONDARY_LIGHT } from '../../Utils/styles';
import H3 from '../H3';

const Input = styled.input`
  margin-top: 27px;
  padding: 8px;
  font-size: 16px;
  background-color: #FFFFFF;
  color: #000000;
  border: 0;
  border-bottom: 1px solid ${ COLOR_SECONDARY_LIGHT };

  :focus {
    outline: none;
  }

  ::placeholder {
    font-size: 14px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CloseIcon = styled.button`
  width: 34px;
  height: 38px;
  background-image: url(${ process.env.PUBLIC_URL + '/icons/close_icon.svg' });
  border: 0;
  cursor: pointer;
  position: absolute;
  right: 0;
  bottom: 0;
`;

const InputWrapper = styled.div`
  position: relative;
`;

function ActiveDateInput() {
  return (
    <Wrapper>
      <H3 light>Active from</H3>
      <InputWrapper>
        <Input placeholder="DD/MM/YYYY"/>
        <CloseIcon/>
      </InputWrapper>
    </Wrapper>
  );
}

export default ActiveDateInput;
