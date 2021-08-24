import { HiViewGrid } from 'react-icons/hi';
import styled from 'styled-components';

export const Wrapper = styled.button`
  border: none;
  background-color: inherit;

  :hover {
    background-color: #aaadab;
    border-radius: 50%;
  }
`;

function Button() {
  return (
    <Wrapper>
      <HiViewGrid size="1.4em"/>
    </Wrapper>
  );
}

export default Button;
