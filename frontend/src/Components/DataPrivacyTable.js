import {Table, HeaderRow, HeaderCell, TableContainer, Row, TableCell} from '../Styled/Table'

function DataPrivacyTable() {
  return (
    <TableContainer>
      <Table>
        <HeaderRow>
          <HeaderCell>Active from</HeaderCell>
          <HeaderCell>Title</HeaderCell>
          <HeaderCell>Role</HeaderCell>
          <HeaderCell>Document</HeaderCell>
          <HeaderCell/>
        </HeaderRow>
        <Row>
          <TableCell>15.11.2021</TableCell>
          <TableCell>Data Privacy</TableCell>
          <TableCell>Professional users, End users</TableCell>
          <TableCell>Data privacy _document.PDF</TableCell>
          <TableCell>
            <button>Change</button>
          </TableCell>
        </Row>
        <Row>
          <TableCell>15.11.2021</TableCell>
          <TableCell>Data Privacy</TableCell>
          <TableCell>Professional users, End users</TableCell>
          <TableCell>Data privacy _document.PDF</TableCell>
          <TableCell/>
        </Row>
        <Row>
          <TableCell>15.11.2021</TableCell>
          <TableCell>Data Privacy</TableCell>
          <TableCell>Professional users, End users</TableCell>
          <TableCell>Data privacy _document.PDF</TableCell>
          <TableCell/>
        </Row>
        <Row>
          <TableCell>15.11.2021</TableCell>
          <TableCell>Data Privacy</TableCell>
          <TableCell>Professional users, End users</TableCell>
          <TableCell>Data privacy _document.PDF</TableCell>
          <TableCell/>
        </Row>
      </Table>
    </TableContainer>
  );
}

export default DataPrivacyTable;
