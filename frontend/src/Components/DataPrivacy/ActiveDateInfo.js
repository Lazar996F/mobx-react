import {ActiveDateView, ChipText, DateView, TimelineChip,ChipWrapper} from '../../Styled/DataPrivacy';

function ActiveDateInfo() {
  return (
    <ActiveDateView>
      <DateView>Active from 15.11.2021</DateView>
      <ChipWrapper>
        <TimelineChip>
          <ChipText>CURRENT</ChipText>
        </TimelineChip>
      </ChipWrapper>
    </ActiveDateView>
  );
}

export default ActiveDateInfo;
