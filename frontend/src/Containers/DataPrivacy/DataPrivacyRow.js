import { Link } from 'react-router-dom';
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
import Store from '../../Store';

function DataPrivacyRow({ notShowLine, role, date, pdf, textContent, state }) {

  const tabContent = () => (
    <div className="line-height-normal">
      <H3>Changes:</H3>
      <H3>Wiser by Feller:</H3>
      <P>{ textContent }</P>
      <DownloadPdf/>
    </div>
  )

const onChangeButtonClick = ({role,date,pdf}) => {
    Store.setPolicyForUpdate({role,date,pdf});
}

  return (
      <RowWrapper>
        <CircleWithVerticalLine notShowLine={ notShowLine } state={ state }/>
        <Accordion expandedContent={ () => ExpandedContent({ tabContent, pdf, date }) }>
          <ActiveInfoColumn>
            <H3 className="mb-0">Active from { date }</H3>
            <TimelineChip state={ state }/>
          </ActiveInfoColumn>
          <RoleColumn>
            <UserRoleView role={ role }/>
          </RoleColumn>
          <ColumnButton>
            { state === 'draft' && <Link to="/privacy/update" onClick={() => onChangeButtonClick({role,date,pdf})}><Button label="Change"/></Link> }
          </ColumnButton>
        </Accordion>
      </RowWrapper>
  );
}

export default DataPrivacyRow;
