import {ImFilePdf} from 'react-icons/im'
import {MdExpandMore} from 'react-icons/md'
import {
  DocumentBox,
  IconWrapper,
  DocumentName
} from '../Styled/DocumentTableCell';

function DocumentTableCell({documentName}) {
  return (
    <DocumentBox>
      <IconWrapper>
        <ImFilePdf size="1.2em"/>
      </IconWrapper>
      <DocumentName>{documentName}</DocumentName>
    </DocumentBox>
  );
}

export default DocumentTableCell;
