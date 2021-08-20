import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const Button = styled.button`
  background-color: black;
  display: inline-block;
  cursor: pointer;
  color: rgb(246, 246, 246);
  font-family: Arial, sans-serif;
  font-size: 0.8em;
  padding: 10px 25px;
  text-decoration: none;
  border: 0;
`;

export const RowContent = styled.div`
  display: flex;
  width: 100%;
  > * {
    flex-grow: 1;
    width: 33%;
  }
`;

// View box 1/3 column inside row named RowContent
export const ActiveDateView = styled.div`
  display: flex;
  flex-direction: row;
`;

// 1/2 Column inside row named ActiveDateView
export const DateView = styled.div`
  font-weight: bold;
  font-size: 0.8em;
`;

