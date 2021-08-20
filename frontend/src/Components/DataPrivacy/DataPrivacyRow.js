import {RowContent, RoleText, ChangeButtonWrapper, ChangeButton} from '../../Styled/DataPrivacy';
import AccordionRow from './AccordionRow';
import ActiveDateInfo from './ActiveDateInfo';

function DataPrivacyRow() {
  return (
    <AccordionRow>
      <RowContent>
        <ActiveDateInfo/>
        <RoleText>Professional users, End user</RoleText>
        <ChangeButtonWrapper>
          <ChangeButton>Change</ChangeButton>
        </ChangeButtonWrapper>
      </RowContent>
    </AccordionRow>
  );
}

export default DataPrivacyRow;
