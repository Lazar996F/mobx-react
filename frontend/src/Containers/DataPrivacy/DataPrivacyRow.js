import CircleWithVerticalLine from '../../Components/CircleWithVerticalLine';
import TimelineChip from '../../Components/Chip/TimelineChip';
import Button from '../../Components/Button/Secondary';
import H3 from '../../Components/H3';
import RoleTextBox from '../../Components/Accordion/RoleTextBox';
import ColumnButton from '../../Components/Accordion/ColumnButton';
import RowWrapper from '../../Components/Accordion/RowWrapper';
import Accordion from '../../Components/Accordion';
import ExpandedContent from './ExpandedContent';

function DataPrivacyRow({ notShowLine,role,date,pdf,textContent,state }) {

  return (
    <RowWrapper>
      <CircleWithVerticalLine notShowLine={ notShowLine } state={state}/>
      <Accordion expandedContent={() => ExpandedContent({textContent,pdf})}>
        <H3>Active from {date}</H3>
        <TimelineChip state={state}/>
        <RoleTextBox>
            <H3>{role}</H3>
        </RoleTextBox>
        <ColumnButton>
          <Button/>
        </ColumnButton>
      </Accordion>
    </RowWrapper>
  );
}

export default DataPrivacyRow;
