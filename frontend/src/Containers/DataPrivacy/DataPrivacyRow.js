import CircleWithVerticalLine from '../../Components/CircleWithVerticalLine';
import TimelineChip from '../../Components/Chip/TimelineChip';
import Button from '../../Components/Button/Secondary';
import H3 from '../../Components/H3';
import RoleTextColumn from '../../Components/Accordion/RoleTextColumn';
import ColumnButton from '../../Components/Accordion/ColumnButton';
import RowWrapper from '../../Components/Accordion/RowWrapper';
import Accordion from '../../Components/Accordion';
import ExpandedContent from './ExpandedContent';
import ActiveInfoColumn from '../../Components/Accordion/ActiveInfoColumn';

function DataPrivacyRow({ notShowLine, role, date, pdf, textContent, state }) {

  return (
    <RowWrapper>
      <CircleWithVerticalLine notShowLine={ notShowLine } state={ state }/>
      <Accordion expandedContent={ () => ExpandedContent({ textContent, pdf }) }>
        <ActiveInfoColumn>
            <H3>Active from { date }</H3>
          <TimelineChip state={ state }/>
        </ActiveInfoColumn>
        <RoleTextColumn>
          <H3>{ role }</H3>
        </RoleTextColumn>
        <ColumnButton>
          <Button/>
        </ColumnButton>
      </Accordion>
    </RowWrapper>
  );
}

export default DataPrivacyRow;
