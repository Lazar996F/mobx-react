import styled from 'styled-components';

const H3 = styled.h3`
  font-family: 'Nunito', sans-serif;
  margin-top: 2px;
  font-weight: ${props => props['light'] ? 'normal' : 700};
  font-size: 14px;
`;

export default H3;
