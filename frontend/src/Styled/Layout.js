import styled from 'styled-components';

export const AppMenuButton = styled.button`
  border: none;
  background-color: inherit;

  :hover {
    background-color: #aaadab;
    border-radius: 50%;
  }
`;

export const HeaderText = styled.h3`
  font-size: 0.8em;
  display: inline;
  margin-top: 8px;
  padding-right: 9px;
  font-weight: 500;
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
