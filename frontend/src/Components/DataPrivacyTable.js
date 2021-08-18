import {Table, HeaderRow, HeaderCell, TableContainer, Row, TableCell} from '../Styled/Table'
import TimelineNotification from "./TimelineNotification";


const dataPrivacy = [
  {
    timeline: {
      date: '15.11.2021',
      isDraft: true,
    },
    title: 'Data Privacy',
    role: 'Professional users, End users',
    document: 'Data privacy_document.PDF'
  },
  {
    timeline: {
      date: '15.11.2021',
      isDraft: false,
    },
    title: 'Data Privacy',
    role: 'Professional users, End users',
    document: 'Data privacy_document.PDF'
  },
  {
    timeline: {
      date: '15.11.2021',
      isDraft: true,
    },
    title: 'Data Privacy',
    role: 'Professional users, End users',
    document: 'Data privacy_document.PDF'
  },
  {
    timeline: {
      date: '15.11.2021',
      isDraft: true,
    },
    title: 'Data Privacy',
    role: 'Professional users, End users',
    document: 'Data privacy_document.PDF'
  }
]

function DataPrivacyTable() {

  const TableRows = dataPrivacy.map(rowData => (
    <Row>
    <TableCell>
      <TimelineNotification isDraft={rowData.timeline.isDraft} date={rowData.timeline.date}/>
    </TableCell>
    <TableCell>{rowData.title}</TableCell>
    <TableCell>{rowData.role}</TableCell>
    <TableCell>{rowData.document}</TableCell>
  </Row>));

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
          {TableRows}
        </tbody>
      </Table>
    </TableContainer>
  );
}

export default DataPrivacyTable;
