import { Table, HeaderRow, HeaderCell, TableContainer, Row, TableCell } from '../Styled/Table'

function DataPrivacyTable() {
  const onClickRow = () => {
    console.log('row clicked');
  }
  return (
    <TableContainer>
      <Table>
        <thead>
          <HeaderRow>
            <HeaderCell>Active from</HeaderCell>
            <HeaderCell>Title</HeaderCell>
            <HeaderCell>Role</HeaderCell>
            <HeaderCell>Document</HeaderCell>
          </HeaderRow>
        </thead>
        <tbody>
          <Row onClick={onClickRow}>
            <TableCell>15.11.2021</TableCell>
            <TableCell>Data Privacy</TableCell>
            <TableCell>Profesional users, End users</TableCell>
            <TableCell>Data privacy _document.PDF</TableCell>
            <TableCell>
              <button>Change</button>
            </TableCell>
          </Row>
          <Row>
            <TableCell>15.11.2021</TableCell>
            <TableCell>Data Privacy</TableCell>
            <TableCell>Profesional users, End users</TableCell>
            <TableCell>Data privacy _document.PDF</TableCell>
            <TableCell/>
          </Row>
          <Row>
            <TableCell>15.11.2021</TableCell>
            <TableCell>Data Privacy</TableCell>
            <TableCell>Profesional users, End users</TableCell>
            <TableCell>Data privacy _document.PDF</TableCell>
            <TableCell/>
          </Row>
          <Row>
            <TableCell>15.11.2021</TableCell>
            <TableCell>Data Privacy</TableCell>
            <TableCell>Profesional users, End users</TableCell>
            <TableCell>Data privacy _document.PDF</TableCell>
            <TableCell/>
          </Row>
        </tbody>
      </Table>
    </TableContainer>
  );
}

export default DataPrivacyTable;
