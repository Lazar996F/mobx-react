import styled from 'styled-components';

export const Circle = styled.span`
  display: flex;
  height: 13px;
  width: 13px;
  background-color: ${props => props['state']==='current' ? '#CF1F14' : props['state']==='draft' ? '#ffff' : '#B5B5B5'};
  border-radius: 50%;
  border: ${props => props['state']==='current' ? '1px solid #CF1F14' : props['state']==='draft' ? '1px solid' : '1px solid #B5B5B5'};
`;
