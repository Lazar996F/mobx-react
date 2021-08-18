import {ImFilePdf} from 'react-icons/im'
import {DocumentBox,IconWrapper,DocumentName,ChangeButton,ArrowButton,ButtonsBox} from "../Styled/DocumentTableCell";

function DocumentTableCell({documentName}) {

  return (
    <DocumentBox>
      <IconWrapper>
        <ImFilePdf size="1.2em"/>
      </IconWrapper>
      <DocumentName>{documentName}</DocumentName>
      <ButtonsBox>
        <ChangeButton>Change</ChangeButton>
        <ArrowButton/>
      </ButtonsBox>
    </DocumentBox>
  );
}

export default DocumentTableCell;
