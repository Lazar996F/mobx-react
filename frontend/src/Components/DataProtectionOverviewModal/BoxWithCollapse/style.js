import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 0;
  background-color: #F2F2F2;
  padding: 10px 15px;
  min-height: 50px;
  margin-bottom: 15px;
  cursor: ${props => props['cursorPointer'] && 'pointer'};

  h3 {
    font-size: 18px;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
  }
`;
