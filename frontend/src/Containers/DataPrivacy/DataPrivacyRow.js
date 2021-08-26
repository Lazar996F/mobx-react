import CircleWithVerticalLine from '../../Components/CircleWithVerticalLine';
import TimelineChip from '../../Components/Chip/TimelineChip';
import Button from '../../Components/Button/Secondary';
import H3 from '../../Components/H3';
import RoleColumn from '../../Components/Accordion/RoleTextColumn';
import ColumnButton from '../../Components/Accordion/ColumnButton';
import RowWrapper from '../../Components/Accordion/RowWrapper';
import Accordion from '../../Components/Accordion';
import ExpandedContent from './ExpandedContent';
import ActiveInfoColumn from '../../Components/Accordion/ActiveInfoColumn';
import Tooltip from '../../Components/Tooltip';
import UserRoleIcon from '../../Components/UserRoleIcon';

function DataPrivacyRow({ notShowLine, role, date, pdf, textContent, state }) {

  return (
    <RowWrapper>
      <CircleWithVerticalLine notShowLine={ notShowLine } state={ state }/>
      <Accordion expandedContent={ () => ExpandedContent({ textContent, pdf }) }>
        <ActiveInfoColumn>
            <H3>Active from { date }</H3>
          <TimelineChip state={ state }/>
        </ActiveInfoColumn>
        <RoleColumn>
          <Tooltip title={role}><UserRoleIcon role={role}/></Tooltip>
        </RoleColumn>
        <ColumnButton>
          <Button/>
        </ColumnButton>
      </Accordion>
    </RowWrapper>
  );
}

export default DataPrivacyRow;
