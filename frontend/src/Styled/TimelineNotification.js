import styled from 'styled-components';


export const TextWrapper = styled.span`
  padding: 3px;
`;

export const VerticalLine = styled.div`
  display: flex;
  border-left: 2px solid #d8d8d8;
  min-height: 10px;
  height: inherit;
  margin-left: 50%;
  margin-top: 2px;
`;

export const TextContent = styled.div`
  display: inline;
  border: ${props => props["isDraft"] ? '1px solid black' : '0'};
  font-size: 0.6em;
  border-radius: 40px 40px 40px 40px;
  padding: 1px 14px;
  background-color: ${props => !props["isDraft"] && '#CF1F14'};
  color: ${props => !props["isDraft"] && '#ffff'};
`;

export const DateText = styled.span`
  font-size: 11px;
  font-weight: bold;
`;
