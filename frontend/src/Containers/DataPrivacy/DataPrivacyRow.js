import { useContext } from 'react';

import CircleWithVerticalLine from '../../Components/CircleWithVerticalLine';
import TimelineChip from '../../Components/Chip/TimelineChip';
import Button from '../../Components/Button/Secondary';
import H3 from '../../Components/H3';
import RoleColumn from '../../Components/Accordion/RoleTextColumn';
import ColumnButton from '../../Components/Accordion/ColumnButton';
import RowWrapper from '../../Components/Accordion/RowWrapper';
import Accordion from '../../Components/Accordion';
import ExpandedContent from '../../Components/Accordion/ExpandedContent';
import ActiveInfoColumn from '../../Components/Accordion/ActiveInfoColumn';
import UserRoleView from '../../Components/UserRoleView';
import P from '../../Components/P';
import DownloadPdf from '../../Components/DownloadPdf';
import DataPrivacyContext, { SET_EDIT_POLICY_DATA } from './Context';
import { checkAndReturnUserRole } from '../../Utils/helpers';

function DataPrivacyRow({ notShowLine, role, date, pdf, textContent, state }) {
  const { dispatch } = useContext(DataPrivacyContext);

  const tabContent = () => (
    <div className="line-height-normal">
      <H3>Changes:</H3>
      <H3>Wiser by Feller:</H3>
      <P>{ textContent }</P>
      <DownloadPdf/>
    </div>
  )

  const onButtonChangeClick = () => {
  const usersRoles = checkAndReturnUserRole(role);

    dispatch({
      type: SET_EDIT_POLICY_DATA,
      payload: {
        areProfessionalUsers: usersRoles.areProfessionalUsers,
        areEndUsers: usersRoles.areEndUsers,
        pdfData: pdf
      }
    });
  }

  return (
    <>
      <RowWrapper>
        <CircleWithVerticalLine notShowLine={ notShowLine } state={ state }/>
        <Accordion expandedContent={ () => ExpandedContent({ tabContent, pdf, date }) }>
          <ActiveInfoColumn>
            <H3>Active from { date }</H3>
            <TimelineChip state={ state }/>
          </ActiveInfoColumn>
          <RoleColumn>
            <UserRoleView role={ role }/>
          </RoleColumn>
          <ColumnButton>
          </ColumnButton>
        </Accordion>
      </RowWrapper>
      { state === 'draft' && <Button label="Change" linkTo="privacy/update" onClick={onButtonChangeClick}/> }
    </>
  );
}

export default DataPrivacyRow;
