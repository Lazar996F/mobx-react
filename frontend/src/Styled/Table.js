import styled from 'styled-components'

export const TableContainer = styled.div`
  padding-top: 50px;
  padding-right: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 3px;
  tr th:first-child {
    background: #F2F2F2FF;
    color: black;
    font-weight: 700;
    width: 6%;
  }
  tr td:first-child {
    background: #F2F2F2FF;
    width: 6%;
  }
`;

export const HeaderRow = styled.tr`
  background-color: #ffff;
`;

export const HeaderCell = styled.th`
  text-align: left;
  padding: 8px;
  color: #80808087;
  font-size: 0.8em;
  font-weight: 400;
`;

export const Row = styled.tr`
  background-color: #ffff;
`;

export const TableCell = styled.td`
  text-align: left;
  padding: 8px;
  font-size: 0.8em;
  font-weight: 500;
`;
