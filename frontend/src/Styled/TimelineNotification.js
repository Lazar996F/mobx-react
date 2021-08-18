import styled from "styled-components";


export const Frame = styled.span`
  padding: 3px;
`;

export const VerticalLine = styled.div`
  border-left: 1px solid black;
  min-height: 10px;
  height: inherit;
`;

export const TextContent = styled.div`
  display: inline;
  border: ${props => props["isDraft"] ? '1px solid black' : '0'};
  font-size: 0.6em;
  border-radius: 40px 40px 40px 40px;
  padding: 2px 11px;
  background-color: ${props => !props["isDraft"] && '#CF1F14'};
  color: ${props => !props["isDraft"] && '#ffff'};
`;
