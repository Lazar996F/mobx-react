import styled from 'styled-components';

export const Circle = styled.span`
  display: flex;
  height: 13px;
  width: 13px;
  background-color: ${props => props['state']==='current' ? '#CF1F14' : '#ffff'};
  border-radius: 50%;
  border: ${props => props['state']==='current' ? '1px solid #CF1F14' : '1px solid'};
`;
