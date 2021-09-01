import styled from 'styled-components';

const H3 = styled.h3`
  font-weight: ${props => props['light'] ? 'normal' : 700};
  font-size: ${props => props['small'] ? '12px' : '14px'};
  color: ${props => props['small'] && '#666666'};
  margin-bottom: ${props => props['mb']==='0' && '0'};
`;

export default H3;
