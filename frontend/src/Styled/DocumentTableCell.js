import styled from 'styled-components'

export const DocumentBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const IconWrapper = styled.span`
  padding-right: 6px;
`;

export const DocumentName = styled.h1`
  font-size: 1em;
  font-weight: 500;
  margin: 0;
`;

export const ButtonsBox = styled.div`
  display: flex;
  margin-left: auto;
`;

export const ChangeButton = styled.button`
  color: #D6D6D6;
  border: 1px solid #D6D6D6;
  height: 17px;
  font-size: 0.7em;
  background-color: inherit;
  margin-right: 40px;
  cursor: pointer;
`;

export const ArrowButton = styled.span`
  padding-right: 20px;
  cursor: pointer;
`;
