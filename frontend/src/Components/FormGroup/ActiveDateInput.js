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
  border-bottom: 1px solid ${COLOR_SECONDARY_LIGHT};
  :focus {
    outline: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function ActiveDateInput() {
  return (
    <Wrapper>
      <H3 light>Active from</H3>
      <Input/>
    </Wrapper>
  );
}

export default ActiveDateInput;
