import {RowContent} from '../../Styled/DataPrivacy';
import AccordionRow from './AccordionRow';
import ActiveDateInfo from './ActiveDateInfo'
function DataPrivacyRow() {
  return (
    <AccordionRow>
      <RowContent>
        <ActiveDateInfo/>
        <div>Item 2</div>
        <div>Item 3</div>
      </RowContent>
    </AccordionRow>
  );
}

export default DataPrivacyRow;
